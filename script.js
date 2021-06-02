'use strict';
const colors = ['red', 'black', 'green', 'blue'];
console.log(colors.length);
document.querySelector('.btn-color').addEventListener('click', function () {
    let random = Math.floor(Math.random()*colors.length);
    console.log(random);
    let bGC = document.querySelector('body').style.backgroundColor;
    let text = document.querySelector('.color-name').textContent;
    let tC = document.querySelector('.color-name').style.color;
     for(var i = 0;i < colors.length;i++){
      if(i === random){
        if(colors[i] === 'red'){
          document.querySelector('body').style.backgroundColor = 'red';
          document.querySelector('.color-name').textContent = 'red';
          document.querySelector('.color-name').style.color = 'red';
          document.querySelector('h1').style.backgroundColor = 'black';
          document.querySelector('h1').style.color = 'white';
        }
        if(colors[i] === 'black'){
          document.querySelector('body').style.backgroundColor = 'black';
          document.querySelector('.color-name').textContent = 'black';
          document.querySelector('.color-name').style.color = 'black';
          document.querySelector('h1').style.backgroundColor = 'white';
          document.querySelector('h1').style.color = 'black';
        }
        if(colors[i] === 'green'){
          document.querySelector('body').style.backgroundColor = 'green';
          document.querySelector('.color-name').textContent = 'green';
          document.querySelector('.color-name').style.color = 'green';
          document.querySelector('h1').style.backgroundColor = 'black';
          document.querySelector('h1').style.color = 'white';
        }
        if(colors[i] === 'blue'){
          document.querySelector('body').style.backgroundColor = 'blue';
          document.querySelector('.color-name').textContent = 'blue';
          document.querySelector('.color-name').style.color = 'blue';
          document.querySelector('h1').style.backgroundColor = 'black';
          document.querySelector('h1').style.color = 'white';
        }
      }
    }
})
