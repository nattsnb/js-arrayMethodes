function sayHello() {
    console.log('Hello!');
}

executeAfterFiveSeconds(sayHello);

function executeAfterFiveSeconds(){
    setTimeout(sayHello, 5000)
}