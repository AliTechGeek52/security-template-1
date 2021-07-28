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
    rootMargin: "0px 0px -10px 0px",
    
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


function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
      animate(element);
  }

  function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass("ms-animated")) {
      var maxval = element.data("max");
      var html = element.html();
      element.addClass("ms-animated");
      $({
        countNum: element.html(),
      }).animate(
        {
          countNum: maxval,
        },
        {
          //duration 5 seconds
          duration: 6000,
          easing: "linear",
          step: function () {
            element.html(Math.floor(this.countNum) + html);
          },
          complete: function () {
            element.html(this.countNum + html);
          },
        }
      );
    }
  }

  //When the document is ready
  $(function () {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function () {
      //Checking if each items to animate are
      //visible in the viewport
      $("h2[data-max]").each(function () {
        inVisible($(this));
      });
    });
  });



  let map;

  function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 51.509865, lng: -0.118092 },
          zoom: 12,
          mapId: '7a84d3ccf6f7cf36'
      });
      //24.899592, 67.024611
      const image =
          "mappng2.png";
      const beachMarker = new google.maps.Marker({
          position: { lat: 24.899592, lng: 67.024611 },
          map,
          icon: image,
      });
  }
