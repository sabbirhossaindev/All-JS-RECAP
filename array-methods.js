const products = [
    { name: 'laptop', price: 32000, brand: 'dell', color: 'black' },
    { name: 'phone', price: 32000, brand: 'tecno', color: 'gray' },
    { name: 'keyBoard', price: 2000, brand: 'hp', color: 'red' },
    { name: 'maous', price: 1000, brand: 'dell', color: 'grenn' },
    { name: 'sungaless', price: 300, brand: 'cc', color: 'black' },
];
// 1.map:
// map hilo kno akta array thaka array of object thaka kno akta property niya r akta array banata chay thola map use hoba.
const brands = products.map(product => product.brand);
// console.log(brands);

// 2.forEach:
// forEach hoilo all ginista loop thro (use) korbo but return korbo na
products.forEach(product => {
    console.log(product)
    console.log(product.color)
});

// 3. filter:
// filter ja jinis gula mas korba ba ja sorta o dibo  ta array hisaba return korba;
const cheap = products.filter(product => product.price <= 3000);
// console.log(cheap);

// filter = includes :
// includes hoilo mial chak kora
const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);

// 4. find
// find hilo ja ta mas korba just first ta object hisaba return korba
const specal = products.find(p => p.name.includes('n'));
console.log(specal)