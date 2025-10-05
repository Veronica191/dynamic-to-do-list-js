// Persisted To-Do List with Local Storage
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // In-memory tasks array (source of truth)
  let tasks = [];

  // Save tasks array to localStorage
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Render tasks from the tasks array into the DOM
  function renderTasks() {
    taskList.innerHTML = ''; // clear current list
    tasks.forEach((taskText, index) => {
      const li = document.createElement('li');

      // Use a span for the text so li can hold button too
      const span = document.createElement('span');
      span.textContent = taskText;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn'); // use classList.add as required

      // Remove the task from array and update storage + DOM
      removeBtn.addEventListener('click', () => {
        tasks.splice(index, 1); // remove by index to handle duplicates correctly
        saveTasks();
        renderTasks();
      });

      li.appendChild(span);
      li.appendChild(removeBtn);
      taskList.appendChild(li);
    });
  }

  // Add a task; if taskTextParam provided, use it (used for loading), else use input.
  // save === true will persist to localStorage; when loading from storage pass save=false.
  function addTask(taskTextParam, save = true) {
    const taskText = typeof taskTextParam === 'string' ? taskTextParam : taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    tasks.push(taskText);

    if (save) {
      saveTasks();
    }

    renderTasks();
    taskInput.value = ''; // clear input
  }

  // Load tasks from localStorage into tasks array and render them
  function loadTasks() {
    const stored = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = Array.isArray(stored) ? stored : [];
    renderTasks();
  }

  // Event listeners
  addButton.addEventListener('click', () => addTask());
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Initialize app from Local Storage
  loadTasks();
});