// array destructuring
/*
array destructuring hoilo jahuto number ta array asa thola output array hoba;
    1. dan pasa array hoila sorasori destructuring kora jaba.
    2. dan pasa akta variable oo thkata para sorasori destructuring kora jaba.
    3. dan pasa akta FUNCTION oo thkata para sorasori destructuring kora jaba.
*/
const numbers = [12, 32];
// old
/*
const x = numbers[0];
const y = numbers[1];
console.log(x, y);
*/
// const [x, y] = [12, 32];
const [x, y] = numbers;
console.log(x, y);

function boxif(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// console.log(boxif(12, 45));  // [ 12, 45 ]
const [first, second] = boxif(90, 34);
console.log(boxif(90, 45));



// Object destructuring:
// const { name, age } = { name: 'sabbir', age: 14 };
// const { names, ages } = { name: 'sabbir', age: 14, id: 477470, roll: 102 };

const employee = {
    id: 'vs code', 
    machine: 'DELL',
    langrage: ['html', 'css', 'bootstrap', 'js'],
    specification: {
        hight: 100,
        width: 66,
        address: olipur,
    }
}
const { machine, id } = employee;
// const { width, address } = {employee?.specification};


// object declaration shorthand
const name = 'sabbir';
const age = 20;
const objSabbir = {
    name: name,
    age: age
}
// shortcut
const obj1 = { name, age };
console.log(obj1); // {name: 'sabbir', age: 20}