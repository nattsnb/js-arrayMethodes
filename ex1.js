const divideByFive = getDivideByFunction(5);
console.log(divideByFive(10)); // 2
console.log(divideByFive(50)); // 10

const divideByTwo = getDivideByFunction(2);
console.log(divideByTwo(8)); // 4
console.log(divideByTwo(50)); // 25

function getDivideByFunction(divisor) {
    const number = 0
    function divideByDivisor(number){
        return number/divisor
    }
    return divideByDivisor
}

