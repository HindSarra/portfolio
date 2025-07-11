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
            
       
// Animation writee  paragraphe acc//
const txtAnim= document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})

typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Moi c\'est Hind Sarra')
.pauseFor(300)
.typeString('<strong>, Developpeuse Full-Stack</strong>!')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color:#27ae60;"> CSS</span>!')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color:#EA39ff;"> PHP</span>!')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color:midnightblue;"> React</span>!')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color:#ff6610;"> JavaScript</span>!')
.start()
// Animation Contact

const input_fields= document.querySelectorAll('input')

for(let i=0 ;i< input_fields.length; i++);

        let field=input_fields[i]
        field.addEventListener('input' ,(e)=> {
            if(e.target.value !== ''){
                e.target.parentNode.classList.add('animation')
            }else if (e.target.value ==''){
                    e.target.parentNode.classList.remove('animation')
            }
        })