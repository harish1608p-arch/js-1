/*🟢 Task 1 - Find the Highest Salary
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
Task
Print
Highest Salary: 60000
Employee Name: John

Code:
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];

let highestSalary = employees[0].salary;
let employeeName = employees[0].name;

for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary > highestSalary) {
        highestSalary = employees[i].salary;
        employeeName = employees[i].name;
    }
}

console.log("Highest Salary:", highestSalary);
console.log("Employee Name:", employeeName);*/

/*🟢 Task 2 - Find Employee by ID
Using the same array,
Search for
let searchId = 103;

let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];

let searchId = 103;
let found = false;

for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === searchId) {
        console.log("Employee Found");
        console.log("Name:", employees[i].name);
        console.log("Salary:", employees[i].salary);
        found = true;
        break;
    }
}

if (found === false) {
    console.log("Employee Not Found");
}*/

/*🟢 Task 3 - Calculate Salary with Bonus
Bonus
let bonus = 5000;
Task
Calculate the salary after bonus for every employee.
Output
Naveen : 35000

John : 65000

Arun : 50000
Code:
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];

let bonus = 5000;
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name + " : " + (employees[i].salary + bonus));
}*/
/*🟢 Task 4 - Experience Check
let employees = [
    {
        name: "Naveen",
        experience: 2
    },
    {
        name: "John",
        experience: 7
    },
    {
        name: "Arun",
        experience: 5
    }
];
Rules
Experience ≥ 5 → Senior Employee
Otherwise → Junior Employee
Code:
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000,
        experience: 2
    },
    {
        name: "John",
        id: 102,
        salary: 60000,
        experience: 7
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000,
        experience: 5
    }
];
for (let i = 0; i < employees.length; i++) {
    if (employees[i].experience >= 5) {
        console.log(employees[i].name + " - Senior Employee");
    }
    else {
        console.log(employees[i].name + " - Junior Employee");
    }
}*/


/*🟢 Task 5 - Display Only Employee Names

Code:
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
]


for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name)
}*/

/*🟢 Task 6 - Display Employee IDs

Code:
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];


for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].id)
}*/

/*🟢 Task 7 - Find Total Salary
Calculate the total salary paid by the company

Code:
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {
    totalSalary = totalSalary + employees[i].salary;
}

console.log("Total Salary:", totalSalary);*/

/*🟢 Task 8 - Employees Earning More Than ₹40,000
Output

Code:
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 40000) {
        console.log(employees[i].name)
    }
}*/

/*🟢 Task 9 - Increase Salary
Increase every employee's salary by ₹5000.

//Code:
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];

let bonus = 5000;
for (let i = 0; i < employees.length; i++) {
    employees[i].salary = employees[i].salary + bonus;
    console.log(employees[i].name + " : " + employees[i].salary);
}*/

/*🟢 Task 10 - Employee Report
Print using Template Literals.


Code:
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];

for (let i = 0; i < employees.length; i++) {
    console.log(`Employee Name : ${employees[i].name}`);
    console.log(`Employee ID : ${employees[i].id}`);
    console.log(`Salary : ${employees[i].salary}`);
    console.log();
}*/


/*⭐ Challenge Task(Best for Interviews)
    let employees = [
        {
            name: "Naveen",
            id: 101,
            salary: 30000
        },
        {
            name: "John",
            id: 102,
            salary: 60000
        },
        {
            name: "Arun",
            id: 103,
            salary: 45000
        }
    ];
Find:
Total number of employees.
Highest salary.
Lowest salary.
Total salary of all employees.
Employee earning the highest salary.
Employee earning the lowest salary.
Employees whose salary is greater than ₹40,000.
Search an employee by ID.
    Add ₹5,000 bonus to every employee and display the new salary.
Print a professional employee report using template literals.
    //Code:
    let employees = [
        {
            name: "Naveen",
            id: 101,
            salary: 30000
        },
        {
            name: "John",
            id: 102,
            salary: 60000
        },
        {
            name: "Arun",
            id: 103,
            salary: 45000
        }
    ];

// Total number of employees
console.log("Total Employees:", employees.length);

// Highest Salary
let highestSalary = 0;
let highestEmployee = "";

for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > highestSalary) {
        highestSalary = employees[i].salary;
        highestEmployee = employees[i].name;
    }
}

console.log("Highest Salary:", highestSalary);
console.log("Employee with Highest Salary:", highestEmployee);

// Lowest Salary
let lowestSalary = employees[0].salary;
let lowestEmployee = employees[0].name;

for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary < lowestSalary) {
        lowestSalary = employees[i].salary;
        lowestEmployee = employees[i].name;
    }
}

console.log("Lowest Salary:", lowestSalary);
console.log("Employee with Lowest Salary:", lowestEmployee);

// Total Salary
let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {
    totalSalary = totalSalary + employees[i].salary;
}

console.log("Total Salary:", totalSalary);

// Employees earning more than 40000
console.log("Employees earning more than 40000:");

for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 40000) {
        console.log(employees[i].name);
    }
}

// Search Employee by ID
let searchId = 102;
let found = false;

for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === searchId) {
        console.log("Employee Found");
        console.log("Name:", employees[i].name);
        console.log("Salary:", employees[i].salary);
        found = true;
    }
}

if (found === false) {
    console.log("Employee Not Found");
}

// Add Bonus
let bonus = 5000;

console.log("Salary After Bonus:");

for (let i = 0; i < employees.length; i++) {
    employees[i].salary = employees[i].salary + bonus;
    console.log(employees[i].name + " : " + employees[i].salary);
}

// Employee Report
console.log("\nEmployee Report");

for (let i = 0; i < employees.length; i++) {
    console.log(`Employee Name : ${employees[i].name}`);
    console.log(`Employee ID : ${employees[i].id}`);
    console.log(`Salary : ${employees[i].salary}`);
    console.log();
}*/

