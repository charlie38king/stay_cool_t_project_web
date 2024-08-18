/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')

      if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show_menu')
        })        
      }
      if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove("show_menu")
        })        
    }

/*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll('.nav_link')

    function linkAction(){
       const navMenu = document.getElementById ('nav_menu')
       navMenu.classList.remove('show_menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction) )        

/*=============== CHANGE BACKGROUND HEADER ===============*/
    function scrollHeader() { 
        const header = document.getElementById('header')
        if(this.scrollY >= 50) header.classList.add('scroll_header');
        else header.classList.remove('scroll_header')
    }
    window.addEventListener('scroll', scrollHeader)

/*=============== HOME SWIPER ===============*/

        // Obtiene todas las imágenes
        const imagenes = document.querySelectorAll('.imgs_top');
        let indiceActual = 0;

        // Función para cambiar la imagen
        function cambiarImagen() {
            // Oculta la imagen actual
            imagenes[indiceActual].style.display = 'none';

            // Calcula el índice de la siguiente imagen
            indiceActual = (indiceActual + 1) % imagenes.length;

            // Muestra la siguiente imagen
            imagenes[indiceActual].style.display = 'block';
        }

        // Cambia la imagen cada 3 segundos (3000 ms)
        setInterval(cambiarImagen, 2000);

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular_container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    speed: 3000,
    autoplay: {
        delay: 2000,
      },
      mousewheel: {
        invert: true,
      },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
      },
  });

let testimonialSwiper = new Swiper('.testimonial_swiper', {  
    spaceBetween: 30,
    loop: 'true',
}
)

/*=============== MIXITUP FILTER FEATURED ===============*/
    let mixerFeatured = mixitup('.featured_content_tint', {
        selectors: {
            target: '.featured_card'
        },
        animation: {
            duration: 300
        }
    });

/* Link active featured */ 
const linkFeatured = document.querySelectorAll('.featured_item')

function activeFeatured () { 
    linkFeatured.forEach(l=> l.classList.remove('active_featured'))
    this.classList.add('active_featured')
} 
linkFeatured.forEach (l=> l.addEventListener('click', activeFeatured))

/* Link active percentages */ 
const linkPercentage = document.querySelectorAll('.percentage')

function activePercentage () { 
    linkPercentage.forEach(l=> l.classList.remove('active-percentage'))
    this.classList.add('active-percentage')
} 
linkPercentage.forEach (l=> l.addEventListener('click', activePercentage))

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp () {
    const scrollUp = document.ElementById ('scroll_up')
    if(this.scrollY >= 350) scrollUp.classList.add('show_scroll');
    else scrollUp.classList.remove('sshow_scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        }else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})





