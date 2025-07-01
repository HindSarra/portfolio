const btnMenu=document.querySelector('.circle-btn-menu')
const nav=document.querySelector('.nav-left');
const allItemNav=document.querySelector('.nav-menu-item');
const line =document.querySelector('.cont-line');



// toggle class = make on/of //
btnMenu.addEventListener('click', ()=>{
    line.classList.toggle('active') 
})