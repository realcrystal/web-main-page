const toDoForm = document.querySelector(".js-form-todo"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-list-todo");

const TODOS_LS = "toDos";
const CHECKED_CN = "checked";

let toDos = [];

function updateId(removedId) {
  if (toDos.length < removedId) {
    // 목록의 마지막 todo를 삭제한 경우 아무것도 하지 않음
    return;
  } else {
    let newId = parseInt(removedId);
    for (let i = removedId - 1; i < toDos.length; i++) {
      toDos[i].id = newId;
      toDoList.children[i].id = newId++;
    }
  }
}

function handleDeleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  updateId(li.id);
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleCheckTodo(event){
  const checkBox = event.target;
  const li = checkBox.parentNode;
  if(checkBox.checked){
    li.classList.add(CHECKED_CN);
    toDos[parseInt(li.id)-1].checked = true;
  }else{
    li.classList.remove(CHECKED_CN);
    toDos[parseInt(li.id)-1].checked = false;
  }
  saveToDos();
}

function paintToDo(text, checked) {
  const listNode = document.createElement("li");
  const span = document.createElement("span");

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.checked = checked;
  checkBox.addEventListener("click", handleCheckTodo);
  if(checked){
    listNode.classList.add(CHECKED_CN);
  }

  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  delBtn.innerText = "remove";
  delBtn.addEventListener("click", handleDeleteToDo);

  span.innerText = text;
  listNode.appendChild(checkBox);
  listNode.appendChild(span);
  listNode.appendChild(delBtn);
  listNode.id = newId;
  toDoList.appendChild(listNode);

  const toDoObj = {
    id: newId,
    text: text,
    checked: checked
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue, false);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text, toDo.checked);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleToDoSubmit);
}

init();
