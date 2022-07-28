'use-strict';
//variables 
let opentBtn =document.getElementById('open-btn');
let modalContainer=document.querySelector('.modal-container');
let closeBtn=document.getElementById('close-btn');



//EVENT listeners
opentBtn.addEventListener('click',()=>{
     modalContainer.style.display='block';
    
     // alert();
});

closeBtn.addEventListener('click',()=>{
        modalContainer.style.display ='none';
});
window.addEventListener('click',()=>{
    if(event.target===modalContainer){
        modalContainer.style.display ='none';

    }
});
// console.log(opentBtn);