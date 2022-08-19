const btnShowMobileLinks = document.querySelector('#btn-mobile')
const mobileLinks = document.querySelector('.mobile-links')

btnShowMobileLinks.addEventListener('click',(e)=>{
    e.preventDefault();
    mobileLinks.classList.toggle('show')
});