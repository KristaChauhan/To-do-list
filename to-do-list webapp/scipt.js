
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

   
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;

    
    const deleteBtn = li.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    
    taskList.appendChild(li);

    
    taskInput.value = "";
});


taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addBtn.click();
    }
});
