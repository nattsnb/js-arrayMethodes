const redApple = {
    color: 'red',
    weightInGrams: 150
}

const propertyName = findObjectProperty(redApple, function(propertyValue) {
    return propertyValue === 'red';
})
console.log(propertyName); // color

const john = {
    name: 'John',
    bestFriend: {
        name: 'Adam'
    }
}

const adamPropertyName = findObjectProperty(john, function(propertyValue) {
    return propertyValue && propertyValue.name === 'Adam';
})
console.log(adamPropertyName); // bestFriend


function findObjectProperty(object, func) {
    const properties = (Object.keys(object))
    const values = (Object.values(object))
    const valueIndex = (values.findIndex(func))
    return properties[valueIndex]

}