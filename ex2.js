// The nested function returns NaN if any of the arguments are missing
console.log(getDeltaFunction({ a: 1, c: 3 })); // NaN
console.log(getDeltaFunction({ a: 1, c: 3 })({ b: 15 })); // 213

// delta = b*b - 4*a*c
const getDelta = getDeltaFunction({ a: 1, b: 2, c: 3 });
console.log(getDelta()); // -8
console.log(getDelta({ b: 12 })); // 132
console.log(getDelta({ a: 4, b: 10 })); // 52
console.log(getDelta({ a: 4, b: 0 })); // -48


function getDeltaFunction({a,b,c}){
    const a2 = a ?? NaN
    const b2 = b ?? NaN
    const c2 = c ?? NaN
    function countDelta({a = 1, b = 2, c = 3} = {}) {
        return b * b - 4 * a * c
    }
    return countDelta
}