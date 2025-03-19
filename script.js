'use strict mode';

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.splice(0,1));//the cutten
// console.log(arr);
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// const letters = arr.concat(arr2)
// console.log(letters.join(` ! `));

///// forEach
// arr.forEach((letter,i,array) => {
//     console.log(`${letter} is index of ${i} from [ ${array} ]`)
// if (letter==c){
//     break
// }
// }
// );

/////////////////////////argument with this
// const obj = {
//   message: 'Hello',
// };

// const arr = ['a', 'b', 'c'];

// arr.forEach(function (element, index, array) {
//   console.log(` ${element} ${this.message} index ${index} of ${array}`);
// }, obj); // بتحددله سياق ال this

// Output:
// Hello
// Hello
// Hello

//////////////// arrow vs orignal
// let named = 'global';
// const myobj ={
//     named:'from orignal',
//     metho:function (){

//         console.log(`i\'m from${this.named}`)
//     }};

//     myobj.metho()

// }
const obj = {
  named: 'from arrow',
  metho: () => `I'm from ${this.named}`,
};

console.log(obj.metho()); // Output: "I'm from undefined"
console.log(
  obj.metho() === "I'm from undefined"
    ? "don't have scope for this"
    : 'this will be shown instead'
);

////for map
// const concurrencies = new Map([
//   ['egy', 'bound'],
//   ['us', '$'],
//   ['german', 'euro'],
//   ['ksa', 'sar'],
// ]);
// concurrencies.forEach((value, i) => {
//   console.log(`${i} : ${value}`);
// });

// Sets
// const newset = new Set(concurrencies.entries());
// console.log(newset);
// newset.forEach((value,i,theset) => console.log(` ${[value.split( ',')]} `)

// )

// Create a Map with some key-value pairs
const concurrencies = new Map([
  ['egy', 'bound'],
  ['us', '$'],
  ['german', 'euro'],
  ['ksa', 'sar'],
]);

// Convert Map entries to Set
// `entries()` returns an iterator of [key, value] pairs from the Map
const newset = new Set(concurrencies.entries());

// Log the Set to see its contents
console.log('Set created from Map entries:');
console.log(newset);

// Iterate over the Set
// `value` in this case will be an array [key, value]
console.log('Iterating over the Set:');
newset.forEach(value => {
  // `value` is an array [key, value]
  // Log the array directly
  console.log(` ${value} `); // Prints the array
});

// Alternatively, log the key and value separately
console.log('Key and value separately:');
newset.forEach(([key, value]) => {
  console.log(`Key: ${key}, Value: ${value}`);
});
////////  coding chalenge 1    ////////////

const checkdogs = function (Juliadogs, Katedogs) {
  Juliadogs.splice(0, 1);
  Juliadogs.splice(-1, 1);
  console.log(Juliadogs);
  const both = Juliadogs.concat(Katedogs); // not in nested arraw remember!!
  console.log(both);
  both.forEach((value, i) => {
    const message =
      value > 5
        ? `Dog number ${i + 1} is an adult, and is ${value} years old`
        : `Dog number ${i + 1} is still a puppy`;
    console.log(message);
  });
};

checkdogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
////////////// chalenge 2
///
// function calcAverageHumanAge(DogAges){
//    const humanAges =[];
//   for( let  age of DogAges){
//     if (age <= 2){
//       humanAges.push(2*age);

//     }
//     else if ( age>2){
//     humanAges.push(16 + age*4);

//     }

//   }

//   return humanAges
// }
// const DogAges =[5, 2, 4, 1, 15, 8, 3];
//  const humanAges =calcAverageHumanAge(DogAges);
// console.log(humanAges);
//   const excludedUnderAge =humanAges.filter(age => !age<18);
//   console.log(excludedUnderAge);

function calcAverageHumanAge(DogAges) {
  const humanAges = DogAges.map(age => (age > 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age > 18);
  const average = adults.reduce(
    (acc, age, i, array) => acc + age / array.length,
    0
  );
  return average;
} // chalenge three
// function calcAverageHumanAge(DogAges) {
//   const average = DogAges.map(age => (age > 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age > 18)
//     .reduce((acc, age, i, array) => acc + age / array.length, 0);
//   return average;
// }
const test1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const test2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(test1, test2);

//
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2024-01-28T09:15:04.904Z', // January 28, 2024
    '2024-04-01T10:17:24.185Z', // April 1, 2024
    '2024-05-08T14:11:59.604Z', // May 8, 2024
    '2024-07-26T17:01:17.194Z', // July 26, 2024
    '2024-07-28T23:36:17.929Z', // July 28, 2024
    '2024-09-08T10:51:36.790Z', // August 1, 2024
    '2024-09-12T21:31:17.178Z', // September 9, 2024 (5 days ago)
    '2024-09-14T07:42:02.383Z', // September 13, 2024 (yesterday)
  ],

  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2024-08-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2 /*account3, account4*/];
