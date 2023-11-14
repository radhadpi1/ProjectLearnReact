const num = 10;

if (num > 5) {
  console.log("Greater than 5");
} else {
  console.log("Less than or equal to 5");
}

//output : Greater than 5



const age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//output: You are an adult.

const x = 10;
const y = "10";

if (x === y) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}
  
  //output: Not Equal

const hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning!";
} else if (hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}

console.log(greeting + hour);

//output: based on your current local time


const num1 = 5;
const num2 = 10;
let result;

if (num1 > num2) {
  result = "Num1 is greater.";
} else if (num1 < num2) {
  result = "Num2 is greater.";
} else {
  result = "Both numbers are equal.";
}

console.log(result);
//output: Num2 is greater


const a = 10;
const b = 20;

if (a > 5 && b < 25) {
  console.log("Condition met!");
} else {
  console.log("Condition not met!");
}
//Output: Condition met!

const name = "John";
const isAdmin = true;

if (isAdmin || name === "John") {
  console.log("Access granted!");
} else {
  console.log("Access denied!");
}
//Output: Access granted!

const number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
//Output: Odd

const age1 = 65;
const isRetired = age1 >= 60;

if (isRetired) {
  console.log("Enjoy your retirement!");
} else {
  console.log("Keep working hard!");
}
//Output: Enjoy your retirement!

const number1 = 0;

if (number1) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
//Output: Falsy

 const n = 15;

if (n > 10) {
  console.log("Greater than 10");
  if (n > 20) {
    console.log("Also greater than 20");
  } else {
    console.log("But not greater than 20");
  }
} else {
  console.log("Not greater than 10");
}
//Output: Greater than 10 But not greater than 20

const day = "Saturday";
const isWeekend = true;

if (isWeekend) {
  console.log("It's a weekend!");
  if (day === "Saturday") {
    console.log("Enjoy your Saturday!");
  } else if (day === "Sunday") {
    console.log("Relax on Sunday!");
  } else {
    console.log("Some other weekend day.");
  }
} else {
  console.log("It's a weekday.");
}

//output: Enjoy your Saturday!


const num11 = 12;
const num21 = 8;


if (num11 > 10) {
  if (num21 > 5) {
    result = "Both conditions met!";
  } else {
    result = "Second condition not met!";
  }
} else {
  result = "First condition not met!";
}

console.log(result);
//Output: Both conditions met!

const age11 = 17;
const hasLicense = false;
let canDrive;

if (age11 >= 18) {
  if (hasLicense) {
    canDrive = "You can drive!";
  } else {
    canDrive = "You need a license to drive.";
  }
} else {
  canDrive = "You are too young to drive.";
}

console.log(canDrive);

//Output: You are too young to drive.

const num31 = 55;

if (num31 > 50) {
  console.log("Greater than 50");
  if (num31 % 2 === 0) {
    console.log("And it's even.");
  } else {
    console.log("But it's odd.");
  }
} else {
  console.log("Not greater than 50");
}
//Output: But it's odd.

const marks = 85;
let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 80) {
  grade = "B";
} else if (marks >= 70) {
  grade = "C";
} else {
  grade = "D";
}

console.log("Your grade is:", grade);
//Output: Your grade is: B

const num41 = 7;

if (num41 < 10) {
  console.log("Less than 10");
  if (num41 % 2 === 0) {
    console.log("And it's even.");
  } else {
    console.log("But it's odd.");
  }
} else {
  console.log("Not less than 10");
}
//Output
//Less than 10
//But it's odd.

const hour11 = 13;
let greeting11;

if (hour11 < 12) {
  greeting11 = "Good morning!";
} else {
  if (hour11 < 18) {
    greeting11 = "Good afternoon!";
  } else {
    greeting11 = "Good evening!";
  }
}

console.log(greeting11);
//Output: Good afternoon!


const a1 = 15;
const b1 = 20;

if (a1 > 10) {
  if (b1 > 15) {
    console.log("Both conditions met!");
  } else {
    console.log("Second condition not met!");
  }
} else {
  console.log("First condition not met!");
}
//Output: Both conditions met!



const num51 = 8;

if (num51 < 5) {
  console.log("Less than 5");
} else if (num51 >= 5 && num51 < 10) {
  console.log("Between 5 and 9");
} else {
  console.log("10 or greater");
}
//Output: Between 5 and 9

const num61 = 45;

