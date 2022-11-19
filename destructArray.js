// 'use strict';

// const add = function (...numbers){
//     let sum = 0;
//     for(let i = 0; i<numbers.length; i++){
//         sum+=numbers[i]
//     }

// console.log(sum)
// }

// add(2,3,4,5)

const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Sule",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Muller",
      "Gnabry",
      "Lewandowski",
    ],

    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Hazard",
      "Dahoud",
      "Bellingham",
      "Brandt",
      "Reus",
    ],
  ],

  score: "4:0",
  scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
  date: "Nov 9th,2024",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// game.odds = odds

// console.log(game.odds)

// const averageOdds = function (...odds) {
//   odds/odds.length;
// }

// console.log(game.odds)
// //Player Arrays

// const [players1,players2] = game.players

// let [GK,...fieldPlayers] = players1

// const allPlayers = [...players1,...players2]
// console.log(GK,fieldPlayers)

// console.log(allPlayers)
// let players1Final = ['Thiago,Coutinho,Perisic',...players1]
// let playerScored = game.scored

// const{odds:{team1,x:draw,team2}} = game

// // let fieldPlayers = [...players1arr]
// let goals = 0

// const printGoals = function(...players){

// console.log( ...players)

// console.log(`${players.length} goals were scored`)

// }
// printGoals(...playerScored)
// // console.log(`${game.team1 || game.team2} is more likely to  win with  ${team1Odds  || draw || teams2Odds} odds` )
// //  printGoals(...playerScored)

// // // console.log(GK)
// // // console.log(fieldPlayers)
// // // console.log(allPlayers);

// //Challenge 1////
// const goalProperties = Object.entries(game.scored)
// // let goalStr = `Goal `

// for( [goalCount,goals] of goalProperties) {
// let goalStr = `Goal ${Number(goalCount) + 1}: ${goals}`
// console.log(goalStr)
// }

// const oddsEntries = Object.entries(game.odds)
// for ([oddsProperties, odds] of oddsEntries) {
// console.log(odds,oddsProperties)
//   // oddsStr = `odds of ${'Victory' ?? 'Draw'} ${game.team1  game.team2}: ${oddsProperties} `
// // console.log(oddsStr)

// }
// console.log(oddsEntries)

// const airline = 'Edo Airways'
// const plane = 'PBUY101'

// console.log(airline.slice(0, airline.indexOf(' ')))

// function checkMiddleSeat(seat) {
// //  seat.lastIndexOf(`${'B' || 'E'}`) === seat.lastIndexOf('B') || seat.lastIndexOf('E') ? console.log('You got a Middle Seat') : console.log('You no get Middle Seat Boss')
// const s = seat.slice(-1)

// s ==='B' || s ==='E' ? console.log('You got a Middle Seat') : console.log('You no get Middle Seat Boss')

// // if(s === 'B' || s ==='E'){
// //   console.log('You got a Middle Seat')
// // }
// // else {
// //   console.log('You didn\'t get a Middle Seat')
// // }
// }

// checkMiddleSeat('11B')
// checkMiddleSeat('11E')
// checkMiddleSeat('11G');
// checkMiddleSeat('11E');

// const passenger = 'dAnieL'
// const passengerFix = passenger.toLowerCase()

// const passengerCorrect = passengerFix[0].toUpperCase()

// const passengerFinal = passengerCorrect + passengerFix.slice(1)
// console.log(passengerFinal)
// const email = 'hello@aesir.io'
// const loginEmail = ' Hello@Aesir.Io'
// const lowerEmail = loginEmail.toLowerCase().trim()
// // console.log(email === normalizedEmail)

//  const priceGB = '288,97💷'
//  const priceUS =  priceGB.replace('💷','💵').replace(',' , '.')
//  console.log(priceUS)
//  const announcement =  'All passengers are to come borading door 23. I repeat boarding door 23'

//  console.log(announcement.replace(/door/g,'gate'))

//  const plane1 = 'A320neo'
//  console.log(plane1.includes('A320'))

// function checkBaggage(items) {
// const baggage = items.toLowerCase()
// baggage.includes('pocket knife') || baggage.includes('gun') ? console.log('Sorry,you can\'t take that into the flight ') : console.log('You\'re free to enter')
// }

// checkBaggage('I have a Pocket knife and a Gun')
// checkBaggage('Socks and clothes')
// checkBaggage('Snacks and a gun')

// function capitalizeName (name){
// let nameSplit = name.split(' ')
// namesUpper = []

// for(const n of nameSplit){
//   namesUpper.push(n[0].toUpperCase() + n.slice(1));
// }
// console.log(namesUpper.join(' '))

// }

// capitalizeName('bolude daniel olasubomi')
// const passenger1 = 'bolude daniel olasubomi'

// const message = 'Go to gate 23!'

// console.log(message.padStart(25, '+').padEnd(30, '+'))

// function stringMask(num){
//   const str = num + '';
//   const last = str.slice(-4)
//   return last.padStart(str.length,'*')
// }

// console.log(stringMask(4198456734213671))

// console.log(stringMask(43671))

// const message1 = 'Bad weather run for your life'  + ' '
// console.log(message1.repeat(5, ' '))

// const inputEl = document.querySelector('.string-Input').value
// console.log(inputEl)

// const buttonEl = document.querySelector('string-checker')

// buttonEl.addEventListener('click', function(){

// })

// const underScoreCase = 'underscore_CAse'
// // Split the string into two parts
// let[firstWord,secondWord] = underScoreCase.toLowerCase().split('_')

