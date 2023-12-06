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