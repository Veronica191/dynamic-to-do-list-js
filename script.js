// Run the script only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // get input and trim spaces

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create li element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');  // ✅ use classList.add

        // Remove task when button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li, then append li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});