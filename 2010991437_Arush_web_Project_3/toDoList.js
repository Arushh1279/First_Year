const inputE = document.querySelector('input');
const buttonE = document.querySelector('button');
const ulE = document.querySelector('ul');

buttonE.addEventListener('click', function(){
    const divE = document.createElement('div');
    divE.setAttribute('class', 'div1');

    const cross = document.createElement('button');
    cross.setAttribute('class', 'btn4');
    cross.setAttribute('id', 'btn1');
    cross.innerText = 'X';

    const up = document.createElement('button');
    up.setAttribute('class', 'btn4');
    up.setAttribute('id', 'btn2');
    // const txt1 = document.createTextNode('\u2191');
    up.innerText = "↑";

    const down = document.createElement('button');
    down.setAttribute('class', 'btn4');
    down.setAttribute('id', 'btn3');
    // const txt2 = document.createTextNode('\u2193');
    down.innerText = "↓";

    const text = document.createElement('h1');
    text.setAttribute('id', 'text');
    text.innerText = inputE.value;
    divE.appendChild(cross);
    divE.appendChild(up);
    divE.appendChild(down);
    if(inputE.value!=""){
        divE.appendChild(text);
        ulE.appendChild(divE);
        inputE.value = "";
    }       
    else{
        alert("You need to write something!");
    }

    

    cross.addEventListener('click', function(){
        divE.remove();
    })

    up.addEventListener('click', function(){
        
        if(divE.previousElementSibling){
            divE.parentNode.insertBefore(divE, divE.previousElementSibling);
        }
    })

    down.addEventListener('click', function(){
        
        if(divE.nextElementSibling){
            divE.parentNode.insertBefore(divE.nextElementSibling, divE);
        }
    })

})