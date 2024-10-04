const mySwiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: true,
    effect: 'fade',
    speed: 1000,
    

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

window.addEventListener('DOMContentLoaded', function() {
    const fixedheader = document.querySelector('.bottomfix');
    const headermenubtn = document.querySelector('#menubtn')
    const menu = document.querySelector('.headermenu');
    const fixedHeader768px = document.querySelector('.header-768px')
    const header = document.querySelector('header');

    function togglemenu(){
        menu.classList.toggle("menushow");
    }
    function fixHeader(fixedHeader768px){
        fixedHeader768px.classList.add("headerfix");
    }
    function fixHeaderOff(fixedheader){
        fixedheader.classList.remove("headerfix");
    }
    function showmenu(){
        menu.classList.add("menushow");
    } 
    function hidemenu() {
        menu.classList.remove("menushow");
    }
    window.addEventListener("scroll", () => {
            let scrollAmount = window.scrollY;
            let windowWidthAmount = window.innerWidth;

            if(scrollAmount > 100 && windowWidthAmount>768) {
                fixHeader(fixedheader);
            }
            else if (scrollAmount > 40 && windowWidthAmount<=768){
                fixHeader(fixedHeader768px);
            }
            else {
                fixHeaderOff(fixedheader);
            }
        });

        headermenubtn.addEventListener("click", togglemenu);
        headermenubtn.addEventListener("mouseover", showmenu);
        header.addEventListener("mouseleave",  hidemenu);
})
