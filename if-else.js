// const rima = new Date();
// console.log(rima);

// if(new Date().getHours() < 18){
//     console.log('good day');
// }
//  const hour = new Date();
// if (hour < 18){
//     console.log("Good day");
// }else{
//     console.log("Good evening");
// }

const time = new Date().getHours();
let greeting;

if(time < 10){
    console.log("Good Morning");
}else if(time < 20){
    console.log("Good day");
}
else{
    console.log("Good Evening");
}
