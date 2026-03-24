import { students } from "./students.js";


const result = students.map(e => {
  const avg = e.marks.reduce((a, b) => a + b, 0) / e.marks.length;
  return { name: e.name, average: avg };
});

console.log("Averages:", result);


const passed = result.filter(e => e.average >= 50);
console.log("Passed:", passed);


console.log("First Student:", students[0].name);

//question2:


function getStudentData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data received successfully ");
      } else {
        reject("Error fetching data ");
      }
    }, 1000);
  });
}

getStudentData(true)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));