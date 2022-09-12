// 1. JSON => stringify, parse
const students = {
    name: 'sabbir',
    age: 20,
    sura: ['mulk, fatiya, takasur'],
}
// JSON.stringify diya JSON a convert korta pari.
const studentJSON = JSON.stringify(students); // dubule cotation diya hoy
console.log(studentJSON); //{"name":"sabbir","age":20,"sura":["mulk, fatiya, takasur"]}
console.log(students); // { name: 'sabbir', age: 20, sura: [ 'mulk, fatiya, takasur' ] }

// JSON.parse dita JSON ka  normal obj banano jay;
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


// 2. fetch
/*
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));
*/

// keys, values
const keys = Object.keys(students);
const values = Object.values(students);

// for most use
const numbers = [23, 43, 65, 76, 98];
numbers.forEach(num => console.log(num)); // return na hola forEach use hoba
numbers.map(num => num * 2); // return korta hola map hoba

// for of on array like object
// loop on an object using for in

// add of remove from an array.
const products = [
    { name: 'laptop', price: 32000, brand: 'dell', color: 'black' },
    { name: 'phone', price: 32000, brand: 'tecno', color: 'gray' },
    { name: 'keyBoard', price: 2000, brand: 'hp', color: 'red' },
    { name: 'maous', price: 1000, brand: 'dell', color: 'grenn' },
    { name: 'sungaless', price: 300, brand: 'cc', color: 'black' },
];

const newProduct = { name: 'lalu', price: 3000, color: 'orange' };
// copy old product array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without one specific item.
// removed phone mens create a new array withOut the phone.
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);