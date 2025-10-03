// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input and trim spaces

        // If input is empty, alert user
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item (li)
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // When remove button is clicked, delete the task
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to the li, then li to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Event listener for Add Task button
    addButton.addEventListener("click", addTask);

    // Allow adding tasks by pressing Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
