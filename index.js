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