//### Function #1: Array Slice

function slice() {
    const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
    var modifiedFood = foods.slice(1, 4);
    return modifiedFood;
}

console.log(slice())
//### Function #2: Array Splice

function splice() {
    const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
    foods.splice(2, 0, "noodles", "icecreams")
    return foods
}
console.log(splice());
//### Function #3: Filter
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

const av = numberArray.filter(function (a) {
    if (a % 2 == 0) {
        return true;
    }
})

console.log(av)
//### Function #4: Reject

function isPrime() {
    let prime = numberArray.filter(function (num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    });
    console.log(prime);
}
isPrime();

function nonPrime() {
    let prime = numberArray.filter(function (num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return true;
        return num > 1;
    });
    console.log(prime);
}
nonPrime();
//### Function #5: Lambda
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let isEven = (numberArray) => {
    let even = numberArray.filter(function (a) {
        if (a % 2 == 0) {
            return a;
        }
    })
    console.log(even)
}
//### Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
let squares = myArray.map((num) => num * num);

console.log(squares);
//### Function #7: Reduce
const numbers = [2, 3, 5, 10];
const mul = numbers.reduce(function (result, item) {
    return result * item;
}, 1);
console.log(mul);