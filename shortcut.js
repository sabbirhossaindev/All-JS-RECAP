/* 
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string
4. '0', 'false'
5. {}
6. []
Falsy:
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
*/
let x = [5, 6];
console.log(x);
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// optional 
// check falsy
const y = null;
if (!y){ //! negative
    console.log('value is falsy')
}
const z = {class: 9};
// check true
if(!!x){
    console.log('value is truthy');
}

// full from;
const money = 80;
let food;
if (money > 100) {
    food = 'briani';
}
else {
    food = 'cha biscuit'
}

// ternary ba shortcut.
// ? holo if r : else
let food1 = money > 100 ? 'briani' : 'cha biscuit';


// number to string conversion  ('')
const num1 = 52;
console.log(num1); // number 52 
const numStr = num1 + '';
console.log(numStr); // string 52

// string to number conversion  (+)
const input = '500';
const inputNum = +input;
console.log(inputNum);

// ternary apply in function
const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser(); //display user
isActive && showUser(); // && first condition true hola 2nd condition a hoba || ulta hoba && ar