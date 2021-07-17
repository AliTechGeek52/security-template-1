let openMenu = document.getElementsByClassName('fa-bars')[0]
let closeMenu = document.getElementsByClassName('fa-times')[0]
let navlinks = document.getElementsByClassName('nav-links')[0]

openMenu.addEventListener('click', ()=>{
    navlinks.style.left = ("0")
});

closeMenu.addEventListener('click', ()=>{
    navlinks.style.left = ("100%")
});



const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearoptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};
const appearonscroll = new IntersectionObserver(function(enteries, appearonscroll) {
    enteries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearonscroll.unobserve(entry.target);
        }
    });
}, appearoptions);

faders.forEach(fader => {
    appearonscroll.observe(fader);
});



sliders.forEach(slider => {
    appearonscroll.observe(slider);
});





