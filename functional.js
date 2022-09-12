// 1. variable:
// how to declare a variable using let and const.
const fatherName = 'bablu';
let season = 'rainy';
season = 'winter'

// 2. condition:
//the 6 condition: (>, <, >=, <=, ==, !=, ===, !==)
// multiple condition: &&, ||

if (fatherName === 'bablu' || season === 'rainy') {
    
}
else if (fatherName === 'bablu') {
    
}
else {
    
}
// 3. array:
const numbers = [23, 53, 87, 243, 22];
numbers[0] = 100; // value set
//length, index, push, pop, indexOf, includes

// 4. loop:
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
}

// 5 function:
function multiple(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiple(20, 25);
console.log(output);

// 6. object:
// the object 3 wey access....
const student = {
    name: 'sabbir',
    age: 20,
    movies: ['mulk, fatiya, takasur'],
}
const myVariable = 'age';
console.log(student.age) // direct by property
console.log(student['age']) // access by property nam,e string
console.log(student[myVariable]); // access by property name in a variable.