const number = document.getElementById('number');
const adv = document.getElementById('advice')

var quotes = [
    "\"It is easy to sit up and take<br>notice, what's difficult is getting<br>up and taking action.\"",
    "\"Take it day by day,<br>don't stress too much<br>about tomorrow.\"", 
    "\"The way to get started is<br>to quit talking<br>and begin doing.\"",
    "\"Live as if you were to die tomorrow, learn as if you were to<br>live forever.\"", 
    "\"That which does not kill<br>us makes<br>us stronger.\"", 
    "\"The future belongs to those who believe in the beauty<br>of their dreams.\"", 
    "\"Life has no limitations,<br>except the<br>ones you make.\""
]

function dice(){
    adv.innerHTML = quotes[Math.floor(Math.random() * 7)];

    if(adv.innerHTML === quotes[0]){
        number.innerHTML = '1';
    } 
    if(adv.innerHTML === quotes[1]){
        number.innerHTML = '2';
    }
    if(adv.innerHTML === quotes[2]){
        number.innerHTML = '3';
    }
    if(adv.innerHTML === quotes[3]){
        number.innerHTML = '4';
    }
    if(adv.innerHTML === quotes[4]){
        number.innerHTML = '5';
    }
    if(adv.innerHTML === quotes[5]){
        number.innerHTML = '6';
    }
    if(adv.innerHTML === quotes[6]){
        number.innerHTML = '7';
    }
}