if (num61 < 30) {
  console.log("Less than 30");
} else if (num61 >= 30 && num61 < 60) {
  console.log("Between 30 and 59");
  if (num61 % 2 === 0) {
    console.log("Even number.");
  } else {
    console.log("Odd number.");
  }
} else {
  console.log("60 or greater");
}
//Output
//Between 30 and 59
//Odd number.

const day21 = "Monday";
const hour21 = 13;

if (day21 === "Saturday" || day21 === "Sunday") {
  if (hour21 < 12) {
    console.log("It's weekend morning.");
  } else if (hour21 >= 12 && hour21 < 18) {
    console.log("It's weekend afternoon.");
  } else {
    console.log("It's weekend evening.");
  }
} else {
  console.log("It's a weekday.");
}

//Output: It's a weekday.


const age71 = 25;
const isStudent = true;

if (age71 < 18) {
  console.log("You are a minor.");
} else if (age71 >= 18 && age71 <= 25) {
  console.log("You are a young adult.");
  if (isStudent) {
    console.log("And you are a student.");
  } else {
    console.log("You are not a student.");
  }
} else {
  console.log("You are an adult.");
}
//Output: You are a young adult.
//And you are a student.

const x1 = 20;
const y1 = 30;
result =""

if (x1 > 10) {
  if (y1 > 20) {
    result = "Both x and y are greater than their respective thresholds.";
  } else if (y1 === 20) {
    result = "x is greater than its threshold, but y is exactly at its threshold.";
  } else {
    result = "x is greater than its threshold, but y is less than its threshold.";
  }
} else {
  result = "x is less than or equal to its threshold.";
}

console.log(result);
//Output: Both x and y are greater than their respective thresholds.

const temperature = 28;
const isRaining = true;

if (temperature >= 30) {
  console.log("It's a hot day!");
} else if (temperature >= 20 && temperature < 30) {
  console.log("It's a pleasant day.");
  if (isRaining) {
    console.log("Don't forget your umbrella!");
  } else {
    console.log("Enjoy your day!");
  }
} else {
  console.log("It's a bit chilly!");
}
//Output: It's a pleasant day.
//Don't forget your umbrella!


const num81 = 7;

if (num81 > 10) {
  console.log("Greater than 10");
} else if (num81 >= 5 && num81 <= 10) {
  console.log("Between 5 and 10");
  if (num81 % 2 === 0) {
    console.log("Even number.");
  } else {
    console.log("Odd number.");
  }
} else {
  console.log("Less than 5");
}
//Output:Between 5 and 10
//Odd number.

const num91 = 15;
const num92 = 25;

if (num91 >= 10 && num92 >= 20) {
  console.log("Both conditions met!");
  if (num91 % 2 === 0 || num92 % 2 === 0) {
    console.log("At least one of the numbers is even.");
  } else {
    console.log("Both numbers are odd.");
  }
} else {
  console.log("At least one condition not met!");
}

//Output: Both conditions met!
//Both numbers are odd.



const marks21 = 80;
 grade="";

if (marks21 >= 90) {
  grade = "A";
} else if (marks21 >= 80 && marks21 < 90) {
  grade = "B";
  if (marks21 >= 85) {
    console.log("You are close to an A grade!");
  }
} else if (marks21 >= 70 && marks21 < 80) {
  grade = "C";
} else {
  grade = "D";
}

console.log("Your grade is:", grade);
//Output: Your grade is: B

const age111 = 40;
const hasLicense1 = true;
const hasExperience = true;

if (age111 >= 18) {
  if (hasLicense1) {
    console.log("You can drive!");
    if (hasExperience) {
      console.log("You are an experienced driver.");
    } else {
      console.log("Please drive carefully, you are a new driver.");
    }
  } else {
    console.log("You need a license to drive.");
  }
} else {
  console.log("You are too young to drive.");
}
//output: You can drive!
//You are an experienced driver.


const num12 = 45;

if (num12 < 50) {
  console.log("Less than 50");
  if (num12 % 5 === 0) {
    console.log("Divisible by 5");
  } else {
    console.log("Not divisible by 5");
  }
} else if (num12 >= 50 && num12 < 100) {
  console.log("Between 50 and 99");
  if (num12 % 10 === 0) {
    console.log("Divisible by 10");
  } else {
    console.log("Not divisible by 10");
  }
} else {
  console.log("100 or greater");
}
//Output: Less than 50
//Divisible by 5

