"use strict";

// const markMassTest1 = 78
// const markHeightTest1 = 1.69
// const markMassTest2 = 95
// const markHeightTest2 = 1.88
// const johnMassTest1 = 92
// const johnHeightTest1 = 1.95
// const johnMassTest2 = 85
// const johnHeightTest2 = 1.76
// const markBMITest1 =  markMassTest1 / (markHeightTest1 **2)
// const markBMITest2 = markMassTest2 / (markHeightTest2 **2)
// const johnBMITest1 = johnMassTest1 / (johnHeightTest1 **2)
// const johnBMITest2 =johnMassTest2 / (johnHeightTest2 **2)
// const markHigherBMITest1 = markBMITest1 > johnBMITest1
// const markHigherBMITest2 = markBMITest2 > johnBMITest2
// console.log (markHigherBMITest1, markHigherBMITest2)
// console.log( Math.floor(markBMITest1))
// console.log( Math.floor(markBMITest2))
// console.log( Math.floor(johnBMITest1))
// console.log( Math.floor(johnBMITest1))
// if (markBMITest1 > johnBMITest1){
//     console.log(`"Mark's BMI ${ markBMITest1.toFixed(2)} is higher than John's ${johnBMITest1.toFixed(2)}"`)
// }
// else {
//     console.log(`"Mark's BMI ${ markBMITest1.toFixed(2)} is lower Than John's ${johnBMITest1.toFixed(2)}"`)
// }
// if (markBMITest2 > johnBMITest2){
//     console.log(`"Mark's BMI ${ markBMITest2.toFixed(2)}  is higher Than John's ${ johnBMITest2.toFixed(2)} "`)
// }
// else{
//     console.log(`"Mark's BMI ${ markBMITest2.toFixed(2)}  is lower Than John's ${ johnBMITest2.toFixed(2)} "`)
// }
// // const age = 17
// // const isOldEnough = age >= 18
// // if (isOldEnough){
// // console.log("You can start driving")
// // }
// // else {
// //     console.log ("Oga CHill")
// // }
// const dolphins_Average_Score = (96 + 108 + 89 ) / 3
// const koalas_Avearage_Score = (88 + 91 + 110) / 3
// const minimum_score = 100
// console.log(dolphins_Average_Score)
// console.log(koalas_Avearage_Score)
// if (dolphins_Average_Score > koalas_Avearage_Score){
//     console.log("Dolphins win the game by a narrow lead")
// }
// else if(dolphins_Average_Score === koalas_Avearage_Score) {
//     console.log("it's a draw the winner will have to be decided")
//     }
// else{
//     console.log("how the koalas take win sef?")
// }
// const dolphins_Average_Score1 = (97 + 112 + 101 ) / 3
// const koalas_Avearage_Score1 = (109 + 95 + 123) / 3
// if (dolphins_Average_Score1 > koalas_Avearage_Score1 &&  minimum_score ){
//     console.log("Dolphins win the game by a narrow lead")
// }
// else if(dolphins_Average_Score1 === koalas_Avearage_Score1 && minimum_score) {
//     console.log("it's a draw the winner will have to be decided")
//     }
// else{
//     console.log("how the koalas take win sef?")
// }
// const dolphins_Average_Score2 = (97 + 112 + 101 ) / 3
// const koalas_Avearage_Score2 = (109 + 95 + 106) / 3
// if (dolphins_Average_Score2 > koalas_Avearage_Score2 &&  minimum_score ){
//     console.log("Dolphins win the game by a narrow lead")
// }
// else if(dolphins_Average_Score2 === koalas_Avearage_Score2 && minimum_score) {
//     console.log("it's a draw the winner will have to be decided")
//     }
// else{
//     console.log("how the koalas take win sef?")
// }
// let day ="sat"
// if (day ==="monday") {
//     console.log("wake up mumu")
// }
// else if( day ===  "tuesday" && "wednesday"){
//     console.log("comrade i don wake")
// }
// else if (day === "thursday" ){
//     console.log("i don japa")
// }
// else if (day === "friday"){
//     console.log("it's friday night i just have to party")
// }
// else if (day === "saturday" && "sunday") {
//     console.log("allow me to enjoy myself")
// }
// else {
//     console.log("if you don't gerrit forget abourit")
// }
// let bill = 430
// // const tip = bill <= 50 <= 300 ? bill * 0.15 : bill * 0.2
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
// console.log(`the bill was ${bill} the tip was ${tip} and the final value was ${tip + bill}`)
// const Dolphin_1st_average_score = 44 + 23 + 71
// const Koalas_1st_average_score = 65 + 54 + 59
// function calcAverage  (average_score) {
//     average_score / 3
// }
// function checkWinner (){
// const avgDolphins = calcAverage( Dolphin_1st_average_score)
// const avgKoalas = calcAverage(Koalas_1st_average_score)
// if (avgDolphins * 2 >= avgKoalas){
//     return `Dolphins win (${avgDolphins} vs ${avgKoalas})`
// }
// else if (avgDolphins * 2 === avgKoalas) {
//     return `its a draw (${avgDolphins} vs ${avgKoalas})`
// }
// console.log(checkWinner())
// }
// console.log(calcAverage(24))
//
// const danielMeta ={
//     name:'Daniel',
//     age:'20',
//     occupation:'Student Developer',
//     hasDriversLicense:false,
//     getSummary: function(){
// return `${this.name} is a ${this.age} year old ${this.occupation}. and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license `
//     }
// // }
// // console.log(danielMeta.getSummary() )
// const johnMetaData = {
//   name: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     const BMI = this.mass / this.height ** 2;
//     return BMI;
//   },
// };
// const markMetaData = {
//   name: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     const bmi = this.mass / this.height ** 2;
//     return bmi;
//   },
// };
// const fixed = Math.floor
// if (johnMetaData.calcBMI() > markMetaData.calcBMI()) {
//     console.log(`${johnMetaData.name}'s BMI (${Math.floor(johnMetaData.calcBMI())}) is higher than ${markMetaData.name}'s ${Math.floor(markMetaData.calcBMI)} !` )
// }
// else if (johnMetaData.calcBMI < markMetaData.calcBMI){
//     console.log(`${markMetaData.name}'s BMI (${markMetaData.calcBMI()}) is higher than ${johnMetaData.name}'s ${johnMetaData.calcBMI()} !` )
// }
// for (let rep = 1; rep <= 10; rep++ ){
//     console.log(`Omo make fifa Work now ${rep}` )
// }
// const newArray = [
//     '  Coldplay','Post Malone','92 Explorer'
// ]
// const types = [];
// for ( let count = 0; count < newArray.length; count++) {
//     console.log(newArray[count] ,typeof newArray[count])
//     types[count] = typeof newArray[count];  
// }
// console.log(types)
// let dice = Math.trunc(Math.random() * 6) + 1
// while (dice !== 6 ) {
//     console.log(`You rolled a ${dice} `)
//     dice = Math.trunc(Math.random() * 6) + 1
//     if (dice === 6){
//         console.log(`You rolled a 6 `)
//     }
// }
var calcTip = function calcTip(bill) {
  var tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  return tip;
};

console.log(calcTip(1100));
var billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tipsArray = [];
var totalsArray = [];

for (var i = 0; i < billsArray.length; i++) {
  tipsArray.push(calcTip(billsArray[i]));
  totalsArray.push(billsArray[i] + tipsArray[i]);
}

var calcAverage = function calcAverage(arr) {
  var sum = 0;

  for (var _i = 0; _i < arr.length; _i++) {
    sum += arr[_i];
  }

  return sum / arr.length;
};

console.log(calcAverage(totalsArray));
console.log(tipsArray);
console.log(totalsArray);
arrays = [10, 10, 10];
console.log(calcAverage(arrays));