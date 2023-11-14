const sheep = [undefined,null,"sheep",false,true,true,false,null,"sheep",undefined]

const countSheep = sheep.filter(function(value){
    return value === "sheep"
})

console.log(countSheep.length)