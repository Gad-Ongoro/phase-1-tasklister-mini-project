document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let li;

  let task = document.getElementById("new-task-description");

  let tasks = (document.querySelector("#tasks"))

  document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    addLi(task.value); 
  });

  function addLi(todo) {
    li = document.createElement("li");
    li.innerHTML = todo;
    tasks.appendChild(li);

    delTasks();
  };

  function delTasks() {
    let x = document.createElement("button");
    x.innerHTML = "X";
    li.appendChild(x);

    x.addEventListener("click", () => {
      x.parentNode.remove();
    })
  };
});