/////////////////////2nd assignment in same day///////////////

/*🟢 Task 1 - Company Welcome Function

code:
    function greet() {
        console.log("Welcome to Stackly IT")
    }
greet()*/

/*🟢 Task 2 - Employee Details
Create a function that accepts:
Name
Department
Salary
Print:
Employee Name: Naveen
Department: Developer
Salary: 30000

Code:
function employeeDetails(Name, Department, Salary) {
    console.log("Employee Name:" + Name)
    console.log("Department:" + Department)
    console.log("Salary:" + Salary)

}
employeeDetails("Naveen", "Developer", 30000)*/

/*🟢 Task 3 - Calculate Bonus
Create a function that accepts:
Salary = 40000
Bonus = 5000
Print:
Total Salary : 45000

code:
function add(Salary, Bonus) {
    return Salary + Bonus;
}
let result = add(40000, 5000)
console.log("Total Salary:", result)*/



/*🟢 Task 4 - Student Result
Create a function that accepts marks.
Rules:
Marks ≥ 35 → Pass
Otherwise → Fail
Example:
Input : 45

Output : Pass
//Code:1
/*function CheckMarks() {
    let Marks = Number(prompt("Enter Your Marks:"));
    if (Marks >= 35) {
        console.log("output: Pass")

    } else {
        console.log("Fail")
    }
}
CheckMarks();
//Code:2
function checkMarks(marks) {
    if (marks >= 35) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}
checkMarks(45);*/

/*🟢 Task 5 - Return Employee Name
Create a function that returns
"Naveen"
Store it in another variable and print it.

    Code:
function employeeName() {
    return "Naveen";
}

let name = employeeName();
console.log(name);*/

/*🟢 Task 6 - Product Price
Create a function.
Return
25000
Store it in a variable and calculate
Price + GST

Code:
function ProductPrice() {
    return 25000;
}

let price = ProductPrice();
let gst = price * 17 / 100;

console.log("Price:", price);
console.log("GST:", gst);
console.log("Total Price:", price + gst);*/

//🟢 Task 7 - Scope
//Predict the output.

/*function demo() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

    }

    console.log(a);

}*/

//Question
//Which variable prints? ANS: No Output
//Which variables give an error? 
// ANS: b is declared with let, so it is block-scoped.
//c is declared with const, so it is also block-scoped.
//Why?
//var is function-scoped, so a is accessible anywhere inside the function.
//let and const are block-scoped, so b and c are accessible only inside the {} block where they are declared.

/*🟢 Task 8 - Hoisting
Predict the output.
console.log(a);
var a = 100;
Output:undefined

Now check

console.log(b);
let b = 200;
Output:ReferenceError: Cannot access 'b' before initialization

Explain the difference.
var → Hoisted and initialized with undefined.
let → Hoisted but not initialized, so accessing it before declaration gives a ReferenceError.*/

/*🟢 Task 9 - Named Function
Create a named function that prints
Good Morning

Code:
function greet() {
    console.log("Good Morning");
}

greet();*/

/*🟢 Task 10 - Anonymous Function
Store an anonymous function inside a variable.
Print
Welcome Employee

Code:
let AnonymousFunction = function () {
    console.log("Welcome Employee")
}
AnonymousFunction();*/

/*🟢 Task 11 - Arrow Function
Create an arrow function that prints
JavaScript Training

Code:
let a = () => {
    console.log("JavaScript Training")
}
a();*/

/*🟢 Task 12 - Return Function
Create a function.
Return
"Stackly"
Store it in another variable.
Print
Welcome Stackly

Code:
function name() {
    return ("Stackly")

}
let newname = name();
console.log("Welcome " + newname)*/

/*🟢 Task 13 - Higher Order Function
Create two functions.
Function 1
Login Successful
Function 2
Dashboard Loaded
Call Function 2 through Function 1.
Expected Output
Login Successful
Dashboard Loaded

Code:
function dashboard() {
    console.log("Dashboard Loaded");
}

function login() {
    console.log("Login Successful");
    dashboard();
}

login();*/

