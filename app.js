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
.typeString('<span style="color:#ff6610;"> React</span>!')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color:#1313C6;"> JavaScript</span>!')
.start()
//-------------- Animation Contact-----------------

const input_fields= document.querySelectorAll('input');




for(let i = 0; i < input_fields.length; i++) {

        let field = input_fields[i];
          field.addEventListener('input', (e) => {
        if(e.target.value !== ''){
            e.target.parentNode.classList.add('animation')
        } else if (e.target.value == ''){
            e.target.parentNode.classList.remove('animation')
        }
    })

}



// Animation green socle + scrollMagique
const timeLine1 =gsap.timeline({paused:true});
const title=document.querySelector('h1')
const btn=document.querySelectorAll('.btn-acc')
const btnMedia =document.querySelectorAll('.media')
const btnCircleAcc= document.querySelector('.btn-circle') 



timeLine1
.to(nav, {left: '0px',ease: Power3.easeOut, duration:0.6})
.from(title ,{y:-50 , opacity:0, ease:Power3.easeOut, duration:0.4})
.staggerFrom(btn,1, {opacity:0}, 0.2,'-=0.30')
.staggerFrom(btnMedia, 1, {opacity:0} , 0.2 , '-=0.75')
.from(btnCircleAcc,{y:-50, opacity:0, ease:Power3.easeOut, duration:0.4}, '-=1s')
window.addEventListener('load', ()=> {
    timeLine1.play();
})
// animation scrollMagique
const containerAbout=document.querySelector('.about')
const titleAbout=document.querySelector('.title-about')
const controller=new ScrollMagic.Controller()
const  pressLeft = document.querySelector('.press-left')
const listLeft = document.querySelectorAll('.item-list')

const timeLine2 = new TimelineMax(); 

timeLine2
.from(titleAbout,  {y:-200, opacity:0, duration:0.6})
.from(pressLeft, {y:-20, opacity:0, duration: 0.6}, '-=0.5')
.staggerFrom(listLeft, 1, {opacity:0},0.2, '-=0.5')

const scene = new ScrollMagic.Scene({
    triggerElement: containerAbout,
    triggerHook: 0.5, 
    reverse: false
})  
.setTween(timeLine2)
.addTo(controller)


// -----------------Animation portfolio section ------------------

const portfolioContainer = document.querySelector('.portfolio');
const titlePortfolio = document.querySelector('.title-port');
const itemPortfolio = document.querySelectorAll('.wave');

const tlPortfolio = new TimelineMax();

// Animation du titre
tlPortfolio
.from(titlePortfolio, {y: -50, opacity: 0, duration: 0.5})


// // Animation des projets en cascade

itemPortfolio.forEach((wave, index) => {
  tlPortfolio.from(wave, {
    opacity: 0, 
    y: 30,
    ease: Power3.easeOut,
    duration: 0.8
  }, index * 0.2);  // 
});

const scenePortfolio = new ScrollMagic.Scene({
  triggerElement: portfolioContainer,
  triggerHook: 0.6,
  reverse: false
})
.setTween(tlPortfolio)
// .addIndicators({name:'wave'}) // utile pour débug
.addTo(controller);



// -------------------animation skills--------------------------
const constainerSkill=document.querySelector('.rang')
const titleSkill=document.querySelector('.title-skill')
const labelSkill = document.querySelectorAll('.label-skill')
const numberSkill =document.querySelectorAll('.number-skill')
const skillBar =document.querySelectorAll('.skill-bar')
const greyBar = document.querySelectorAll('.grey-bar')
 
const tlSkills= new TimelineMax();
tlSkills
.from(titleSkill,{y:-50, opacity:0, duration:0.5})
.staggerFrom(labelSkill,1,{opacity:0},0.1, '-=0.5')
.staggerFrom(numberSkill,1,{opacity:0} ,0.1 , '-=1')
.staggerFrom(skillBar,1,{opacity:0}, 0.1 , '-=1')
.staggerFrom(greyBar,1,{opacity:0},0.1, '-=1')

const sceneSkills= new ScrollMagic.Scene({

    triggerElement:constainerSkill,
    reverse :false
})
.setTween(tlSkills)
.addTo(controller)  