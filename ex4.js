const sheep = [undefined,null,false,true,true,false,null,undefined]

const countSheep = sheep.filter(function(value){
    return value === true
})

console.log(countSheep.length)