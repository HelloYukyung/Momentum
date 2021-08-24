const title = document.querySelector("#title");

// toggle을 사용하여 간단하게 
const CLICKED_CLASS ="clicked";
function handleClick(){
    title.classList.toggle(CLICKED_CLASS)



// contains를 사용하여 class를 리스트화 
// const CLICKED_CLASS ="clicked";
// function handleClick(){
//     const hasClass = title.classList.contains(CLICKED_CLASS)
//     if (hasClass){
//         title.classList.remove(CLICKED_CLASS);   
//     } else {
//         title.classList.add(CLICKED_CLASS);
//     }
// }

// //다음 코드는 id =title class="btn" 일때 안돌아감,, 이미 class ="btn"으로 지정되어있으므로,, 따라서 class를 리스트화해야함 
// const CLICKED_CLASS ="clicked";
// function handleClick(){
//     const currentClass = title.className;
//     if (currentClass !== CLICKED_CLASS){
//         title.className =CLICKED_CLASS
//     } else {
//         title.className ="";
//     }
// }


function init () {
    title.addEventListener("click", handleClick);
}
init();
