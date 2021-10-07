/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));



/// lang 

var dropdownButton = $('.dropdownButton');
var dropdownMenu = $('.dropdownMenu');

// Button click
dropdownButton.on('click', function () {
    var _this = $(this);

    dropdownButton.not(_this).removeClass('active').siblings('.dropdownMenu').slideUp(300);
    _this.toggleClass('active').siblings('.dropdownMenu').slideToggle(300);
});



 $(document).on('click touchstart', function(e) {
    var target = e.target;

    if (!$(target).is('.dropdownButton')) {
        dropdownMenu.slideUp(300);
        dropdownButton.removeClass('active');
    }
    if (!$(target).parents('.dropdownButton')) {
        dropdownMenu.slideUp(300);
        dropdownButton.removeClass('active');
    }
    if (!$(target).parents('.dropdownMenu')) {
        dropdownMenu.slideUp(300);
        dropdownButton.removeClass('active');
    }
});


const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
     if (!startTimestamp) startTimestamp = timestamp;
     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
     target.innerText = Math.floor(progress * (end - start) + start);
     if (progress < 1) {
      window.requestAnimationFrame(step);
     }
    };
    window.requestAnimationFrame(step);
   };
   //#endregion - end of - number counter animation
   
   document.addEventListener("DOMContentLoaded", () => {
    counterAnim("#student", 0, 200, 1000);
    counterAnim("#partnor", 0, 25, 1000);
    counterAnim("#uni", 0, 15, 1000);
    counterAnim("#business", 0, 70, 1000);
   });
   