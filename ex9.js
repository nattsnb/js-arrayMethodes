console.log(isStringInArray(['Orange', 'Apple'], 'Apple')); // true
console.log(isStringInArray(['Onion', 'Cabbage'], 'Potato')); // false

function isStringInArray(array, search){
    return array.find(function(word){
        return word === search
    })
}