document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener("submit", function(e){
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
    e.target.new_task_description.value = " "
  })
})

function buildToDo(todo){
  let toDoList = document.createElement("li")
  let btn = document.createElement("button")
  btn.addEventListener("click", handleDelete)
  toDoList.textContent = `${todo}`
  btn.textContent = "Delete"
  toDoList.appendChild(btn)
  document.querySelector("#tasks").appendChild(toDoList)
}

function handleDelete(e){
  e.target.parentNode.remove();
}


