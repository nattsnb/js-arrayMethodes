// The nested function returns NaN if any of the arguments are missing
console.log(getDeltaFunction({ a: 1, c: 3 })); // NaN
console.log(getDeltaFunction({ a: 1, c: 3 })({ b: 15 })); // 213


// delta = b*b - 4*a*c
const getDelta = getDeltaFunction({ a: 1, b: 2, c: 3 });
console.log(getDelta()); // -8
console.log(getDelta({ b: 12 })); // 132
console.log(getDelta({ a: 4, b: 10 })); // 52
console.log(getDelta({ a: 4, b: 0 })); // -48



let inputObject = {a:0,b:0,c:0}

function getDeltaFunction(inputObject){
    if (inputObject !== {a:0,b:0,c:0}){
        return NaN
    } else {
        let inputObject2 = {a:0,b:0,c:0}
        function countDelta(inputObject2) {
            return b*b - 4*a*c
        }
        return countDelta
    }
}