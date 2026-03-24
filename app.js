import { students } from "./students.js";


const result = students.map(e => {
  const avg = e.marks.reduce((a, b) => a + b, 0) / e.marks.length;
  return { name: e.name, average: avg };
});

console.log("Averages:", result);


const passed = result.filter(e => e.average >= 50);
console.log("Passed:", passed);


console.log("First Student:", students[0].name);


