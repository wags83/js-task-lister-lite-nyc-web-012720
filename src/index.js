document.addEventListener("DOMContentLoaded", () => {
  const task = document.getElementById("new-task-description")
  const taskForm = document.getElementById("create-task-form")
  const ul = document.getElementById("tasks")
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const li = document.createElement("li")
    li.innerText = task.value
    document.getElementById("tasks").append(li)
  })
});
