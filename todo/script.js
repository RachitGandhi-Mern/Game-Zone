


const btn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const task = document.getElementById("tasks");
const input = document.querySelector("#todo-input ");

id = 0;

btn.addEventListener("click", function () {
  const taskDiv = document.createElement("div");
  const li = document.createElement("li");
  const itag = document.createElement("i");
  itag.setAttribute("class", "ri-delete-bin-7-line");
  taskDiv.appendChild(li);
  taskDiv.classList.add("first-task");
  list.appendChild(taskDiv);
  taskDiv.appendChild(itag);
  const inputval = input.value;
  li.innerHTML = inputval;
  input.value = " ";

  localStorage.setItem("data", list.innerHTML);
});

list.addEventListener("click", function (e) {
  if (e.target.tagName === "i") taskDiv.remove();
  e.target.parentElement.remove();
  localStorage.setItem("data", list.innerHTML);
});

list.innerHTML = localStorage.getItem("data");
