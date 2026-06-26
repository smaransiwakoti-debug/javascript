// Student Grade Calculator// 

const studentName = "Smaran";
const math = 85;
const science = 92;
const english = 78;

const totalMarks = math + science + english;
const average = totalMarks / 3;

let grade;

if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log("===== Student Report =====");
console.log(`Name: ${studentName}`);
console.log(`Math: ${math}`);
console.log(`Science: ${science}`);
console.log(`English: ${english}`);
console.log(`Total Marks: ${totalMarks}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Grade: ${grade}`);

if (grade === "A" || grade === "B") {
  console.log("Excellent work! Keep it up.");
} else if (grade === "C") {
  console.log("Good effort. You can improve further.");
} else {
  console.log("Study harder and try again.");
}