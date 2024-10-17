window.onload = function(){

}
var start = 0;
var negative = false;
var text_length = 0;
var answer = '';
/* function clickStyleChange(id){
    document.getElementById(id).style.backgroundColor = '#999';
    setInterval(function(){
        document.getElementById(id).style.backgroundColor = '#c5c4c4';
    }, 100);
} */
function type(id){
    if(id == '0'){
       document.getElementById('screen').innerHTML = '_';
        start = 0;
    } else if(id == '18'){
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.toString().slice(0, document.getElementById('screen').innerHTML.toString().length - 1);
    } else if(id == '19'){
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.replace('÷', '/');
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.replace('×', '*');
        /* const array = document.getElementById('screen').innerHTML.matchAll()*/
        answer = eval(document.getElementById('screen').innerHTML);
        document.getElementById('screen').innerHTML = answer;
        
        /* text_length = 0;
        document.getElementById('screen').innerHTML = '';
        while(text_length != answer.toString().length){
            setInterval(function(){
                document.getElementById('screen').innerHTML = answer.toString().slice(0, text_length);
                console.log(text_length)
                text_length++;
                console.log(text_length)
            },100)
        } */

    }
    else {
    if(start == 0){
        document.getElementById('screen').innerHTML = document.getElementById(id).innerHTML.toString();
        start = 1;
    } else {
        document.getElementById('screen').innerHTML = (document.getElementById('screen').innerHTML.toString() + document.getElementById(id).innerHTML.toString());
    }
    }

}
window.onkeyup = function(e){
    if(e.keyCode == '49'){

    }
}
let keysPressed = {};

document.addEventListener('keydown', (event) => {
    keysPressed[event.code] = true;
    console.log(`Key down: ${event.code}`);
    if (keysPressed['ShiftLeft'] && keysPressed['KeyC']) {
        console.log('AC');
        type(0)
    }
    else if (keysPressed['ShiftLeft'] && keysPressed['Digit9']) {
        console.log('(');
        type(1)
    }
    else if (keysPressed['ShiftLeft'] && keysPressed['Digit0']) {
        console.log(')');
        type(2)
    }
    else if (keysPressed['ShiftLeft'] && keysPressed['Digit8']) {
        console.log('×');
        type(7)
    }
    else if (keysPressed['ShiftLeft'] && keysPressed['Equal']) {
        console.log('+');
        type(15)
    }
    else if (keysPressed['Slash']) {
        console.log('÷');
        type(3)
    }
    else if (keysPressed['Digit7']) {
        console.log('7');
        type(4)
    }
    else if (keysPressed['Digit8']) {
        console.log('8');
        type(5)
    }
    else if (keysPressed['Digit9']) {
        console.log('9');
        type(6)
    }
    else if (keysPressed['Digit4']) {
        console.log('4');
        type(8)
    }
    else if (keysPressed['Digit5']) {
        console.log('5');
        type(9)
    }
    else if (keysPressed['Digit6']) {
        console.log('6');
        type(10)
    }
    else if (keysPressed['Minus']) {
        console.log('-');
        type(11)
    }
    else if (keysPressed['Digit1']) {
        console.log('1');
        type(12)
    }
    else if (keysPressed['Digit2']) {
        console.log('2');
        type(13)
    }
    else if (keysPressed['Digit3']) {
        console.log('3');
        type(14)
    }
    else if (keysPressed['Digit0']) {
        console.log('0');
        type(16)
    }
    else if (keysPressed['Period']) {
        console.log('.');
        type(17)
    }
    else if (keysPressed['Equal'] || keysPressed['Enter']) {
        console.log('=');
        type(19)
    }
    else if (keysPressed['Backspace']) {
        console.log('backspace');
        type(18)
    }
});

document.addEventListener('keyup', (event) => {
    console.log(`Key up: ${event.code}`);
    delete keysPressed[event.code];
});
