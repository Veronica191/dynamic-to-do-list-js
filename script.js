// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Task input field
    const taskList = document.getElementById('task-list');     // Unordered list for tasks

    // Step 2: Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Step 3: Create a new li element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Step 4: Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Step 5: Add functionality to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Step 6: Append remove button to li, then li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Step 7: Clear the input field
        taskInput.value = '';
    }

    // Step 8: Attach event listeners
    addButton.addEventListener('click', addTask); // Add task on button click

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(); // Add task on Enter key
        }
    });

    // Step 9: (Optional) Invoke addTask on DOMContentLoaded if you want
    // For this app, we only attach listeners, not auto-add a task.
    // addTask();  <-- Uncomment if you want it to run once when the page loads
});
