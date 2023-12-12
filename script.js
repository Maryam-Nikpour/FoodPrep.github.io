const mobilebtn=document.querySelector('.mobile-btn');
const navMenu=document.querySelector('.menu');
const navItem=document.querySelectorAll('.nav-item');

mobilebtn.addEventListener('click',()=>{
  
    const isOpened=mobilebtn.getAttribute('aria-expanded');
    if(isOpened==='false'){
        mobilebtn.setAttribute('aria-expanded','true');
    }else{
        mobilebtn.setAttribute('aria-expanded', 'false');
    }
    navMenu.classList.toggle("active");
})
navItem.forEach(navItem => {
    navItem.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobilebtn.setAttribute('aria-expanded', 'false');
    });
});

// Sliding recipes

const panels=document.querySelectorAll('.panel');
panels.forEach((panel)=>{
    panel.addEventListener('click',() => {
       removeActiveClasses()
   panel.classList.add('active')
   
    })
   
   }) 
   function removeActiveClasses(){
       panels.forEach(panel=>{
           panel.classList.remove('active')
   
       })
   }

// Blurring background
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('header')

let load = 0

let int = setInterval(blurring, 25)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }