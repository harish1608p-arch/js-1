/*🟢 Task 1 - Employee Login Eligibility
Concepts
Variables
Comparison Operators
Logical Operators
if else
    Scenario
HR wants to verify whether an employee can access the office.
    Requirements
Take employee age.
Take employee ID availability(true / false).
Take employee attendance percentage.
Allow entry only if:
    Age >= 18
ID available
Attendance >= 75
Expected Output
Access Granted
or
Access Denied

code:
let EmployeeAge = Number(prompt("Enter Your age:"))
let EmployeeID = prompt("Do you have ID?(true/false)")
let EmployeeAttendancePercentage = Number(prompt("What is your attendance percentage?"))
if (EmployeeAge >= 18 && EmployeeID === "true" && EmployeeAttendancePercentage >= 75) {
    console.log("Access Granted")

}
else {
    console.log("Access Denied")
}*/


/*🟢 Task 2 - Student Grade System
Concepts
if else if
Input
Marks = 87
Output
Grade A
Rules
90-100 -> A+
80-89  -> A
70-79  -> B
60-69  -> C
Below 60 -> Fail

Code:
let StudentsMarks = Number(prompt("Enter your marks:"))
if (StudentsMarks >= 90 && StudentsMarks <= 100) {
    console.log("A+")
}
else if (StudentsMarks >= 80 && StudentsMarks <= 89) {
    console.log("A")
}
else if (StudentsMarks >= 70 && StudentsMarks <= 79) {
    console.log("B")
}
else if (StudentsMarks >= 60 && StudentsMarks <= 69) {
    console.log("C")
}
else {
    console.log("Fail")
}*/

/*🟢 Task 3 - ATM Withdrawal
Concepts
Arithmetic
if else
Variables
Balance = 5000
Withdraw = 3000
Conditions
Enough balance
Withdraw amount should be multiple of 100
Output
Transaction Successful
Remaining Balance : 2000

Code:
let Balance = 5000
let Withdraw = 3000
let RM = (Balance - Withdraw)
if (Withdraw <= Balance && Withdraw % 100 === 0) {
    console.log("Transaction Successful", "Remaining Balance:", RM)
}
else {
    console.log("Transaction Unsuccessful")
}*/

/*Task 4 - Food Ordering App
Concepts
switch
Menu
1 Pizza
2 Burger
3 Shawarma
4 Biryani
5 Juice
Input
choice = 4
Output
You Ordered Biryani

Code:
let Menu = Number(prompt("Enter your choice(1-5):"))
switch (Menu) {
    case 1: console.log("You Ordered Pizza"); break;
    case 2: console.log("You Ordered Burger"); break;
    case 3: console.log("You Ordered Shawarma"); break;
    case 4: console.log("You Ordered Biryani"); break;
    case 5: console.log("You Ordered Juice"); break;

    default: console.log("Invalid choice. Enter a number between 1 and 5.");
}*/

/*🟢 Task 5 - E-Commerce Discount
Concepts
Operators
if else
Rules
Purchase > 5000

Premium User

↓

20% Discount

Otherwise

10% Discount
Display
Original Price
Discount
Final Price

Code:
let PurchaseAmount = Number(prompt("Enter What is Purchase amount:"))
let PremiumUser = prompt("Are you a Premium User? (true/false)");
let Discount;
let FinalPrice;
if (PurchaseAmount > 5000 && PremiumUser === "true") {
    Discount = PurchaseAmount * 20 / 100;
} else {
    Discount = PurchaseAmount * 10 / 100;
}

FinalPrice = PurchaseAmount - Discount;

console.log("Original Price:", PurchaseAmount);
console.log("Discount:", Discount);
console.log("Final Price:", FinalPrice);*/

/*🟢 Task 6 - Attendance Report
Concepts
for loop
Print
Day 1 Present
Day 2 Present
...
Day 30 Present

Code:
for (let i = 1; i <= 30; i++) {
    console.log("Day", i, "Present")
}*/

/*🟢 Task 7 - Even Number Generator
Concepts
Loop
Modulus
Print
2
4
6
8
10
...
100

Code:
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0)
        console.log(i)
}*/

