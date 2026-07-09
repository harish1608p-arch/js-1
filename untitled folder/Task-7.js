/*Task 1: Employee Salary Dashboard
//Concepts: map(), filter(), reduce(), find()

Code:
let employees = [
    {
        name: "Naveen",
        Department: "FrontEnd",
        salary: "40000"
    },
    {
        name: "Sai Ram",
        Department: "Python",
        salary: "50000"
    },
    {
        name: "Vinod",
        Department: "Full Stack",
        salary: "75000"
    },
    {
        name: "Ram",
        Department: "Cloud Engineer",
        salary: "100000"
    }
];


let totalEmployee = employees.map(employee => employee.name);
let highSalaryEmployees = employees
    .filter(employee => employee.salary > 50000)
    .map(employee => employee.name);
let highSalaryEmployee = employees.find(employee => employee.salary >= 100000);
let total = employees.reduce((sum, employee) => {
    return sum + Number(employee.salary);
}, 0);

console.log("Employee Names:", totalEmployee);
console.log("Salary > 50000:", highSalaryEmployees);
console.log("First Salary >= 100000:", highSalaryEmployee);
console.log("Total Salary:", total);*/

/*Task 2: E-Commerce Cart Management
Concepts: Spread Operator, Rest Operator

Code:
let product1 = ["Rice", "Wheat", "Sugar", "Coffee"];
let product2 = ["Chocolate", "Ice Cream", "Milk", "Sour Cream"];

// Merge two arrays using spread operator
let totalProduct = [...product1, ...product2];
console.log("Merged Products:", totalProduct);

// Add a new product without changing the original array
let newProducts = [...product1, "Pepper"];
console.log("New Products:", newProducts);

// Rest Operator
function checkout(...products) {
    console.log("Products:", products);
    console.log("Total Products:", products.length);
}

checkout("Rice", "Sugar", "Milk", "Chocolate", "Pepper");*/

/*Task 3: Student Report Card
Concepts: Object Destructuring, Array Destructuring

Code:
let Student = {
    name: "Harish",
    department: "MPC",
    marks: [75, 90, 85]
};

// Object Destructuring
let { name, department, marks } = Student;

// Array Destructuring
let [marks1, marks2, marks3] = marks;

// Total and Average
let totalMarks = marks1 + marks2 + marks3;
let averageMarks = totalMarks / 3;

console.log("Student Name:", name);
console.log("Department:", department);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);*/

/*Task 4: Product Search System
//Concepts: String Methods

Code:
let product = "Apple iPhone 16 Pro";
let search = "   iPhone   ";

// Remove extra spaces
let searchText = search.trim();

// Convert to lowercase
searchText = searchText.toLowerCase();

// Convert product to lowercase
let productText = product.toLowerCase();

// Check if product contains the search keyword
if (productText.includes(searchText)) {
    console.log("Product Found");

    // Highlight the searched word
    let highlighted = product.replace(/iPhone/i, "**iPhone**");
    console.log(highlighted);
} else {
    console.log("Product Not Found");
}*/

//Task 5: Movie Collection Manager
//Concepts: Array Methods

//Code:
let movies = ["Avatar", "Inception", "Titanic", "Interstellar"];

// 1. Add new movies using push()
movies.push("Jawan", "Kalki");
console.log("After push():", movies);

// 2. Remove the last movie using pop()
movies.pop();
console.log("After pop():", movies);

// 3. Remove the first movie using shift()
movies.shift();
console.log("After shift():", movies);

// 4. Add a featured movie at the beginning using unshift()
movies.unshift("Bahubali");
console.log("After unshift():", movies);

// 5. Replace one movie using splice()
movies.splice(2, 1, "Pushpa");
console.log("After splice():", movies);

// 6. Sort movie ratings in descending order
let ratings = [8.5, 9.2, 7.8, 9.5, 8.9];

ratings.sort((a, b) => b - a);

console.log("Ratings (Descending):", ratings);

// 7. Check whether a movie exists using includes()
console.log("Is Pushpa available?", movies.includes("Pushpa"));

