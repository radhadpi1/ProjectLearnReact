let num =  new Date().getMonth();    //Create a local variable to hold the string
console.log(num)
switch(num)
{
  case 0:
    month="January";
    break;
  case 1:
    month="February";
    break;
  case 2:
    month="March";
    break;
  case 3:
    month="April";
    break;
  case 4:
    month="May";
    break;
  case 5:
    month="June";
    break;
  case 6:
    month="July";
    break;
  case 7:
    month="August";
    break;
  case 8:
    month="September";
    break;
  case 9:
    month="October";
    break;
  case 10:
    month="November";
    break;
  case 11:
    month="December";
    break;
  default:
    month="Invalid month";
}
 console.log(month);

 //exe .. Write a `switch` statement that takes the variable `dayOfWeek` and logs a message based on the day of the week.
 // If it's a weekday (Monday to Friday), log "It's a workday."
 // If it's the weekend (Saturday or Sunday), log "It's the weekend."


 let day = new Date().getDay()
 let message = ""
 
 console.log(day);
 switch(day) {
    case 1:
    case 2: 
    case 3:
    case 4:
    case 5:
      message = "its, a weekday" 
      break;
    default:
        message = "its a weekend"
 }
 console.log(message)

 let score = 80
 grade =""
 switch(true) {
    case score >= 90 : grade = "A"
    break;
    case score >= 80 && score <= 89 : grade = "B"
    break;
    case score >= 70 && score <= 79 : grade = "C"
    break;
    case score >= 60 && score <= 69: grade = "D"
    break;
    default: grade ="F"
 }

 console.log("Your grade: "+grade)


 const fruit = "orange";
let fruitType;
switch (fruit) {
  case "strawberry":
  case "blueberry":
            fruitType = "berry"
            break
    break;
  case "orange":
  case "lemon":
  case "lime":
    fruitType = "citrus"
    break;
  default:
    fruitType = "other"
}
console.log("The type is: "+fruitType)


let browser ="opera"
message = "" 
switch(true){
    case "Chrome":
    case  "Firefox" : 
    case "Safari":
        message = "this browser is supported"
    default:
        message = "This browser is not supported"

}
console.log(message)


let date = new Date()
let year1 = date.getFullYear()
year1 = 2024
let month1 = date.getMonth()
month1 = 1
function checkLeapYear(year1) {

    //three conditions to find out the leap year
    if ((0 == year1 % 4) && (0 != year1 % 100) || (0 == year1 % 400)) {
        return true;
    } else {
        return false
    }
}
let daysInMonth;
switch (month1) 
{
    case 0: daysInMonth = 31
            break
    case 1: daysInMonth = checkLeapYear(year1) ? daysInMonth = 29 : daysInMonth = 28
            break
    case 2: daysInMonth = 31
            break
    case 3: daysInMonth = 30
            break
    case 4: daysInMonth = 31
            break
    case 5: daysInMonth = 30
            break
    case 6: daysInMonth = 31
            break
    case 7: daysInMonth = 31
            break
    case 8: daysInMonth = 30
            break
    case 9: daysInMonth = 31
            break
    case 10: daysInMonth = 30
            break
}
console.log(`There are ${daysInMonth} days in this month.`);

const income = 75000;
let taxRate;

switch(true) {
    case income <= 50000 : taxRate = 10
                           break
    case income > 50000 && income <= 100000: taxRate = 20
                                              break
    default:
        taxRate = 30 
} 

console.log(`Your tax rate is ${taxRate}%.`);


const price = 450;
let category;

switch(true) {
    case price < 100: category = 'low'
                        break
    case price >=100 && price < 500: category = 'medium' 
                                        break;
    default:
        category = "high"
}

console.log(`This product belongs to the ${category} category.`);

const vehicleType = "bike";
let parkingFee;

switch(vehicleType) {
    case "car": parkingFee = 10
                break
    case "bike": parkingFee = 5
                break
    case "truck": parkingFee = 15
                break
    default:
        console.log('enter correct vehicle type')
}

console.log(`The parking fee for this vehicle is ${parkingFee}.`);