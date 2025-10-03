// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Task input field
    const taskList = document.getElementById('task-list');     // Task list container

    // Define addTask function
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // ----- Task Creation and Removal -----
        // 1. Create a new li element and set its textContent
        const li = document.createElement('li');
        li.textContent = taskText;

        // 2. Create a new button element for removing the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // 3. Assign onclick event to remove button
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // 4. Append the remove button to the li
        li.appendChild(removeBtn);

        // 5. Append the li to the task list
        taskList.appendChild(li);

        // 6. Clear the task input field
        taskInput.value = "";
    }

    // Add event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for pressing Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
