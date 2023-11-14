const getRandomDigit = getRandomIntegerGenerator(0, 9);
console.log(getRandomDigit); // random number between 0 and 9

console.log(getRandomIntegerGenerator(-10, 10)); // random number between -10 and 10

function getRandomIntegerGenerator(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min))
}
