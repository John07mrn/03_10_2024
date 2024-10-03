console.log("hello");

let userAge = 17;
let legalAge = 18;
let isLegal = userAge >= legalAge;

// if
if (isLegal) {
    console.log("Utilizatorul este major.");
}

// if - else
if (isLegal) {
    console.log("Utilizatorul este major.");
} else {
    console.log("Utilizatorul este minor.");
}

// operatorul ternar
let userEnteredPassword = "pass123";
let corectPassword = "123pass";

let accessMessage = userEnteredPassword === corectPassword ? "Access granted" : "Access denied";
// let accessGranted = userEnteredPassword === corectPassword ? true : false;

// if (userEnteredPassword === corectPassword) {
//     accessGranted = true;
// } else {
//     accessGranted = false;
// }

// console.log("User has access: ", accessGranted);
console.log("User has access: ", accessMessage);

// if..else if..else

let actualScore = 123;
let minimumScore = 50;
let averageScore = 70;
let maxScore = 100;

if (actualScore === 100) {
    console.log("Congratulations, your score is perfect!"); 
} else if (actualScore < maxScore && actualScore > averageScore) {
    console.log("Congratulations, your score is great!");
} else if (actualScore <= averageScore && actualScore >= minimumScore) {
    console.log("Congratulations, you got a passing score!");
} else if (actualScore < minimumScore) {
    console.log("We are sorry, your score is too low!");
} else {
    console.log("Your score could not be verified!");
}

// switch

let weekDay = 4;

switch (weekDay) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
    console.log("The day could not be identified!");
        break;
}

// bucle - loops

// while
// calcularea sumei totale dintr-un cos de cumparatauri folosind "while"

const cartItems = [
    {
        name: "Iphone 16",
        price: 1700,
        curency: "$",
        amount: 1
    },
    {
        name: "Protector sleeve",
        price: 100,
        curency: "$",
        amount: 3
    },
    {
        name: "Apple sticker",
        price: 21.99,
        curency: "$",
        amount: 4
    },
]

let totalPrice = 0;
let productIndex = 0;
while (productIndex < cartItems.length) {
    let product = cartItems[productIndex];
    totalPrice += product.price * product.amount;
    // totalPrice = totalPrice + product.price * product.amount;
    productIndex++;
    // productIndex = productIndex + 1;
}

console.log("Your cart total is: ", totalPrice, cartItems[0].curency);

// do - while

let n = 6;
let currentNUmber = 0;
do {
    currentNUmber++;
    console.log(currentNUmber);
} while (currentNUmber < n);

// for
// calcularea sumei totale dintr-un cos de cumparatauri folosind "for"
let totalPrice2 = 0;
for (i = 0; i < cartItems.length; i++) {
    let product = cartItems[i];
    totalPrice2 += product.price * product.amount;
}

console.log("Your cart total computed with 'for' is: ", totalPrice2, cartItems[0].curency);

// for of
// calcularea sumei totale dintr-un cos de cumparatauri folosind "for of"
let totalPrice3 = 0;
for (let product of cartItems) {
    totalPrice3 += product.amount * product.price;
}

console.log("Your cart total computed with 'for of' is: ", totalPrice3, cartItems[0].curency);

// for in
let iphone = {
    name: "Iphone 16",
        price: 1700,
        curency: "$",
        amount: 1
};

for (let key in iphone) {
    console.log("key: ", key);
}

// break

const numbers = [123, 43, 12, 1232232, 9];

let numberToCheck = 12;
for (let j = 0; j < numbers.length; j++) {
    console.log("i: ", j);
    if (numberToCheck === numbers[j]) {
        console.log("Number ", numberToCheck, "is found at index", j);
        break;
    }
}

// continue

// calcularea sumei primelor n numere pare
let firstN = 8;
let sum = 0;
for (i = 1; i <= firstN; i++) {
    if (i % 2 !== 0) {
        continue;
    }

    sum += i;
}

console.log("Suma primelor ", firstN, "numere pare este: ", sum);