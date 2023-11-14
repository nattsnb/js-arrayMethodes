const vegetables = ['Carrot', 'Cabbage', 'Onion'];

function printVegetable(vegetable, index) {
    console.log(vegetable, index);
}

forEach(vegetables, printVegetable);
// Carrot 0
// Cabbage 1
// Onion 2

const fruits = ['Apple', 'Orange', 'Watermelon'];
forEach(fruits,function(fruit, index) {
        console.log(fruit, index);
    }
)
// Apple 0
// Orange 1
// Watermelon 2

function forEach(arr=[], func){
    for (let i = 0; i< arr.length; ++i){
        func(arr[i])
    }
}