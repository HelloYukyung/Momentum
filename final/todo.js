const toDoForm =document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList")

const TODOS_LS ="toDos";

let toDos =[];

function filterFn(toDo) {// forEach 에서 function을 실행하는 것과 같이 각각의 item과 같이 실행됨 
    return toDo.id ===1// true인 아이템들만 가지고 새로운 array를 만듬 
} 

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode; 
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        //console.log(toDo.id, li.id); //li.id를 보면 string인 것을 볼 수 있음 따라서 parseInt 
        return toDo.id !==parseInt(li.id) //모든 toDos가 'li'의 id와 같지 않을때 
    });
    toDos =cleanToDos //toDos를 let으로 저장하는 이유 
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); //JSON.stringify; object >string
}

function paintToDo(text) {
    const li =document.createElement("li");
    const delBtn = document.createElement("button");
    const span =document.createElement("span");
    const newId = toDos.length +1
    span.innerText = text;
    delBtn.innerHTML ="❌";
    delBtn.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id =newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
    }


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue)
    toDoInput.value="";
}

function loadToDos() {
    const loadedToDos =localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos =JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
            
        });
            
    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}
init();