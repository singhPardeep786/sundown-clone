// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        speed: 1200,
        loop: true
      });
    // var swiper = new Swiper(".mySwiper", {
    //     centeredSlides: true,
    //     slidesPerView: "left",
    //     spaceBetween: 10,     
    //     speed: 1200,
    // });

    // var swiper = new Swiper(".mySwiper", {
    //     slidesPerView: "auto",
    //     spaceBetween: 50
    //   });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

function tabs(){
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
          const tabContainer = button.parentElement.parentElement;
          const contentId = button.dataset.tab + '-content';
  
          // Remove active class from other buttons
          tabContainer.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
          });
  
          // Add active class to the clicked button
          button.classList.add('active');
  
          // Hide other content
          tabContainer.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
          });
  
          // Show corresponding content
          document.getElementById(contentId).classList.add('active');
  
          // Make p tag also active when tabs are active
          document.getElementById(contentId).querySelectorAll('p').forEach(p => {
            p.classList.add('active');
          });
  
          // Change the background image
          const imageSection = document.querySelector('.image-section');
          switch (contentId) {
            case 'tab1-content':
              imageSection.innerHTML = `<img src="./images/page4-1.webp" alt="Image for Tab 1" id="tab-image">`;
              break;
            case 'tab2-content':
              imageSection.innerHTML = `<img src="./images/page4-2.webp" alt="Image for Tab 2" id="tab-image">`;
              break;
            case 'tab3-content':
              imageSection.innerHTML = `<img src="./images/page4-3.webp" alt="Image for Tab 3" id="tab-image">`;
              break;
          }
        });
      });
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()
tabs()