// let wordUpper = []

// for (const n of secondWord){
//   wordUpper.push(n[0].toUpperCase()  + n.slice(n.length).toLowerCase())

// }

// console.log( wordUpper.join(''))

// // const camelCase = underScoreCase.slice(underScoreCase.lastIndexOf('_')).replace('_','s')

// console.log(firstWord,secondWord)
// // // console.log (secondWord.slice(secondWord.lastIndexOf('c')).replace('c','C'))
// const bookings = [];

// function createBooking(flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking("LH123");
// createBooking("RED257", 2, 800);

// const flight = "LH234";
// const daniel = {
//   name: "Daniel",
//   passport: "213312123343",
// };

// function checkIn(flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr." + passenger.name;

//   if (passenger.passport === "213312123343") {
//     alert("Checked in");
//   } else {
//     alert("Wrong Passport");
//   }
// }

// const greet = (greeting) => {
//   return names = (name) => {
// console.log(`${greeting} ${name}`)
//   }
// }

// greet('Konichiwa')('Comrade')

// const lufthansa={
//   airline:'lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum,name){
//     console.log(`${name} booked a seat on ${this.airline}
//     flight ${this.iataCode}${flightNum}`)
//     this.bookings.push({flight:`${this.iataCode}${flightNum}`}, name)
//   }

// }

// lufthansa.book(239, 'Bolude Daniel')

// const euroWings  = {
//   airline:'Eurowings',
//   iataCode:'EW',
//   bookings:[],
// }
// const book = lufthansa.book

// book.call(euroWings, 23, 'Jay Sarta')

// const bookEW = book.bind(euroWings);

// bookEW(23,'Steven Williams')

// function bindFunction(fn,name,fnArgs) {
//      name = fn.bind(fnArgs)

// }

// console.log(bindFunction(bookEW,book,euroWings))

// const poll =  {
//   question:'What is your favourite programming language?',
//   options:['0:Javascript','1:Python','2:Rust','3:C++'],

// registerNewAnswer(){
// const answer = Number( prompt(`${poll.question}\n ${poll.options.join('\n')}\n(Write option number)`))
// console.log(answer)
// return answer
// },
//   answers: new Array(4).fill(0)

// }

// const buttonEl = document.querySelector('.btn-poll')
// console.log(buttonEl)
// buttonEl.addEventListener('click', poll.registerNewAnswer)

// for (const x in poll.options){
//   console.log(poll.options[x])

// }

// (function () {
//   const header = document.querySelector(".color");
//   header.style.color = "red";

//   const body = document.querySelector("body");

//   body.addEventListener("click", function change() {
//     header.style.color = "blue";
//   });
// })();

// const arr = [2,3,4]
// const [x,y,z] = arr
// console.log(x)

// for (let i = 1; i<101; i++){

//   console.log(i)

// }

// console.log( '------------ COUNT TO 100 ----------')

// for(let j = 0; j <= 10; j++){

//   console.log(j)
// }
// console.log( '------------ COUNT TO 10 ----------')

// for (let m  = 0;  m<=100; m+=2 ){
//   console.log(m)
// }
// console.log( '------------ ADD THE NEXT NUMBER ----------')

// for(let n = 1 ; n<1025; n+=n){
// console.log(n)
// }
// console.log( '------------ SQUARE TILL 1024 ----------')
// // for ( let i = 0; i <=10; i++){
//   console.log(i)
// }

// for ( let i = 0; i < 10; i--){
//   console.log(i)
// }

const numericFunctions = {
  factorial: function factorial(n) {
    let result = 
    
    1;
    for (let i = 2; i <= n; i++) {

      result *= i;
      console.log(`Iteration ${i} ${result}`)
    }
    // console.log(result);
  },

  pow: function pow(m, n) {
    let result = 1
    for (let i = 0; i <= n; i++) {
      result = (m *=n) 
      console.log(result);
    }
  },

  Euclids: function Euclids(m, n) {
    while (n > 0) {
      let mod = m % n;

      if (mod === 0) {
        console.log(`${n} is the GCD of  ${m} and ${n}`);
      } else if (mod != 0) {
        m = n;
        n = mod;
      }
    }
  },
};


numericFunctions.factorial(20)
numericFunctions.pow(1,9)

// const print = numericFunctions.print(3)
// console.log(print)

// let arr = ["a", "b", "c", "d", "e"];

// let arr2 = ["j", "i", "h", "g", "f"];

// arr2.reverse();

// const letters = arr.concat(arr2);
// console.log(letters);

// console.log();

// const movements = [
//   200, 450, -300, 1000, -212, 342, -812, 782, 2123, 3212, -5487,
// ];

// for (const movement of movements) {
//   movement > 0
//     ? console.log(`${Math.abs(movement)} was deposited into your account`)
//     : console.log(`${Math.abs(movement)} was withdrawn from your account`);
// }
// console.log('---------------------------------------FOR EACH---------------------------')

// movements.forEach(function(movement){
//   movement > 0
//     ? console.log(`${Math.abs(movement)} was deposited into your account`)
//     : console.log(`${Math.abs(movement)} was withdrawn from your account`);
// })



// const currencies = new Map([
//   ['NGN', 'Nigerian Naira'],
//   ['USD', 'United States Dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound Sterling']
// ])


// currencies.forEach(function(value,key,map){
// console.log(`${key}:${value}`)
// })

// const currenciesUnique = new Set(['USD','USD','EUR','GBP'])