const marks = [1,1,1,1,1,1,1,2]

let sum = 0

marks.forEach(function(mark){
    sum = sum + mark
})

const average = Math.floor(sum/marks.length)

console.log(average)
