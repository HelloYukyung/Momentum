const clockContainer =document.querySelector(".js-clock"); // querySelector는 element의 자식을 탐색 
const clockTitle = clockContainer.querySelector("h1"); //clock class의 자식(js-clock의 자식)을 탐색하고 싶음 

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds()
    clockTitle.innerText =`${hours< 10 ? `0${hours}` : hours}:${minutes< 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`: seconds}`; // mini if


}
function init(){
    getTime();
    setInterval(getTime,1000)
}
init();