/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//////////////////////////////////////////////
////////////////// functions
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const formatMovementsDates = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date1 - date2) / (24 * 60 * 60 * 1000)));
  const daysPassed = calcDaysPassed(new Date(), date); // فرق الوقت بين دلوقتي واخر اكشن

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const month=`${date.getMonth()+1}`.padStart(2,0);
    // const day= `${date.getDate()+1}`.padStart(2,0);
    // const year =date.getFullYear();
    // return ` ${day}/${month}/${year} `;

    return new Intl.DateTimeFormat(locale).format(date);
  }
};
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  // Clear the container before inserting new HTML
  containerMovements.innerHTML = '';

  // Sort movements if `sort` is true, otherwise use the original array
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  console.log(acc);

  movs.forEach(function (mov, i) {
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementsDates(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date"> ${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

let sorted = false; // Default when reload
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sorted = !sorted; // Toggle the sort state
  displayMovements(currentAccount, sorted); // Pass the updated sort state
});

//reduce
// حساب وعرض الرصيد الإجمالي
const calcDisplayMovements = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  console.log(acc.balance);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

// calcDisplayMovements(account1.movements);

// حساب القيمة القصوى باستخدام reduce
const max = account1.movements.reduce((acc, curr) => {
  return acc > curr ? acc : curr; // إذا كان acc أكبر من curr، احتفظ به؛ وإلا، استخدم curr
});

console.log(max); // عرض القيمة القصوى

/*
1-  define arrays & select elements
2- function takes moments and put it in html dinamically
3- create function taht have reuce methode to summ all values of movments then call it with specified account
*/

const eurToUsd = 1.1;
const movementsusd = movements.map(mov => mov * eurToUsd); // to return in a new array
console.log(movementsusd);

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(thename => thename[0])
      .join('');
  });
};

createUserNames(accounts);
console.log(accounts);
//take array =>for each array => perform actions => call function
const deposite = movements.filter(mov => mov > 0);
const withdrawal = movements.filter(mov => mov < 0).map(mov => Math.abs(mov));
console.log(deposite);
console.log(withdrawal);
//// reduce return one only value
let nums = [10, 20, 15, 30];

let add = nums.reduce(function (acc, current, index, arr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`#############`);
  return acc + current;
}, 5); // here the initial value

console.log(add);

//
let theBiggest = [
  'Bla',
  'Propaganda',
  'Other',
  'AAA',
  'Battery',
  'Test',
  'Propaganda_Two',
];
let biggest = theBiggest.reduce(function (acc, curr, i, array) {
  if (acc.length > curr.length) {
    return acc;
  } //ببساطه احتفظ بالقيمة الكبيره
  else {
    return curr;
  }
});

console.log(biggest);
/// implimintation of split method with reduce
let removeChars = ['E', '@', '@', 'L', 'Z', '@', '@', 'E', 'R', '@', 'O'];

let elzero = removeChars.reduce(function (acc, curr) {
  if (curr !== '@') {
    return acc + curr;
  } else {
    return acc;
  } // حرك الاندكس بتاع الأك  اللي هو اندكس الكرنت القديم
}, '');
console.log(elzero);
// another wway
let another = removeChars
  .filter(word => !word.startsWith('@'))
  .reduce(function (acc, curr) {
    // مناسبه اوي هنا استدامها
    return `${acc}${curr}`;
  });
console.log(another);
/// filter with reduce

/// chaining
const calcDisplaySummary = function (acc) {
  const income = movements
    .filter(mov => mov > 0)
    .reduce(
      (acc, curr) => acc + curr,
      0 //  ديما بنسي الزيرو ده
    );
  labelSumIn.textContent = formatCur(income, acc.locale, acc.currency);

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  console.log(out);

  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((mov, i) => {
      return mov >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);

  console.log(acc);
};
// calcDisplaySummary(account1.movements);
// find uses return first match element
//  const fetchAccount = prompt( `search  for account `);
// const fetching = function (){ accounts.find( acc => acc.owner === `${fetchAccount}`) ? alert(` ${fetchAccount} is exist  `): alert(`try another account `)};
// fetching();
let currentAccount, timer;

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  // weekday: 'long',
};

