/*digital marketing animation*/

const digitalMark = document.querySelector('.digital-mark');
const digitalMarkBox = document.querySelector('.digital-mark-box');
const windowHeight = window.innerHeight;
const revealPoint = 150;
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
