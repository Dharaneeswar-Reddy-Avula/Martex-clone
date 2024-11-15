/*nav toggle*/

const closebutton=document.querySelector(".close-btn");
const sidenav=document.querySelector('.sidenav')
const toggleIcon=document.querySelector("#toggle-icon");
toggleIcon.addEventListener('click',function(){
    sidenav.style.display="flex";       
});
closebutton.addEventListener('click',function(){
    sidenav.style.display="none";       
});
const revealPoint = 180; 
const windowHeight = window.innerHeight;
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.nav');
    if (!nav) return; 
    const triggerHeight = 80; 
    window.addEventListener("scroll", function () {
        const scrollHeight = window.pageYOffset;
        if (scrollHeight > triggerHeight) {
            nav.classList.add("nav-add");
        } else {
            nav.classList.remove("nav-add");
        }
    });
});






/*digital marketing animation*/

const digitalMark = document.querySelector('.digital-mark');
const digitalMarkBox = document.querySelector('.digital-mark-box');

window.addEventListener('scroll', function () {
    const revealTop = digitalMark.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
        digitalMarkBox.classList.add('digital-mark-box-reveal');//digital marketing      
    } 
    else {
        digitalMarkBox.classList.remove('digital-mark-box-reveal');    
    }
});

/*smartsolutions aniamtion*/
const smartsol=document.querySelector('.smartsolutions');
const smart_sol_data =document.querySelector('.smart-sol-data');
const smart_sol_img =document.querySelector('.smart-sol-image');
window.addEventListener('scroll', function () {
    const revealTop = smartsol.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
        smart_sol_data.classList.add('smart-sol-data-reveal');//smart-sol
        smart_sol_img.classList.add('smart-sol-image-reveal');//smart-sol

    } 
    else {
        smart_sol_data.classList.remove('smart-sol-data-reveal');
        smart_sol_img.classList.remove('smart-sol-image-reveal');//smart-sol
    }
});

/* multiple accounts*/
const multiple_acc=document.querySelector('.multliple-acc');
const multiple_div =document.querySelector('.multiple-div');
const productivity =document.querySelector('.productivity');

window.addEventListener('scroll', function () {
    const revealTop =multiple_acc.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
       multiple_div.classList.add('multiple-div-reveal');
       productivity.classList.add('productivity-reveal');
    } 
    else {
        multiple_div.classList.add('multiple-div-reveal');
        productivity.classList.add('productivity-reveal');
    }
});
/*counter*/
document.addEventListener('DOMContentLoaded',function(){
    const countElement = document.querySelector('.count-1');
    let count = 0;
    const limit = 89;
    const intervalDuration = 40; // milliseconds
  
    const intervalId = setInterval(function() {
        count++;
        countElement.textContent = count + "K";
  
        if (count >= limit) {
            clearInterval(intervalId);
        }
    }, intervalDuration);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const countElement = document.querySelector('.count-2');
    let count = 0;
    const limit = 76;
    const intervalDuration = 30; // milliseconds
  
    const intervalId = setInterval(function() {
        count++;
        countElement.textContent = count + "%";
  
        if (count >= limit) {
            clearInterval(intervalId);
        }
    }, intervalDuration);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const countElement = document.querySelector('.count-3');
    let count = 0;
    const limit =4;
    const intervalDuration = 1000; // milliseconds
  
    const intervalId = setInterval(function() {
        count++;
        countElement.textContent = count + ".93";
  
        if (count >= limit) {
            clearInterval(intervalId);
        }
    }, intervalDuration);
   });



/* tracking*/
const Tracking = document.querySelector('.Tracking');
const tracking_img = document.querySelector('.tracking-img');

window.addEventListener('scroll', function () {
const revealTop = Tracking.getBoundingClientRect().top;
if (revealTop < windowHeight - revealPoint) {
    tracking_img.classList.add('tracking-img-reveal');//digital marketing      
} 
else {
    tracking_img.classList.remove('tracking-img-reveal');    
}
});
/*company*/
var swiper = new Swiper(".mySwiper-company", { 
    slidesPerView: 5,
    loop: true,
    spaceBetween: 95,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1200: {
          slidesPerView:5, 
        },
        1024: {
          slidesPerView: 4, 
        },
      
        768: {
          slidesPerView: 3, 
        },
        540:{
            slidesPerView:2,
        },
        0:{
            slidesPerView:1,              
        }
      },
   
});

/*simplify*/
    const simplify=document.querySelector('.simplify');
    const simplify_cont =document.querySelector('.simplify-cont');
    const simplify_img =document.querySelector('.simplify-img');
    window.addEventListener('scroll', function () {
        const revealTop = simplify.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            simplify_cont.classList.add('simplify-cont-reveal');
            smart_sol_img.classList.add('simplify-img-reveal');

        } 
        else {
            simplify_cont.classList.remove('simplify-cont-reveal');
            smart_sol_img.classList.remove('simplify-img-reveal');
        }
    });

/*happy customers*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    autoplay: {
     delay: 3000, // Delay between slides (3 seconds)
     disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    breakpoints: {
      // When the screen width is 1200px or more
      1200: {
        slidesPerView:3, // 3 slides visible
      },
      // When the screen width is between 768px and 1199px
      1024: {
        slidesPerView: 2, // 2 slides visible
      },
      // When the screen width is 767px or less
      0: {
        slidesPerView: 1, // 1 slide visible
      },
    },
  });