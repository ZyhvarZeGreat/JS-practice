"use-strict";
//Data
const account1 = {
  owner: "Bolude Daniel",
  transactions: [
    200, 300, -400, 3000, -742, 90, 12, 87, 210, -675, 31, -98, -90, -2100,
  ],
  interestRate: 1.2,
  pin: 1111,
};
const account2 = {
  owner: "Laanu Afolabi",
  transactions: [
    -200, 100, -400, 1000, -742, 20, 31, 37, -410, 175, 43, -58, -90, -3100,
  ],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: "Alabi Williams",
  transactions: [
    10000, -300, -400, -3000, -742, 20, 12, 870, 1210, 275, -310, -2098, -90,
    -2100,
  ],
  interestRate: 0.2,
  pin: 3333,
};

const account4 = {
  owner: "Youri Berchiche",
  transactions: [
    10000, -300, -400, -3000, -742, 20, 12, 870, 1210, 275, -310, -2098, -90,
    -220,
  ],
  interestRate: 0.7,
  pin: 4444,
};

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

const accounts = [account1, account2, account3];

let currentAccount;

let currentPassword;

function balanceSum(arr) {
  arr.balance = arr.transactions.reduce((acc, cur) => acc + cur, 0);
  labelbalance.textContent = `$${arr.balance}`;
}

function balanceFlow(arr) {
  const income = arr.transactions
    .filter((trx) => trx > 0)
    .reduce((acc, trx) => acc + trx, 0);
  labelbalanceIn.textContent = `$${income}`;

  const expenditure = arr.transactions
    .filter((trx) => trx < 0)
    .reduce((acc, trx) => acc + trx, 0);
  labelbalanceOut.textContent = `$${Math.abs(expenditure)}`;

  const interest = arr.transactions
    .filter((trx) => trx > 0)
    .reduce((acc, trx) => acc + trx * arr.interestRate, 0);
  labelbalanceInterest.textContent = `$${Math.ceil(interest)}`;
}

// const withdrawals = account1.transactions.filter((trx) => trx < 0);
// const deposits = account1.transactions.filter((trx) => trx > 0);

function displayTransactions(acc) {
  transactionContainer.innerHTML = ``;
  console.log(acc.transactions);
  acc.transactions.forEach(function (trx, i) {
    const type = trx < 0 ? "withdrawal" : "deposit";
    const symbol = trx < 0 ? "-" : "";

    const transactionitem = `
        <div class="Bankist_Transaction_Items">
        <div class ='Bankist_Transaction_Items_Details'>
         <div class="Bankist_Transaction_Item_Notification ${type}">
           <p class="Bankist_Transaction_Item_Notification_Text"> ${
             i + 1
           } ${type} </p>
        </div>
        <div class="Bankist_Transaction_Item_Date">
         <p> 12/08/2023 </p>  
        </div>
        </div>

        <div class="Bankist_Transaction_Items_Amount">
         <p class="Bankist_Transaction_Items_Amount_Text"> ${symbol}$${Math.abs(
      trx
    )} </p>
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
  displayTransactions(currentAccount);
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
  if (currentAccount?.pin === Number(inputPin.value)) {
    labeluserName.textContent = `Welcome Back ${
      currentAccount.owner.split(" ")[0]
    }`;
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

  const amount = Number(inputTransferAmount.value);

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
    console.log("transfer valid");

    //Perfoming the transfer
    currentAccount.transactions.push(-amount);
    recieverAccount.transactions.push(amount);

    //Update the ui after the transfer

    updateUI();
  }

  console.log(amount, recieverAccount);
});

btnCancel.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("popped");

  if (
    inputCancelUsername.value === currentAccount.username &&
    Number(inputCancelPin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => (acc.username = currentAccount.username)
    );
    console.log(index);
    accounts.splice(index, 1);
  }
});

console.log(inputTransferAmount.value);

// const arr = [2, 3, 4, 5];

// const juliaDogAgeArray1 = [3, 5, 2, 12, 7];
// const KateDogAgeArray1 = [4, 1, 15, 8, 3];

// const juliaDogAgeArray2 = [9, 16, 6, 8, 3];
// const KateDogAgeArray2 = [10, 5, 6, 1, 4];

// function checkDogsAge(arr1, arr2) {
//   const originalArr = arr1;
//   const correctedArray = originalArr.splice(1, -1).splice("", -1);

//   combinedArr = correctedArray.concat(arr2);

//   combinedArr.forEach(function (dog, i) {
//     const resString =
//       dog >= 3
//         ? console.log(`Dog ${i + 1} is an adult and ${dog} years old`)
//         : console.log(`Dog ${i + 1} is a puppy and ${dog} years old`);
//     console.log(resString);
//   });

//   console.log(correctedArray);
//   console.log(originalArr);
// }

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

const account = accounts.find((acc) => acc.owner === "Bolude Daniel");

userNameAbbreviate(accounts);
console.log(accounts);
console.log(account);
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
