var random = function() {
   return document.getElementById('b').innerHTML = Math.floor(Math.random() * 100); //highest number will be 100
}

var two = function() {
    return document.getElementById('bi').innerHTML = Math.floor(Math.random() * 100) //highest number will be 100
} 
const randomOne = random();
const randomTwo = two();

function prompt () {
    var run = document.getElementById('run');
    if (randomOne > randomTwo) {
        alert('Player 1 wins');
       } else if(randomTwo > randomOne){
            alert('Player 2 wins');
       } else {
        alert('No winner ☹☹')
       }
}
window.setTimeout( function() {
     window.location.reload();
    }, 7000);