/*Task 8 - Mobile Number Validation
Concepts
if
Logical Operator
Conditions
Length = 10

Starts with

6
7
8
9
Output
Valid Mobile Number
or
Invalid Mobile Number

Code:
let CustomerNumber = prompt("Enter Your MobileNumber:")
if (CustomerNumber.length === 10 &&
    (CustomerNumber[0] === '6' ||
        CustomerNumber[0] === '7' ||
        CustomerNumber[0] === '8' ||
        CustomerNumber[0] === '9')

) {
    console.log("Vaild PhoneNumber")
}
else {
    console.log("Not a Vaild MobileNumber")
}*/


/*🟢 Task 9 - Shopping Cart
Concepts
Array
cart = [
    "Milk",
    "Bread",
    "Egg",
    "Rice",
    "Oil"
]
Print
First Item
Last Item
Total Items
code:
let cart = ["Milk", "Bread", "Egg", "Rice", "Oil"]
console.log(cart[0])
console.log(cart[4])
console.log(cart.length)*/

/*🟢 Task 10 - Employee Database
Concepts
Object
employee = {

name

salary

department

experience

}
Print
Employee Name

Department

Experience

Code:
let Employee = {
    Name: "Tony",
    Salary: "100Bilion",
    Department: "Robotics",
    Experience: "25Years"
}
console.log("Employee Name:", Employee.Name)
console.log("Department:", Employee.Department)
console.log("Experience:", Employee.Experience)*/

/*🟢 Task 11 - Company ID Generator
Concepts
Template Literal
Input
Name = Naveen

ID = 1045

Department = Development
Output
Welcome Naveen

Your Employee ID is EMP1045

Department : Development

code:
let Employee = {
    Name: "Naveen",
    ID: "1045",
    Department: "Development"
}
console.log(`Welcome ${Employee.Name}`);
console.log(`Your Employee ID id EMP${Employee.ID}`)
console.log(`Department: ${Employee.Department}`)*/

/*🟢 Task 12 - User Registration
Concepts
prompt()
confirm()
alert()
Flow
Enter Name

Enter Age

Do you accept Terms ?

↓

Registered Successfully
Code:
let UserName = prompt("Enter Your Name:")
let UserAge = Number(prompt("Enter Your age:"))
let UserrTerms = confirm("Do you accept Terms?")
if (UserrTerms) {
    alert("Registration Successfully")
}
else {
    alert("Registration UnSuccessfully")
}*/

/*🟢 Task 13 - Salary Increment Calculator
Concepts
Arithmetic Operators
Input
Salary = 35000

Increment = 15 %
    Output
Old Salary

Increment Amount

New Salary

Code:
let EmployeeSalary = 35000
let EmployeeIncrement = 15
TotalIncrement = EmployeeSalary * EmployeeIncrement / 100
TotalSalary = EmployeeSalary + TotalIncrement
console.log("Old Salary:", EmployeeSalary)
console.log("Increment Amount:", TotalIncrement)
console.log("New Salary:", TotalSalary)*/

/*🟢 Task 14 - Restaurant Bill Generator
Concepts
Variables
Operators
Input
Burger = 150

Pizza = 300

Juice = 80
Calculate
Subtotal

GST 18%

Grand Total

Code:
let Burger = 150
let Pizza = 300
let Juice = 80
let SubTotal = Burger + Pizza + Juice
let GSTTax = SubTotal * 18 / 100
let GrandTotal = SubTotal + GSTTax
console.log("SubTotal:", SubTotal)
console.log("GST:", GSTTax)
console.log("GrandTotal:", GrandTotal)*/

/*🟢 Task 15 - Company Attendance Dashboard
Concepts
Loop
Object
if else
    Employees
Rahul - Present

Arun - Absent

Kamal - Present

Priya - Present

Divya - Absent
Print
Present Employees

Absent Employees

Total Present

Total Absent
Code:
let Employees = {
    Rahul: "Present",
    Arun: "Absent",
    Kamal: "Present",
    Priya: "Present",
    Divya: "Absent"
};

let totalPresent = 0;
let totalAbsent = 0;

console.log("Present Employees:");

for (let employee in Employees) {
    if (Employees[employee] === "Present") {
        console.log(employee);
        totalPresent++;
    }
}

console.log("Absent Employees:");

for (let employee in Employees) {
    if (Employees[employee] === "Present") {
    } else {
        console.log(employee);
        totalAbsent++;
    }
}

console.log("Total Present:", totalPresent);
console.log("Total Absent:", totalAbsent);*/

