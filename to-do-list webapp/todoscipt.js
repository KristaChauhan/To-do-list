// Get references to elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task to list
addBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;

    // Add event listener for deleting the task
    const deleteBtn = li.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Add event listener for toggling task completion
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Append new task to the list
    taskList.appendChild(li);

    // Clear input field after adding task
    taskInput.value = "";
});

// Optional: Allow pressing Enter to add task
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});
