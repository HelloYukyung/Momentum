const toDoForm =document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = 'toDos';

const toDos =[]; // 해야할 일을 생성했을때마다, 'toDos' array에 추가되도록 할 것임 

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));//JSON.stringify는 자바스크립트 object를 string으로 바꿔줌 
}

function paintToDo(Text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span =document.createElement("span");
    const newId =toDos.length + 1 // toDos.length= toDos array의 길이를 샌다.
    delBtn.innerText ="❌";
    span.innerText = Text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id =newId
    toDoList.appendChild(li);
    const toDoObj = {
        text: Text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();


}

function handleSubmit(event){
    event.preventDefault();
    const currentValue =toDoInput.value;
    paintToDo(currentValue)
    toDoInput.value ="";
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !==null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(todo){ // array를 위한 function
            paintToDo(toDo.text);
        });

    }
} 

function init(){
   loadToDos();
   toDoForm.addEventListener("submit",handleSubmit)
}
init();