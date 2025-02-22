const counterElement=document.getElementById('counter')
const plusbtn=document.getElementById('plusbtn')
const minusbtn=document.getElementById('minusbtn')
 let counter=0;


const update=(value)=>{
    counter = counter+value;
    counterElement.textContent = counter;
    
    if(counter>=10){
        plusbtn.setAttribute('disabled',true);
    }
    else{
        plusbtn.removeAttribute('disabled',false);
    }

// minus button
    
        if(counter <=0){
            minusbtn.setAttribute('disabled',true);
        }
        else{
            minusbtn.removeAttribute('disabled',false);
        }
    
}



plusbtn.addEventListener('click', ()=>{
    update(1);
});

minusbtn.addEventListener('click', ()=>{
    
    update(-1);
});