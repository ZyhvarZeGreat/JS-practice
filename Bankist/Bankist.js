"use-strict";
//Data
const account1 = {
  owner: "Bolude Daniel",
  transactions: [
    200, 300, -400, 3000, -742, 90, 12, 87, 210, -675, 31, -98, -90, -2100,
  ],
  interestRate: 1.2,
  pin: 1111,
  transactionDates: [
    "2022-11-24T21:34:55.784Z",
    "2022-11-23T21:34:55.784Z",
    "2022-11-07T21:34:55.784Z",
    "2022-11-06T21:34:55.784Z",
    "2022-11-06T21:34:55.784Z",
    "2022-11-05T21:34:55.784Z",
    "2022-08-05T21:34:55.784Z",
    "2022-11-04T21:34:55.784Z",
    "2022-11-04T21:34:55.784Z",
    "2022-11-04T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
  ],
  currency: "NGN",
  locale: "ng-NG",
};
const account2 = {
  owner: "Laanu Afolabi",
  transactions: [
    -200, 100, -400, 1000, -742, 20, 31, 37, -410, 175, 43, -58, -90, -3100,
  ],
  interestRate: 1.5,
  pin: 2222,
  transactionDates: [
    "2022-11-07T21:34:55.784Z",
    "2022-11-06T21:34:55.784Z",
    "2022-11-06T21:34:55.784Z",
    "2022-11-05T21:34:55.784Z",
    "2022-08-05T21:34:55.784Z",
    "2022-11-04T21:34:55.784Z",
    "2022-11-04T21:34:55.784Z",
    "2022-11-04T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-02T21:34:55.784Z",
    "2022-11-01T21:34:55.784Z",
  ],
  currency: "USD",
  locale: "us-US",
};
const account3 = {
  owner: "Alabi Williams",
  transactions: [
    10000, -300, -400, -3000, -742, 20, 12, 870, 1210, 275, -310, -2098, -90,
    -2100,
  ],
  interestRate: 0.2,
  pin: 3333,
  transactionDates: [
    "2022-11-07T21:34:55.784Z",
    "2022-11-06T21:34:55.784Z",
    "2022-11-06T21:34:55.784Z",
    "2022-11-05T21:34:55.784Z",
    "2022-08-05T21:34:55.784Z",
    "2022-11-04T21:34:55.784Z",
    "2022-11-04T21:34:55.784Z",
    "2022-11-04T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-02T21:34:55.784Z",
    "2022-11-01T21:34:55.784Z",
  ],
  currency: "NGN",
  locale: "ng-NG",
};

const account4 = {
  owner: "Youri Berchiche",
  transactions: [
    10000, -300, -400, -3000, -742, 20, 12, 870, 1210, 275, -310, -2098, -90,
    -220,
  ],
  interestRate: 0.7,
  pin: 4444,
  transactionDates: [
    "2022-11-07T21:34:55.784Z",
    "2022-11-06T21:34:55.784Z",
    "2022-11-06T21:34:55.784Z",
    "2022-11-05T21:34:55.784Z",
    "2022-11-05T21:34:55.784Z",
    "2022-11-04T21:34:55.784Z",
    "2022-11-04T21:34:55.784Z",
    "2022-11-04T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-03T21:34:55.784Z",
    "2022-11-02T21:34:55.784Z",
    "2022-11-01T21:34:55.784Z",
  ],
  currency: "EUR",
  locale: "fr-FR",
};
const now = new Date();

console.log(now.toISOString());
//------------------ PARENT ELEMENTS -------------------- //
const containerApp = document.querySelector(".app");
const transactionContainer = document.querySelector(
  ".Bankist_Transaction_Container"
);

