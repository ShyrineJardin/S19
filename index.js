console.log("Hello World");

let username, password, role;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function login() {
  rl.question("Enter your username: ", (answer) => {
    username = answer;
    rl.question("Enter your password: ", (answer) => {
      password = answer;
      rl.question("Enter your role (admin, teacher, or student): ", (answer) => {
        role = answer;
        rl.close();

        if (!username || !password || !role) {
          console.log("Input should not be empty!");
        } else {
          switch (role) {
            case "admin":
              console.log("Welcome back to the class portal, admin!");
              break;
            case "teacher":
              console.log("Thank you for logging in, teacher!");
              break;
            case "student":
              console.log("Welcome to the class portal, student!");
              calculateAverage(90, 89, 93, 88);
              break;
            default:
              console.log("Role out of range.");
              break;
          }
        }
      });
    });
  });
}

function calculateAverage() {
  const num1 = parseFloat(prompt("Enter number 1:"));
  const num2 = parseFloat(prompt("Enter number 2:"));
  const num3 = parseFloat(prompt("Enter number 3:"));
  const num4 = parseFloat(prompt("Enter number 4:"));

  const average = Math.round((num1 + num2 + num3 + num4) / 4);

  console.log(`Average: ${average}`);

  if (average <= 74) {
    console.log(`Hello, student, your average is ${average}. The letter equivalent is F`);
  } else if (average >= 85 && average <= 89) {
    console.log(`Hello, student, your average is ${average}. The letter equivalent is B`);
  } else if (average >= 90 && average <= 95) {
    console.log(`Hello, student, your average is ${average}. The letter equivalent is A`);
  } else if (average > 96) {
    console.log(`Hello, student, your average is ${average}. The letter equivalent is A+`);
  }
}


login();
console.log("Hello World");

let username, password, role;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function login() {
  rl.question("Enter your username: ", (answer) => {
    username = answer;
    rl.question("Enter your password: ", (answer) => {
      password = answer;
      rl.question("Enter your role (admin, teacher, or student): ", (answer) => {
        role = answer;
        rl.close();

        if (!username || !password || !role) {
          console.log("Input should not be empty!");
        } else {
          switch (role) {
            case "admin":
              console.log("Welcome back to the class portal, admin!");
              break;
            case "teacher":
              console.log("Thank you for logging in, teacher!");
              break;
            case "student":
              console.log("Welcome to the class portal, student!");
              calculateAverage(90, 89, 93, 88);
              break;
            default:
              console.log("Role out of range.");
              break;
          }
        }
      });
    });
  });
}

function calculateAverage() {
  const num1 = parseFloat(prompt("Enter your grade(1):"));
  const num2 = parseFloat(prompt("Enter your grade(2):"));
  const num3 = parseFloat(prompt("Enter your grade(3):"));
  const num4 = parseFloat(prompt("Enter your grade(4):"));

  const average = Math.round((num1 + num2 + num3 + num4) / 4);

  console.log(`Average: ${average}`);

  if (average <= 74) {
    console.log(`Hello, student, your average is ${average}. The letter equivalent is F`);
  } else if (average >= 85 && average <= 89) {
    console.log(`Hello, student, your average is ${average}. The letter equivalent is B`);
  } else if (average >= 90 && average <= 95) {
    console.log(`Hello, student, your average is ${average}. The letter equivalent is A`);
  } else if (average > 96) {
    console.log(`Hello, student, your average is ${average}. The letter equivalent is A+`);
  }
}


login();
