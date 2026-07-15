/*🥉 Level 1(Beginner)
Task 1 - User Introduction
Ask the user:
Name
Age
Print:
My name is Naveen
I am 18 years old
Use:
prompt()
console.log()

Code:
let username = prompt("What is your name?")
let userage = prompt("What is your age?")
console.log(`My name is ${username}`);
console.log(`I am ${userage} years old`);*/

/*Task 2 - Degree Confirmation
Ask:
Did you complete degree?
using:
confirm()
If true:
Degree Completed
Else:
Degree Not Completed
Print in console.

Code:
let user = confirm("Did you complete degree?");

if (user) {
    console.log("Degree Completed");
} else {
    console.log("Degree Not Completed");
}*/

/*Task 3 - Mobile Price
Create variables:
mobilePrice = 15000
discount = 2000
Find final price.
    Output:
Final Price: 13000

Code:
let MobilePrice = 15000
let Discount = 2000
let FinalPrice = (MobilePrice - Discount)
console.log("FinalPrice:", FinalPrice)*/

/*🥈 Level 2(Intermediate)
Task 4 - Age Eligibility
Ask age using prompt.
    Check:
        18 or above
Output:
Eligible for Vote
otherwise:
Not Eligible
Use comparison operator.

    Code:
let Candidate = prompt("Tell me your age:")
if (Candidate >= 18) {
    console.log("You are eligible to VOTE.")

}
else {
    console.log("You are not eligible to VOTE.")
}*/
/*Task 5 - Shopping Cart
Create array:
let cart = [
  "Rice",
  "Milk",
  "Sugar",
  "Tea Powder"
]
Print:
First Product
Last Product
Total Products

Code:
let cart = ["Rice", "Milk", "Sugar", "Tea Powder"]
console.log("First Product:", cart[0])
console.log("Last Product:", cart[cart.length - 1])
console.log("Total Products:", cart.length)*/

/*Task 6 - Student Details
Create object:
let student = {
    name: "Naveen",
    age: 18,
    course: "MERN"
}
Print:
Student Name:
Student Course:

Code:
let student = { name: "Naveen", age: 18, course: "JavaScript" }
console.log("Student Name:", student.name)
console.log("Student Course:", student.course)*/


/*🥇 Level 3(Real - Time Office Tasks)
Task 7 - Employee Salary Calculator
Create:
salary = 25000
bonus = 5000
Find total salary.
    Output:
Total Salary: 30000

Code:
let EmployeeSalary = (25000)
let EmployeeBonus = (5000)
let totalsalary = (EmployeeSalary + EmployeeBonus)
console.log("Total Salary:", totalsalary)*/

/*Task 8 - Website Login Check
Create:
let username = "admin"
let password = "1234"
Ask user through prompt.
If both match:
Login Successful
Else:
Invalid Credentials
Use:
&&

Code:
let CandidateNmae = prompt("Enter Your Username:")
let CandidatePassword = prompt("Enter Your Password:")
if (CandidateNmae === "admin" && CandidatePassword === "1234") {
    console.log("Login Successful")

}
else {
    console.log("Invalid Credentials")
}*/

/*Task 9 - Food Delivery App
Create:
foodPrice = 350
deliveryCharge = 50
Calculate:
Total Bill
GST 5%
Grand Total

Code:
let Foodprice = 350
let DeliveryCharge = 50
let TotalBill = (Foodprice + DeliveryCharge)
let GST = TotalBill * 5 / 100;
console.log("Grand Total =", TotalBill + GST);*/

/*🏆 Level 4 (Company Interview Style)
Task 10 - E-Commerce Product Details
Create object:
let product = {
   name : "Laptop",
   price : 50000,
   brand : "ASUS",
   stock : true
}
Print:
Product Name
Brand
Price
Stock Available

Code:
let product = { name: "Laptop", price: 50000, brand: "ASUS", stock: true }
console.log("Product Name:", product.name)
console.log("Brand:", product.brand)
console.log("Price:", product.price)
console.log("Stock Available:", product.stock ? "Yes" : "No")*/

/*Task 11 - Attendance System
Ask:
Present?
using:
confirm()
Output:
Attendance Marked
or
Absent

Code:
let AttendanceSystem = confirm("Did you attend JavaScript training class today?");
if (AttendanceSystem) {

    console.log("Attendance Marked")
}
else {
    console.log("Absent")
}*/

/*Task 12 - Banking Application
Ask user:
Current Balance
Withdraw Amount
Check:
withdraw <= balance
Output:
Transaction Successful
Remaining Balance : xxx
otherwise:
Insufficient Balance

Code:
let CurrentBalance = Number(prompt("Enter Your Current Balance:"))
let WithDrawAmount = Number(prompt("Enter Your With DrawAmount"))
let RemainingBalance = (CurrentBalance - WithDrawAmount)
if (WithDrawAmount <= CurrentBalance) {
    console.log("Transaction Successful")
    console.log("Remaining Balance :", RemainingBalance)
}
else {
    console.log("Insufficient Balance")

}*/

/*🔥 Challenge Task (Mix Everything)
Build a Mini Employee Management System
Store in object:
{
   name,
   age,
   department,
   salary
}
Print:
Employee Name
Employee Age
Department
Annual Salary
Then check:
salary > 30000
Output:
Senior Employee
or
Junior Employee*/

//code:
let employee = {
    name: prompt("Enter Name"),
    age: prompt("Enter Age"),
    department: prompt("Enter Department"),
    salary: Number(prompt("Enter Salary"))
};

let AnnualSalary = employee.salary * 12;
console.log("Employee Name:", employee.name);
console.log("Employee Age:", employee.age);
console.log("Department:", employee.department);
console.log("Annual Salary:", AnnualSalary);

if (AnnualSalary >= 30000) {
    console.log("The person is :Senior Employee")
}
else {
    console.log("The person is: Junior Employee")
}