/*🟢 Task 14 - Callback Function
Real-time Scenario
Order Received

Preparing Food

Delivered
Create three functions.
Call them using callback style.

Code:

function delivered() {
    console.log("Delivered");
}

function preparingFood(callback) {
    console.log("Preparing Food");
    callback();
}

function orderReceived(callback) {
    console.log("Order Received");
    callback(delivered);
}

orderReceived(preparingFood);*/

/*🟢 Task 15 - Generator Function
Create a coupon system.
Coupons
10% Discount
20% Discount
30% Discount
Better Luck Next Time
Every
next()
should return the next coupon.

Code:

function* coupons() {
    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "Better Luck Next Time";
}

let coupon = coupons();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);*/


/*🟢 Task 15 - Generator Function
Create a coupon system.
Coupons
10% Discount
20% Discount
30% Discount
Better Luck Next Time
Every
next()
should return the next coupon.

Code:
function* coupons() {
    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "Better Luck Next Time";
}

let coupon = coupons();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);*/

/*🟢 Task 16 - Return + Generator
Create a generator that returns
Apple

Orange

Banana
Print each value using
next(

Code:
function* fruits() {
    yield "Apple";
    yield "Orange";
    yield "Banana";
}

let fruit = fruits();

console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);*/

/*🟢 Task 17 - Currying
Create
discount(1000)(10)
Output
Final Price : 900

function discount(price) {
    return function (percent) {
        let finalPrice = price - (price * percent / 100);
        console.log("Final Price :", finalPrice);
    };
}

discount(1000)(10);*/

/*🟢 Task 18 - Company Salary
Create
salary(30000)(5000)(2000)
Meaning
Salary

Bonus

Allowance
Output
37000

Code:
function salary(salary) {
    return function (bonus) {
        return function (allowance) {
            return salary + bonus + allowance;
        };
    };
}

let total = salary(30000)(5000)(2000);
console.log(total);*/


/*🟢 Task 19 - Real - Time Login System
Create functions for
Enter Username

↓

Verify Password

↓

Login Successful

↓

Load Dashboard
Use function calling to simulate the process.

    Code: 1
function loadDashboard() {
    console.log("Load Dashboard");
}

function loginSuccessful() {
    console.log("Login Successful");
    loadDashboard();
}

function verifyPassword() {
    console.log("Verify Password");
    loginSuccessful();
}

function enterUsername() {
    console.log("Enter Username");
    verifyPassword();
}

enterUsername();

Code: 2(With Prompt())
function loadDashboard() {
    console.log("Load Dashboard");
}

function loginSuccessful() {
    console.log("Login Successful");
    loadDashboard();
}

function verifyPassword() {
    let password = prompt("Enter Password:");
    console.log("Verify Password");
    loginSuccessful();
}

function enterUsername() {
    let username = prompt("Enter Username:");
    console.log("Username:", username);
    verifyPassword();
}

enterUsername();*/


//⭐ Mini Project(Based on Your Syllabus)
//Employee Salary Management System

//Code:

let employee = {
    name: prompt("Enter Employee Name:"),
    id: Number(prompt("Enter Employee ID:")),
    department: prompt("Enter Department:"),
    salary: Number(prompt("Enter Salary:"))
};

// Arrow Function
let welcome = () => {
    console.log("Welcome to Employee Salary Management System");
};
welcome();

console.log("");

// Display Employee Details
function employeeDetails() {
    console.log("Employee Name :", employee.name);
    console.log("Employee ID :", employee.id);
    console.log("Department :", employee.department);
    console.log("Salary :", employee.salary);
}
employeeDetails();



// Calculate Salary + Bonus
function calculateSalary(salary, bonus) {
    return salary + bonus;
}

let finalSalary = calculateSalary(employee.salary, 5000);

console.log("Salary After Bonus :", finalSalary);

console.log("");

// Anonymous Function
let printDepartment = function () {
    console.log("Department :", employee.department);
};

printDepartment();



// Callback Function
function dashboard() {
    console.log("Employee Dashboard Loaded");
}

function login(callback) {
    console.log("Login Successful");
    callback();
}

login(dashboard);

console.log("");

// Generator Function
function* coupons() {
    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "Better Luck Next Time";
}

let coupon = coupons();

console.log("Coupon 1 :", coupon.next().value);
console.log("Coupon 2 :", coupon.next().value);
console.log("Coupon 3 :", coupon.next().value);
console.log("Coupon 4 :", coupon.next().value);

console.log("");

// Currying
function taxCalculation(salary) {
    return function (tax) {
        return salary - (salary * tax / 100);
    };
}

let salaryAfterTax = taxCalculation(finalSalary)(10);

console.log("Salary After Tax :", salaryAfterTax);

//console.log("");

// Final Employee Report
console.log("Employee Report");
console.log(`Employee Name : ${employee.name}`);
console.log(`Employee ID : ${employee.id}`);
console.log(`Department : ${employee.department}`);
console.log(`Original Salary : ${employee.salary}`);
console.log(`Salary After Bonus : ${finalSalary}`);
console.log(`Salary After Tax : ${salaryAfterTax}`);