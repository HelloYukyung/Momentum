const form =document.querySelector(".js-form"), // querySelector는 찾은 첫번째 것을 가져온다.
    input =form.querySelector("input"),
    greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser",
    SHOWING_CN ="showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
    event.preventDefault(); // event가 다른곳(?)으로 사라지는 것을 막음 
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue)
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit)
    

}

function paintGreeting(text) { //form을 지우고 나에게 greeting을 보여주고 내가 보낸 text를 넣어줌 
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText =`Hello ${text}`;

}

function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser===null){
        askForName();
        //he is not 

    }else{
        paintGreeting(currentUser);
        //he is

    }
}

function init(){
loadName();
}

init();