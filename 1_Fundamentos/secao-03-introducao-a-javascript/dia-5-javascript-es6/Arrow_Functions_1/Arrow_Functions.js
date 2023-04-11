// Evolução

function printName() {
    const myName = 'Lucas';
    return myName;
};
  
console.log(printName());

//

const printName = function () {
    const myName = 'Lucas';
    return myName;
};
  
console.log(printName());

//

const printName = () => {
    const myName = 'Lucas';
    return myName;
};
  
console.log(printName());

//

const printName = () => 'Lucas';
console.log(printName());

//

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));