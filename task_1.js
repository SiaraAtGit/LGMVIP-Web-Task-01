function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
      <button class="done-btn" onclick="markAsDone(this)"><i class="fa-solid fa-check"></i></button>
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">x</button>
      `;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
  
  function markAsDone(btn) {
    const taskText = btn.parentNode.querySelector("span");
    taskText.style.textDecoration = "line-through";
  }
  
  function deleteTask(btn) {
    const taskItem = btn.parentNode;
    taskItem.parentNode.removeChild(taskItem);
  }
  
  