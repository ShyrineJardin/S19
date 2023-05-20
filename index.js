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
              calculateAverage();
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
  rl.question("Enter your grade (1): ", (answer1) => {
    const num1 = parseFloat(answer1);
    rl.question("Enter your grade (2): ", (answer2) => {
      const num2 = parseFloat(answer2);
      rl.question("Enter your grade (3): ", (answer3) => {
        const num3 = parseFloat(answer3);
        rl.question("Enter your grade (4): ", (answer4) => {
          const num4 = parseFloat(answer4);

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
        });
      });
    });
  });
}

login();
