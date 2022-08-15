var start = document.getElementById('start');
var op0 = document.getElementById('op0')
var fade = document.getElementById('fade')
var color = document.getElementById('color')

window.onload = function(){
    setTimeout(function(){
        start.classList.remove('op0');
        op0.classList.add('op0');
        color.classList.add('color')
    },3500)
    setTimeout(function(){
        fade.classList.add('fade')
    },4000)
}