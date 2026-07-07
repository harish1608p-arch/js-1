/*Task 1 - Employee Bonus(Spread Operator)
let employee = {
    name: "Naveen",
    salary: 35000
}
Task
Create another object using the spread operator and add
bonus: 5000
department: "Developer"
Print the new object.


    Code:
let employee = { name: "Naveen", salary: 35000 }
let apprication = { bonus: 5000, department: "Developer" }
let merge = { ...employee, ...apprication }
console.log(merge)*/

/*Task 2 - Shopping Cart (Rest Operator)
Code:
function calculateBill(...prices) {
    console.log("Items:", prices.length);

    let total = 0;

    total = prices[0] + prices[1] + prices[2] + prices[3];

    console.log("Total:", total);
}

calculateBill(10, 20, 30, 40);*/


/*Task 3 - Student Details (Object Destructuring)
Code:
let student = {
    name: "Rahul",
    age: 22,
    course: "MERN",
    city: "Chennai"

}

let { name, age, course, city } = student
console.log(name)
console.log(age)
console.log(course)
console.log(city)*/

/*Task 4 - Online Food Order
Code:
let foods = [
    "Pizza",
    "Burger",
    "Fries"
]
foods.pop()
foods.push("Coke", "Ice Cream")
console.log(foods)*/


/*Task 5 - Bank Transactions
Code:
let transactions = [1000, 2000, 3000, 4000]
transactions.shift()
transactions.unshift(500)
console.log(transactions)*/

/*Task 6 - Company Departments
Code:
let dept1 = ["HR", "Sales"]
let dept2 = ["Developer", "Testing"]
let result = dept1.concat(dept2)
console.log(result)*/

/*Task 7 - Product Search
Check whether
Keyboard
exists.
Code:
let products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
]
let product = "Keyboard"
if (products.includes(product)) {
    console.log("Available.");
} else {
    console.log("Not Available.");
}*/

/*Task 8 - User Login (Callback Function)
Code:
function login(callback) {
    console.log("Login Success")
    callback()
}
function dashboard() {
    console.log("Dashboard Opened")
}
login(dashboard)*/

/*Task 9 - Coupon Generator (Generator Function)
Code:
function* coupons() {
    yield "WELCOME10"
    yield "SAVE20"
    yield "MEGA50"
    yield "FREE100"
}

let Coupons = coupons();

console.log(Coupons.next().value);
console.log(Coupons.next().value);
console.log(Coupons.next().value);
console.log(Coupons.next().value);*/

/*Task 10 - Course Registration (Currying)
Code:
function course(courseName) {
    return function (batch) {
        return function (room) {
            console.log("Course :", courseName);
            console.log("Batch :", batch);
            console.log("Room :", room);
        };
    };
}

course("JavaScript")("Morning")("Batch-36");*/


/*Task 11 - Movie Collection
Use: Slice()
Code:
let movies = [
    "Leo",
    "GOAT",
    "Dragon",
    "Retro",
    "Coolie"

]
let result = movies.slice(2, 4)
console.log(result)*/

/*Task 12 - Employee IDs
using Splice()//Replace 102,103 with 501,502
Code:
let ids = [101, 102, 103, 104, 105]
ids.splice(2, 2, 501, 502)
console.log(ids)*/

/*Task 13 - Sort Product Prices
//Using Sort()
Code:
let price = [
    5000,
    250,
    700,
    12000,
    50
];

price.sort((a, b) => a - b);

console.log(price);*/

/*Task 14 - Nested Categories
Code:
let data = ["Electronics", ["Mobiles", ["Samsung", "Apple"]]]
let [first, [second, [third, forth]]] = data
console.log(first)
console.log(second)
console.log(third)
console.log(forth)*/


/*Task 15 - Company Team
//Merge both arrays using spread operator.
Code:
let developers = [
    "John",
    "David"
]
let designers = [
    "Ram",
    "Kiran"
]
let team = [...developers, ...designers]
console.log(team)*/

/*Task 16 - Return Function
//Store the returned value in another variable and print it.
Code:
function calculateSalary(salary, bonus) {
    return salary + bonus
}

let totalSalary = calculateSalary(55000, 5000);

console.log("Total Salary:", totalSalary);*/

/*Task 17 - Scope Checking
Code:
if (true) {
    var company = "Stackly IT";
    let employee = "Naveen";
    const salary = 50000;
}

console.log("Company:", company);     // Works
console.log("Employee:", employee);   // Error
console.log("Salary:", salary);

//Explain? Which works? Which gives an error?
//Company: Stackly IT
//ReferenceError: employee is not defined
//ReferenceError: salary is not defined*/

/*Task 18 - Customer Orders
Find:
First index of Pizza
Last index of Pizza
Code:
let orders = ["Pizza", "Burger", "Pizza", "Sandwich", "Pizza"]
let index = orders.indexOf("Pizza");
let lastindex = orders.lastIndexOf("Pizza");
console.log("First Pizza:", index)
console.log("Last Pizza:", lastindex)*/

/*Task 19 - Flatten Product Categories
//Using flat()
Code:
let items = [1, 2, [3, 4, [5, 6]]]
let result = items.flat(2)
console.log(result)*/

//Task 20 - Mini Shopping Cart Challenge
//Code
let cart = ["Mouse", "Keyboard"]

// Add "Monitor" using push()
cart.push("Monitor")

//adding "Laptop" at the beginning
cart.unshift("Laptop")

// Remove "Keyboard" using splice()
let index = cart.indexOf("Keyboard");
cart.splice(index, 1);

// Check whether "Mouse" exists
console.log("Mouse Exists:", cart.includes("Mouse"));

// Merge with accessories using spread operator
let accessories = ["Webcam", "Speaker"];

let completedCart = [...cart, ...accessories];

// Print the completed cart
console.log(completedCart);
