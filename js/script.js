//Choose a random color
const colors = ['red' , 'green' , 'black' , 'yellow', 'white']
const btn = document.querySelector('.btn');
const target = document.querySelector('body');

btn.addEventListener('click' , function(){
    const rColor = randomColor();
    target.style.backgroundColor = colors[rColor]
})
function randomColor(){
    return Math.floor(Math.random() * colors.length)
}
