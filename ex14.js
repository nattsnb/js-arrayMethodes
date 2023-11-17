const getRandomDigit = getRandomCharacterGenerator('0123456789');

console.log(getRandomDigit); // returns a random string that contains a single digit

const getRandomABC = getRandomCharacterGenerator('abcABC');
console.log(getRandomABC); // returns a random string that is a, A, b, B, c, or C


function getRandomCharacterGenerator(inputString) {
    const inputArray = inputString.split("")
    const inputLength = inputArray.length
    const randomCharIndex = getRandomIntegerGenerator(inputLength)
    return inputArray[randomCharIndex]

}


function getRandomIntegerGenerator(max){
    min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min))
}