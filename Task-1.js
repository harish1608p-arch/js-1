// Task 1 - Employee Name
// Ask the employee for their name using prompt().
// Print the employee name in the console.
// Display "Welcome <Employee Name>" on the webpage using document.writeln().

/*let name = prompt("What is your name?")
console.log(name);
document.writeln("Welcome" + " " + name)*/

// Task 2 - Company Entry Confirmation
// Show a confirm box:
// "Are you ready to join today's JavaScript training?"
// Print the user's answer (true/false) in the console.

/*let userInfo = confirm("Are you ready to join today's JavaScript training?");
console.log(userInfo)*/

// Task 3 - Customer Greeting
// Show an alert saying:
// "Welcome to Stackly Solutions!"
// Then print "Customer entered the website." in the console.

/*alert("Welcome to Stackly Solutions!")
console.log("Customer entered the website.")*/

// Task 4 - Student Details
// Ask the student for:
// 1. Name
// 2. Age
// Print both values in the console.

/*let studentName = prompt("What is your name?");
let studentAge = prompt("What is your age?");
console.log(studentName);
console.log(studentAge);*/

// Task 5 - Product Price
// Create a variable using let to store a product price.
// Update the price with a new value.
// Print the updated price using console.log().
//let ProductPrice = 50
//ProductPrice = prompt("Enter the New Price:")
//console.log(ProductPrice)

// Task 6 - Login Validation
// Ask the user to enter their username.
// If the username is empty,
// show a warning using console.warn().
// Otherwise print:
// "Login Successful: <username>"

//let username = prompt("Enter your username");
//if (username === "") {
//  console.warn("Warning: Username is empty.");
//} else {
//  console.log("Login Successful:", username);
//}

// Task 7 - Website Maintenance
// Display an alert:
// "Website is under maintenance."
// After that print an error message in the console using console.error().

//alert("Website is under maintenance.")
//console.error("Error: Website is currently unavailable.")

// Task 8 - Feedback Collection
// Ask the user:
// "How was today's JavaScript session?"
// Print the feedback in the console.
// Display:
// "Thank you for your feedback!"
// on the webpage.

/*let Feedback = prompt("Plese let us know how was today's JavaScript session?")
console.log(Feedback)
document.writeln("Thank you for your feedback!")*/

// Task 9 - Profile Information
// Ask the user for:
// Name
// City
// Favorite Programming Language
// Print all three values in the console.

/*let name = prompt("Enter your name:")
let city = prompt("Enter your city")
let course = prompt("Enter your Favorite Programming Language")
console.log(name)
console.log(city)
console.log(course)*/


// Task 10 - Mini Registration Form
let fullName = prompt("Enter your Full Name:");
let email = prompt("Enter your Email:");
let mobile = prompt("Enter your Mobile Number:");

if (fullName === "" || email === "" || mobile === "") {
    console.log("The form is empty. Please fill in all the details.");
    alert("The form is empty. Please fill in all the details.");
} else {
    console.log("===== Registration Details =====");
    console.log("Name   :", fullName);
    console.log("Email  :", email);
    console.log("Mobile :", mobile);

    alert("Registration Successful!");
}