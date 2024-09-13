 function RadianToDegree(radian){
    const degree = radian * 57.2958;
    console.log(degree);
    const result = degree.toFixed(2);
    return result;
}
console.log(RadianToDegree(10)); 

function publicBusFare(People){
    const bus = 50;
    const micro = 11;
    const publicBusCost = 250;

    const remainAfterBus = People % bus;
    const remainAfterMicro = remainAfterBus % micro;
    return remainAfterMicro * publicBusCost;

}
console.log(publicBusFare(365));

function IsJavaScriptFile(str) {
  const check = str.indexOf(".js");
  if (check !== -1) {
    return true;
  }
  return false;
}

console.log(IsJavaScriptFile('app.png'));



function OilPrize(dejal, patrol,octral){
   const dejalPrize = 114;
   const patrolPrize = 130;
   const octralPrize = 135;


   const remainDejal = dejal * dejalPrize;
   const remainPatrol = patrol * patrolPrize;
   const remainOctral = octral * octralPrize;

   const totalCost = remainDejal + remainOctral + remainPatrol;
   return totalCost;

}
console.log(OilPrize(30, 20, 10));


function IsBestFriend(friend1, friend2) {
    if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
        return true;
    } else {
        return false;
    }
}

const bestFriend1 = {name: 'abul', friend: 'babul'};
const bestFriend2 = {name: 'kabul', friend: 'abul'};
const bestFriend = IsBestFriend(bestFriend1, bestFriend2);
console.log(bestFriend); 
