// **if,else,and,or**

// .5 if else Function practice( 클릭할때마다 색깔을 바꾸고 싶을때 )
const title =document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)" ;
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color=OTHER_COLOR
    } else{
        title.style.color= BASE_COLOR
    }
}

function init () {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();

// wifi 껐을때, 켰을때 출력 

// function handleOffline() {
//     console.log("ByeBye");
// }
// window.addEventListener("offline",handleOffline)


// function handleOnline(){
//     console.log("Welcome back");
// }
// window.addEventListener("online",handleOnline)

// .4
// const age =prompt("How old are you");
// console.log(age);

// if (age >= 18 && age <= 21 ){
//     console.log('you can drink but you should not');
// } else if (age> 21){
//     console.log("go ahed")
// } else {
//     console.log("too young")
// }



// .3
// if (20>5 && "yk"==="yk"){
//     console.log("yes")// $$ both of them should be true || one or the other
// } else{
//     console.log ("nop")
// }



// .2
// if (10===9){
//     console.log("stupid")
// }else if ("10"=="10"){
//     console.log("goodjob")
// } else {
//     console.log("never")
// }


// .1
// if (true){
//     console.log("hi")};
// }else{
//     console.log("ho");
// }
