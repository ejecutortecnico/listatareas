document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => renderTask(task));
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    const text = li.querySelector(".task-text").textContent;
    const date = li.querySelector(".date").textContent;
    const completed = li.querySelector("input[type='checkbox']").checked;
    tasks.push({ text, date, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDate = document.getElementById("taskDate");

  const taskText = taskInput.value.trim();
  const dateValue = taskDate.value;

  if (!taskText || !dateValue) {
    alert("Por favor, completa la tarea y la fecha.");
    return;
  }

  const task = { text: taskText, date: dateValue, completed: false };
  renderTask(task);
  saveTasks();

  taskInput.value = "";
  taskDate.value = "";
}

function renderTask(task) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  const spanText = document.createElement("span");
  spanText.textContent = task.text;
  spanText.className = "task-text";
  if (task.completed) {
    spanText.classList.add("completed");
  }

  const dateSpan = document.createElement("span");
  dateSpan.textContent = task.date;
  dateSpan.className = "date";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  checkbox.addEventListener("change", () => {
    spanText.classList.toggle("completed");
    saveTasks();
  });

  const infoDiv = document.createElement("div");
  infoDiv.className = "task-info";
  infoDiv.appendChild(spanText);
  infoDiv.appendChild(dateSpan);
//comentarios en el codigo
  li.appendChild(checkbox);
  li.appendChild(infoDiv);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
}
