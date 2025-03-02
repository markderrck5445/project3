function button(buttonId){
    const button = document.getElementById(buttonId);
    button.innerText = 'BOOKED';
    button.classList.add('booked');
    button.disabled = true;
    
    alert('your booking is underway.Wait for your confirmation.');
}

document.getElementById('button').addEventListener('click',function(){
    button('button');
});
document.getElementById('button1').addEventListener('click',function(){
    button('button1');
});
document.getElementById('button2').addEventListener('click',function(){
    button('button2');
});
document.getElementById('button3').addEventListener('click',function(){
    button('button3');
});
document.getElementById('button4').addEventListener('click',function(){
    button('button4');
});
document.getElementById('button5').addEventListener('click',function(){
    button('button5');
});
document.getElementById('button6').addEventListener('click',function(){
    button('button6');
});
document.getElementById('button7').addEventListener('click',function(){
    button('button7');
});
document.getElementById('button8').addEventListener('click',function(){
    button('button8');
});

