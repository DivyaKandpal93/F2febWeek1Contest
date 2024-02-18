/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map(student => {
    console.log(student.name);
  });

}

function PrintStudentsbyForEach() {
  
  arr.forEach(student => {
    console.log(student.name);
  })

}

function addData() {
  
  const newData = { id: 4, name: "johny", age: "21", marks: 65 };
  arr.push(newData);
  console.log(arr);
}

function removeFailedStudent() {
 const passStudent= arr.filter(student => {
    return student.marks>=50;
  })
  console.log(passStudent);
}

function concatenateArray() {
  newData = [1,2,3];
  const newArr = arr.concat(newData);
  console.log(newArr); 
}
