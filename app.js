const btnMenu= document.querySelector('.btn-circle-menu')
const nav =document.querySelector('.nav-left');
const allItemNav=document.querySelector('.nav-menu-item');
const line=document.querySelector('.cont-line');

btnMenu.addEventListener('click', ()=>{

    line.classList.toggle('active')
    nav.classList.toggle('menu-appear')
}
)
if(window.matchMedia('(max-width:1300px)')){
    allItemNav.forEach(item => {
        item.addEventListener('click',  ()=> {
            nav.classList.toggle('menu.appear')
            line.classList.toggle('active')
        })
    });
}
