const marks = parseInt(prompt("Enter student's marks:"));

if (marks > 100 || marks < 0) {
  console.log("Invalid input. Please enter a number between 0 and 100.");
} else {
  let grade;
  if (marks >79){
    grade = 'A';
  } else if (marks >= 60) {
    grade = 'B';
  } else if (marks >= 59) {
    grade = 'C';
  } else if (marks >= 40) {
    grade = 'D';
  } else {
    grade = 'E';
  }
  console.log(`Student's grade is: ${grade}`);
}