//------------------ LABELS -------------------- //
const labeluserName = document.querySelector(".Bankist_Nav_Welcome");
const labelbalance = document.querySelector(".balance");
const labelbalanceIn = document.querySelector(".balance-in");
const labelbalanceOut = document.querySelector(".balance-out");
const labelbalanceInterest = document.querySelector(".interest");
const labelDate = document.querySelector(".date");
const labelItemDate = document.querySelector(
  ".Bankist_Transaction_Item_Date_Text"
);
const labelTimer = document.querySelector(".Bankist_Login_Timer_Item");
//------------------ BUTTONS -------------------- //
const btnLogin = document.querySelector(".Bankist_Submit_Button");
const btnTransfer = document.querySelector("#transfer--button");
const btnLoan = document.querySelector("#loan--button");
const btnCancel = document.querySelector("#cancel--button");
const btnSort = document.querySelector(".sort--button");

//------------------ INPUTS -------------------- //

const inputUsername = document.querySelector(".login_input--user");
const inputPin = document.querySelector(".login_input--pin");
const inputTransferTo = document.querySelector("#transfer--to");
const inputTransferAmount = document.querySelector("#transfer--amount");
const inputLoan = document.querySelector("#loan--amount");
const inputCancelUsername = document.querySelector("#cancel--username");
const inputCancelPin = document.querySelector("#cancel--pin");

//------------------ EVENT HANDLERS -------------------- //

const accounts = [account1, account2, account3, account4];

let currentAccount;
let timer
let currentPassword;

function formatCur(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
}
function balanceSum(arr) {
  arr.balance = arr.transactions.reduce((acc, cur) => acc + cur, 0);

  labelbalance.textContent = `${formatCur(
    arr.balance,
    arr.locale,
    arr.currency
  )}`;
}

function balanceFlow(arr) {
  const income = arr.transactions
    .filter((trx) => trx > 0)
    .reduce((acc, trx) => acc + trx, 0);
  labelbalanceIn.textContent = `${formatCur(income, arr.locale, arr.currency)}`;

  const expenditure = arr.transactions
    .filter((trx) => trx < 0)
    .reduce((acc, trx) => acc + trx, 0);
  labelbalanceOut.textContent = `${formatCur(
    Math.abs(expenditure),
    arr.locale,
    arr.currency
  )}`;

  const interest = arr.transactions
    .filter((trx) => trx > 0)
    .reduce((acc, trx) => acc + trx * arr.interestRate, 0);
  labelbalanceInterest.textContent = `${formatCur(
    Math.ceil(interest),
    arr.locale,
    arr.currency
  )}`;
}

function dateFormatter(date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);

  const daysPassed = Math.round(calcDaysPassed(new Date(), date));
  console.log(daysPassed);
  if (daysPassed >= 30) return `${Math.round(daysPassed / 30)} Months ago`;
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed !== 0) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = `${date.getFullYear()}`;
  return new Intl.DateTimeFormat(locale).format(date);

  // `${day}/${month}/${year}`;
}


function startLogOutTimer() {

  function tick () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    // ON EACH CALL ,PRINT THE REMAINING TIME TO THE UI
    labelTimer.textContent = `You will be logged out in ${min}:${sec}`;

   // WHEN 0 SECONDS , STOP THE TIMER AND LOGOUT THE USER

   if (time === 0) {

    containerApp.style.opacity = 0;
    clearInterval(timer);
  labeluserName.textContent = 'Login to Get Started';
  }


    // DECREASE 1S
    time--;

 
  }

  // SET TIME TO 5 MINUTES
  let time = 600;

  // CALL THE TIMER EVERY SECOND


  tick()
  const timer = setInterval(tick , 1000);

  return timer;   
}

// const withdrawals = account1.transactions.filter((trx) => trx < 0);
// const deposits = account1.transactions.filter((trx) => trx > 0);

