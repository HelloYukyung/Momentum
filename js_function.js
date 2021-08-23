function sayHello(potato,age){
    console.log('hello!',potato,"you are",age,"years of age.");
}
//sayHello("yk",15)



function sayBye(name){
    return `bye bye ${name}`;
}


const greetyukyung = sayBye("yukyung")
console.log(greetyukyung) //greetyukyung은 sayBye의 실행된 결과 값, 앞서 sayBye에서 return 을 정의 하지 않았다면 undefined가 나왔을것,