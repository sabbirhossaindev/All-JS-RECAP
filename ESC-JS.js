const numbers = [23, 53, 87, 243, 22];
const student = {
    name: 'sabbir',
    age: 20,
    sura: ['mulk, fatiya, takasur'],
}
// 1. template string:

const about = `my name is ${student.name} age of ${student.age} has number${numbers[2]} also like sura${student.sura[0]}`;
console.log(about);

// 2. arrow function:
const getFiftyFive = () => 55;
const getSixtyFive = nun => nun + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator:
const newNumber = [...numbers];
console.log(newNumber)
   // create a new array from an add an element
const currentNumbers = [...numbers, 66];
console.log(currentNumbers)
numbers.push(99)
numbers.push(99)
numbers.push(66)
console.log(numbers);