function displayTransactions(acc, sort = false) {
  const transactions = sort
    ? acc.transactions.slice().sort((a, b) => a - b)
    : acc.transactions.slice().sort((a, b) => b - a);
  transactionContainer.innerHTML = ``;

  transactions.forEach(function (trx, i) {
    const type = trx < 0 ? "withdrawal" : "deposit";
    const date = new Date(acc.transactionDates[i]);
    const displayDate = dateFormatter(date, acc.locale);

    const formattedTransactions = formatCur(trx, acc.locale, acc.currency);
    const transactionitem = `
        <div class="Bankist_Transaction_Items">
        <div class ='Bankist_Transaction_Items_Details'>
         <div class="Bankist_Transaction_Item_Notification ${type}">
           <p class="Bankist_Transaction_Item_Notification_Text"> ${
             i + 1
           } ${type} </p>
        </div>
        <div class="Bankist_Transaction_Item_Date">
         <p> ${displayDate} </p>  
        </div>
        </div>

        <div class="Bankist_Transaction_Items_Amount">
         <p class="Bankist_Transaction_Items_Amount_Text"> ${formattedTransactions} </p>
        </div>
       </div>
        `;

    transactionContainer.insertAdjacentHTML("afterbegin", transactionitem);
    // labelbalanceIn.textContent = `$${balanceFlow(deposits)}`;
    // labelbalanceInterest.textContent = `$${interestCalc(deposits)}`;
    // labelbalanceOut.textContent = `$${Math.abs(balanceFlow(withdrawals))}`;
    // labelbalance.textContent = `$${balanceSum(account1)}`;
  });
}

function userNameAbbreviate(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
}

function updateUI() {
  //Display Movements
  displayTransactions(currentAccount, false);
  //Display Balance Sum
  balanceSum(currentAccount);
  //Display Balance Flow
  balanceFlow(currentAccount);
}
btnLogin.addEventListener("click", function (e) {
  //Prevent form from submitting
  e.preventDefault();
  // Getting the username input
  currentAccount = accounts.find((acc) => acc.username === inputUsername.value);
  //Displaying the data for the current account logged in

  // Clear Input Fields

  console.log(currentAccount);
  if (currentAccount?.pin === +inputPin.value) {
    labeluserName.textContent = `Welcome Back ${
      currentAccount.owner.split(" ")[0]
    }`;
    // CREATING NEW DATE
    const date = new Date();
    // const day = `${date.getDate()}`.padStart(2, 0);

    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = `${date.getFullYear()}`;
    // const hour = `${date.getHours()}`.padStart(2, 0);
    // const minutes = `${date.getMinutes()}`.padStart(2, 0);

    const displayDate = dateFormatter(date, currentAccount.locale);
    if(timer){
      clearInterval(timer)
    }
  timer =  startLogOutTimer();
    // ${day}/${month}/${year} ${hour}:${minutes}`;
    labelDate.textContent = `As of ${new Intl.DateTimeFormat(
      currentAccount.locale
    ).format(date)}`;
    console.log("Logged in");
    containerApp.style.opacity = 100;
  }

  updateUI();

  inputUsername.blur();
  inputPin.blur();
  inputUsername.value = inputPin.value = "";
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;

  const recieverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.blur();
  inputTransferTo.blur();
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    recieverAccount &&
    currentAccount.balance >= amount &&
    recieverAccount?.username !== currentAccount.username
  ) {
    console.log("Transfer valid");

    //Perfoming the transfer
    currentAccount.transactions.push(-amount);
    recieverAccount.transactions.push(amount);

    // ADD TRANSFER DATE

    currentAccount.transactionDates.push(new Date().toISOString());
    recieverAccount.transactionDates.push(new Date().toISOString());
    //Update the ui after the transfer

    console.log(recieverAccount);
    clearInterval(timer)
    timer = startLogOutTimer()
    updateUI();
  }

  console.log(amount, recieverAccount);
});

