/*1. Employee Login(Scope)
Create a function where:
    var companyName = "Stackly IT" should be accessible outside the if block.
let employeeId and const password should only be accessible inside the block.
    Print all variables and identify which one throws an error.


    Code:
        function employeeLogin() {

            if (true) {
                var companyName = "Stackly IT";
                let employeeId = "EMP101";
                const password = "Pass123";

                console.log("Inside Block");
                console.log("Company Name:", companyName);
                console.log("Employee ID:", employeeId);
                console.log("Password:", password);
            }

            console.log("\nOutside Block");
            console.log("Company Name:", companyName); // Accessible

            console.log("Employee ID:", employeeId); // Error
            console.log("Password:", password); // Error
        }

employeeLogin();*/

//companyName(var) → Accessible outside the if block because var is function-scoped.
//  employeeId(let) → Throws ReferenceError because let is block-scoped.
//    password(const) → Would also throw ReferenceError because const is block-scoped, but execution stops at the employeeId error.

/*2. ATM Machine (Hoisting)

Code:
// Using var
console.log("Var Account Balance:", accountBalance);
var accountBalance = 5000;

// Using let
console.log("Let Account Balance:", savingsBalance);
let savingsBalance = 10000;

// Using const
console.log("Const Account Balance:", fixedDeposit);
const fixedDeposit = 20000;

//Explain the different outputs.
//var → Prints undefined because var is hoisted.
//let → Gives a ReferenceError because let cannot be used before it is declared.
//const → Gives a ReferenceError because const cannot be used before it is declared.*/

/*3. Food Delivery App(Named Function)
Create a named function:
    orderFood(foodName)
When called:
orderFood("Chicken Biryani")
Output:
Order Placed: Chicken Biryani

//Code:
function orderFood(foodName) {
    console.log("Order Placed :", foodName);
}

orderFood("Chicken Biryani");*/

/*4. WhatsApp Status (Anonymous Function)
Store an anonymous function inside a variable.

Code:
let whatsappStatus = function () {
    console.log("Status Updated:", "Busy in Meeting");
};

whatsappStatus();*/

/*5. Weather App (Arrow Function)
Code:
let climate = (city, temperature) => {
    console.log(city + " Temperature is " + temperature + "°C");
};

climate("Chennai", 36);*/

/*6. Flipkart Offer (IIFE)
Immediately display:
Today's Offer
Flat 60% Discount
using an IIFE.
Code:
(function () {
    console.log("Today's Offer");
    console.log("Flat 60% Discount");
})();*/

/*7. Online Payment(Higher Order + Callback)
Code:
function paymentSuccess() {
    console.log("Payment Successful");
}

function makePayment(callback) {
    console.log("Payment Processing...");
    callback();
}

makePayment(paymentSuccess);*/

/*8. YouTube Playlist (Generator Function)
Code:
function* playlist() {
    yield "Video 1";
    yield "Video 2";
    yield "Video 3";
    yield "Video 4";
    return "Playlist Completed";
}

let videos = playlist();

console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);
console.log(videos.next().value);*/

/*9. Student Result (Return)
Code:
function calculateTotal() {
    return 485;
}

let totalMarks = calculateTotal();

console.log("Total Marks :", totalMarks);*/

/*10. Shopping Cart(Return)
Code:
function cartTotal(price1, price2, price3) {
    return price1 + price2 + price3;
}

let totalAmount = cartTotal(500, 1000, 1500);

console.log("Total Amount :", totalAmount);*/

/*11. Salary Calculator(Uncurrying)
Code:
function salary(basic, hra, bonus) {
    return basic + hra + bonus;
}

let totalSalary = salary(50000, 5000, 3000);

console.log("Total Salary :", totalSalary);*/

/*12. Food Bill(Currying)
Code:
function foodBill(food) {
    return function (drinks) {
        return function (dessert) {
            return food + drinks + dessert;
        };
    };
}

console.log("Total Bill :", foodBill(200)(100)(80));*/

/*13. E-commerce Coupon Generator
Code:
function* couponGenerator() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";
    return "No More Coupons";
}

let coupon = couponGenerator();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);*/

/*14. Bank Transaction (Higher Order + Callback)
Code:
function transactionSuccess() {
    console.log("Transaction Successful");
}

function withdraw(callback) {
    console.log("Processing...");
    callback();
}

withdraw(transactionSuccess);*/

/*15. Employee Profile (Scope)
Code:
function employeeProfile() {

    if (true) {
        var company = "Stackly";
        let designation = "MERN Developer";
        const salary = 50000;
    }

    console.log("Company:", company);
    console.log("Designation:", designation);
    console.log("Salary:", salary);
}

employeeProfile();*/