const now = new Date();
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const day = `${now.getDate() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();

// labelDate.textContent =  new Intl.DateTimeFormat(currentAccount.locale).format(now)//` ${day}/${month}/${year} ${hour}:${min}`

const updateUI = function (acc) {
  // diplay movments
  displayMovements(acc);
  // diplay balance
  calcDisplayMovements(acc);

  // display summary
  calcDisplaySummary(acc);
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    /*currentAccount &&    ( ? optional chaining) if exsist read after ?*/
    // welcome to user
    labelWelcome.textContent = ` welcome ${currentAccount.owner.split(' ')[0]}`; // separate then take first
    containerApp.style.opacity = 1;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    updateUI(currentAccount);
    // clear inputs
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
  } else {
    console.log('try again');
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value); // becase it  converted to  string
  const receiverAcc = accounts.find(
    acc => acc.username == inputTransferTo.value
  );
  // check if acc is exsist
  if (
    amount > 0 &&
    receiverAcc && // must scc exsist
    currentAccount.balance >= amount && // remeber currrent acount is global
    receiverAcc?.username !== currentAccount.username // dnt transfer to yourself
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount); // minus balance
    receiverAcc.movements.push(amount); // add to reciver
    // add date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount); // global function
    inputTransferAmount.value = '';
    inputTransferTo.value = '';
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    console.log(currentAccount);

    console.log(currentAccount.movementsDates);
  }
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(accounts);

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const theindex = accounts.findIndex(acc => acc === currentAccount);
    accounts.splice(theindex, 1);
    inputCloseUsername.value = inputClosePin.value = '';
    containerApp.style.opacity = 0;

    labelWelcome.textContent = 'Log in to get started';
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = parseFloat(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString()); // add  date
      updateUI(currentAccount);
      inputLoanAmount.value = '';
      if (timer) clearInterval(timer);
      timer = startLogOutTimer();
    }, 1500);
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
  }
});

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // more than  1 deep set the deep as argument

const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((mov, acc) => mov + acc, 0);
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((mov, acc) => mov + acc, 0);
console.log(overalBalance);
console.log(overalBalance2);

/////
/////////////////////sorting
const numms = [2, 6, 7, 9, 1, , 2, 3];
function compareNumbers(a, b) {
  return a - b;
}
console.log(numms.sort(compareNumbers));

// // Sorting Arrays

// // Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// console.log(movements);

// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)

// // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

// // Descending
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

/////////////////// creating arrays
const x = Array(5);
console.log(x.fill(0));

const a = Array.from({ length: 6 }, () => 1);
const b = Array.from({ length: 6 }, (_, i) => i + 1); // start from 1 index instead of 0
console.log(a);
console.log(b);

///////////////////         numbers,Dates                  /////////////////////////////////////////////////////////////////

// labelBalance.addEventListener('click',function(){
// [...document.querySelectorAll('.movements__row')].forEach(function(row,i){ // remember querySelectorAll
//   if (i%2===0){
//     row.style.backgroundColor="blue"
//   }
// })

// })
// LECTURES

/*
///////////////////////////////////////
// Converting and Checking Numbers
console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

// console.log(parseFloat('  2.5rem  '));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));


///////////////////////////////////////
// Math and Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));


///////////////////////////////////////
// The Remainder Operator
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});


///////////////////////////////////////
// Working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));

// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);

*/

////// Date

// let spoonCount = 0; // عدد الملاعق التي أخذتها
// let totalSpoons = 10; // عدد الملاعق الكلي للأكل

// const eat = () => {
//   if (spoonCount < totalSpoons) {
//     console.log('eating...');

//     spoonCount++;
//     console.log(`الكله رووعه😋`);
//     setTimeout(eat, 2000); // استمر في الأكل بعد 2 ثانية
//   } else {
//     console.log(' 😍مدوقتش اطعم من كدا قبل كدا ');
//   }
// };

// // بدء الأكل
// eat();
// setInterval(function() {
//   const now = new Date();
//   const hours = now.getHours();    // الحصول على الساعة
//   const minutes = now.getMinutes(); // الحصول على الدقائق
//   const seconds = now.getSeconds(); // الحصول على الثواني

//   // تنسيق الوقت بإضافة صفر للأرقام الأحادية
//   const formattedHours = String(hours).padStart(2, '0');
//   const formattedMinutes = String(minutes).padStart(2, '0');
//   const formattedSeconds = String(seconds).padStart(2, '0');

//   console.log(`الوقت الآن: ${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
// }, 1000);

// timer
const startLogOutTimer = function () {
  let time = 300;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    time--;

    if (time < 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'login to get started';
      containerApp.style.opacity = 0;
    }
  };
  const timer = setInterval(tick, 1000);
  return timer;
  //return timer; يعطيك طريقة للتحكم في المؤقت من خارج الدالة.باستخدامه، يمكنك إيقاف المؤقت أو إعادة ضبطه حسب الحاج
};
// startLogOutTimer();
