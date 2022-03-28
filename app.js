const burger=document.querySelector('.menu-btn__burger');
const menu=document.querySelector('.menu-nav');
let click=0;
burger.addEventListener('click',()=>{  
   menu.classList.toggle("show")
    
})