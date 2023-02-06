let elResult = document.querySelector('p');
let elInput = document.querySelector('input');

elInput.addEventListener('input' ,function (){
    let value = elInput.value;
    if (value % 4 ===0 || value % 400 ==0){
        if(value % 100 !== 0){
             elResult.textContent = 'kabisa yili';
            elResult.style.color = 'green'; 
        }
    }else{
        elResult.textContent = 'kabisa yili emas';
        elResult.style.color = 'red';
    }
    if(value == ''){
        elResult.textContent = " "
    }
})
