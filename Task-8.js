/*Task 1: Employee Age Calculator

Code:
let dob = new Date("2002-04-06");
let today = new Date();
let age = today.getFullYear() - dob.getFullYear();

console.log("Employee Age:", age, "Years");*/

/*Task 2: Online Appointment Scheduler
Code:
let today = new Date()
today.setFullYear(2027)
today.setMonth(11)
today.setDate(15)
today.setHours(10)
today.setMinutes(30)

console.log("Appointment:", today)*/

/*Task 3: Multi - Country Meeting Time

Code:
let today = new Date();

console.log("India Time:");
console.log(today.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
}));

console.log("New York Time:");
console.log(today.toLocaleString("en-US", {
    timeZone: "America/New_York"
}));

console.log("Tokyo Time:");
console.log(today.toLocaleString("en-JP", {
    timeZone: "Asia/Tokyo"
}));*/

/*Task 4: Product Warranty Expiry

Code:
let purchaseDate = new Date();

let warrantyExpiry = new Date(purchaseDate);
warrantyExpiry.setFullYear(warrantyExpiry.getFullYear() + 2);

console.log("Purchase Date:", purchaseDate);
console.log("Warranty Expiry:", warrantyExpiry);*/

//Task 5: Digital Clock
//Code:
setInterval(() => {
    let today = new Date()
    console.log(today.toLocaleTimeString())
}, 1000)
