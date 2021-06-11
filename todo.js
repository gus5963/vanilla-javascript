const todoForm = document.querySelector(".js-todoForm"),
todoInput = todoForm.querySelector("input"),
todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text){
const li = document.createElement("li");
const delBtn = document.createElement("button");
const span = document.createElement("span");
const newId = toDos.length +1;
delBtn.innerText = "❌";
delBtn.addEventListener("click", deleteToDo);
span.innerText=text;
li.id = newId
li.appendChild(delBtn);
li.appendChild(span);
todoList.appendChild(li);
const toDoObj = {
    text: text,
    id : newId
};
toDos.push(toDoObj);
saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value="";
}

function laodToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintTodo(toDo.text);
        });
      }
}

function init() {
laodToDos();
todoForm.addEventListener("submit", handleSubmit);

}

init();