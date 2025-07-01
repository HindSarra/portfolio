const btnMenu=document.querySelector('.circle-btn-menu')
const nav=document.querySelector('.nav-left');
const allItemNav=document.querySelectorAll('.nav-menu-item a');
const line =document.querySelector('.cont-line');



// toggle class = make on/of //
btnMenu.addEventListener('click', ()=>{

    line.classList.toggle('active') 
    nav.classList.toggle('menu-appear')

})

if(window.matchMedia(('max-width: 1300px'))){

     allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-appear')
            line.classList.toggle('active');
        })
    })

}
            
       
