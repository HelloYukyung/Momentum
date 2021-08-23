const title =document.querySelector("#title");

function handleClick(event) {
    title.style.color ="red";

}
title.addEventListener("click",handleClick);

// function handleClick(event) {
//     console.log(event);
// }// 이벤트를 다룰 함수를 만들 때마다 자바스크립트는 자동적으로 함수를 객체에 붙인다. 
// title.addEventListener("click",handleClick);



// function handleResize(){
//     console.log("I have been resized")
// }
// window.addEventListener("resize",handleResize) //윈도우 사이즈가 변경될때, 이 함수를 호출 --()는 즉시호출
