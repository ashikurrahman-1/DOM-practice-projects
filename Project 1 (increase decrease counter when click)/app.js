
let num = 0;
let showNumber = document.getElementById('showNumber');
let btns = document.getElementsByTagName('button');


const updateCounter = (val) =>{
    num += val;
    showNumber.innerHTML = num;

    if(num >= 10){
        btns[0].setAttribute('disabled','true');
    }else{
        btns[0].removeAttribute('disabled','false');
    }

//     Minus
    if(num == 0){
        btns[1].setAttribute('disabled','true');
    }else{
        btns[1].removeAttribute('disabled', 'false');
    }
}
btns[0].addEventListener('click', function(){
updateCounter(1);
})

btns[1].addEventListener('click', function(){
updateCounter(-1);
})