/*⭐ Mini Project (Team Assignment)
Employee Management System (Console Version)
Concepts Covered:
Variables
Arrays
Objects
if else
switch
Loops
Operators
Template Literals
Features
Add Employee
View All Employees
Search Employee by ID
Calculate Salary with Bonus
Check Experience Level
Delete Employee
Exit

Code:
let employees = [];
let running = true;

while (running) {
    console.log("Employee Management System");
    console.log("1. Add Employee");
    console.log("2. View All Employees");
    console.log("3. Search Employee by ID");
    console.log("4. Calculate Salary with Bonus");
    console.log("5. Check Experience Level");
    console.log("6. Delete Employee");
    console.log("7. Exit");

    let choice = Number(prompt("Enter your choice:"));

    switch (choice) {

        // Add Employee
        case 1:
            let employee = {
                id: Number(prompt("Enter Employee ID:")),
                name: prompt("Enter Employee Name:"),
                department: prompt("Enter Department:"),
                salary: Number(prompt("Enter Salary:")),
                experience: Number(prompt("Enter Experience (Years):"))
            };

            employees.push(employee);
            console.log("Employee Added Successfully!");
            break;

        // View All Employees
        case 2:
            if (employees.length === 0) {
                console.log("No Employees Found.");
            } else {
                console.log("Employee List");
                for (let emp of employees) {
                    console.log(`
ID          : ${emp.id}
Name        : ${emp.name}
Department  : ${emp.department}
Salary      : ₹${emp.salary}
Experience  : ${emp.experience} Years
`);
                }
            }
            break;

        // Search Employee
        case 3:
            let searchId = Number(prompt("Enter Employee ID:"));
            let found = false;

            for (let emp of employees) {
                if (emp.id === searchId) {
                    console.log(`
Employee Found
ID          : ${emp.id}
Name        : ${emp.name}
Department  : ${emp.department}
Salary      : ₹${emp.salary}
Experience  : ${emp.experience} Years`);
                    found = true;
                    break;
                }
            }

            if (!found) {
                console.log("Employee Not Found.");
            }
            break;

        // Calculate Salary with Bonus
        case 4:
            let bonusId = Number(prompt("Enter Employee ID:"));
            let bonusFound = false;

            for (let emp of employees) {
                if (emp.id === bonusId) {

                    let bonus = 0;

                    if (emp.salary >= 50000) {
                        bonus = emp.salary * 0.20;
                    } else if (emp.salary >= 30000) {
                        bonus = emp.salary * 0.10;
                    } else {
                        bonus = emp.salary * 0.05;
                    }

                    console.log(`Employee: ${emp.name}`);
                    console.log(`Salary: ₹${emp.salary}`);
                    console.log(`Bonus: ₹${bonus}`);
                    console.log(`Final Salary: ₹${emp.salary + bonus}`);

                    bonusFound = true;
                    break;
                }
            }

            if (!bonusFound) {
                console.log("Employee Not Found.");
            }

            break;

        // Check Experience Level
        case 5:
            let expId = Number(prompt("Enter Employee ID:"));
            let expFound = false;

            for (let emp of employees) {
                if (emp.id === expId) {

                    console.log(`Employee: ${emp.name}`);

                    if (emp.experience >= 10) {
                        console.log("Experience Level: Senior");
                    } else if (emp.experience >= 5) {
                        console.log("Experience Level: Mid-Level");
                    } else {
                        console.log("Experience Level: Junior");
                    }

                    expFound = true;
                    break;
                }
            }

            if (!expFound) {
                console.log("Employee Not Found.");
            }

            break;

        // Delete Employee
        case 6:
            let deleteId = Number(prompt("Enter Employee ID to Delete:"));
            let deleted = false;

            for (let i = 0; i < employees.length; i++) {
                if (employees[i].id === deleteId) {
                    employees.splice(i, 1);
                    console.log("Employee Deleted Successfully.");
                    deleted = true;
                    break;
                }
            }

            if (!deleted) {
                console.log("Employee Not Found.");
            }

            break;

        // Exit
        case 7:
            console.log("Thank You!");
            running = false;
            break;

        default:
            console.log("Invalid Choice!");
    }
}*/