btnCancel.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("popped");

  if (
    inputCancelUsername.value === currentAccount.username &&
    +inputCancelPin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);

    console.log(accounts);
  }
  inputCancelUsername.blur();
  inputCancelPin.blur();
  inputCancelUsername.value = inputCancelPin.value = "";
  clearInterval(timer)
  timer = startLogOutTimer()
  containerApp.style.opacity = 0;
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  // Get the Loan amount
  let loanAmount = +inputLoan.value;
  // Createda condition for taking the loan
  const loanCondition =
    loanAmount > 0 &&
    currentAccount.transactions.some((trx) => trx > loanAmount * 0.01);

  //Get the loan receiver account
  let loanReceiverAccount = accounts.find(
    (acc) => acc.username === currentAccount.username
  );

  //Give User the loan  else tell the user that he is not eligible for the loan
  loanCondition
    ? loanReceiverAccount.transactions.push(loanAmount) && updateUI()
    : console.log("you are not eligible for a loan yet"),
    currentAccount.transactionDates.push(new Date().toISOString());
  loanReceiverAccount.transactionDates.push(new Date().toISOString());

  // Remove focus from the input field and clear the input

  const now = new Date().toISOString();

  currentAccount.transactionDates.push(new Date().toISOString());
  loanReceiverAccount.transactionDates.push(new Date().toISOString());

  inputLoan.blur();
  inputLoan.value = "";
  console.log(loanReceiverAccount);
  clearInterval(timer)
  timer = startLogOutTimer()
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayTransactions(currentAccount, !sorted);
  sorted = !sorted;

  clearInterval(timer)
  timer = startLogOutTimer()
});

//YOU CAN CHAIN METHODS TO MAKE YOUR CODE CLEANER
const totalTransactions = accounts.map((acc) => acc.transactions);
const totalCombinedTransactions = totalTransactions.flat();

const totalTransactionsAmount = totalCombinedTransactions.reduce(
  (acc, cur) => acc + cur,
  0
);

// UTILIZING THE FLAT MAP METHOD

const overallBalance = accounts
  .flatMap((acc) => acc.transactions)
  .reduce((acc, trx) => acc + trx, 0);

//SORTING ARRAYS USING THE SORT METHOD

const sortedTransactions = accounts.map((acc) =>
  acc.transactions.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  })
);

console.log(sortedTransactions);

console.log(overallBalance);
console.log(totalTransactions);
console.log(totalCombinedTransactions);
console.log(totalTransactionsAmount);

const arr = [2, 3, 4, 5];

const juliaDogAgeArray1 = [3, 5, 2, 12, 7];
const KateDogAgeArray1 = [4, 1, 15, 8, 3];

const juliaDogAgeArray2 = [9, 16, 6, 8, 3];
const KateDogAgeArray2 = [10, 5, 6, 1, 4];

function checkDogsAge(arr1, arr2) {
  const originalArr = arr1;
  const correctedArray = originalArr.splice(1, -1).splice("", -1);

  combinedArr = correctedArray.concat(arr2);

  combinedArr.forEach(function (dog, i) {
    const resString =
      dog >= 3
        ? console.log(`Dog ${i + 1} is an adult and ${dog} years old`)
        : console.log(`Dog ${i + 1} is a puppy and ${dog} years old`);
    console.log(resString);
  });

  console.log(correctedArray);
  console.log(originalArr);
}

function calcAverageHumanAge(ages) {
  const humanAges = ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18);

  const humanAgesAverage = humanAges.reduce(
    (acc, age, i, arr) => (acc + age) / arr.length,
    0
  );
  return humanAgesAverage;
}

userNameAbbreviate(accounts);
console.log(accounts);
console.log(accounts);

// const avg1 = calcAverageHumanAge([5,2,4,1,15,8,3])
// const avg2 = calcAverageHumanAge([16,6,10,5,6,1,4])

// console.log(avg1, avg2)
// calcAverageHumanAge(arr);
// checkDogsAge(juliaDogAgeArray1, KateDogAgeArray1);

// const eurotoUsd = 1.1;

// const convertedTransactions = account1.transactions.map((trx) =>
//   Math.ceil(trx * eurotoUsd)
// );

// console.log((28 + 32 + 36 )/ 3)
