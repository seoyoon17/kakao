$(document).ready(function () {
    $(function () {
        var $gnb = $('.gnb');
        var $sub_menu_product = $('.sub_menu_product');
        var $sub_menu_partner = $('.sub_menu_partner');
        var $menu_link_product = $('.menu_link_product');
        var $menu_link_partner = $('.menu_link_partner');
        var $menu_link_product_siblings = $('.menu_link_product').parent().siblings();
        var $menu_link_partner_siblings = $('.menu_link_partner').parent().siblings();
        $menu_link_product.mouseenter(function () {
            $sub_menu_product.css('display', 'block');
        })
        $sub_menu_product.mouseleave(function () {
            $sub_menu_product.css('display', 'none');
        })
        $menu_link_partner.mouseenter(function () {
            $sub_menu_partner.css('display', 'block');
        })
        $sub_menu_partner.mouseleave(function () {
            $sub_menu_partner.css('display', 'none');
        })
        $menu_link_product_siblings.mouseenter(function () {
            $sub_menu_product.css('display', 'none');
        })
        $menu_link_partner_siblings.mouseenter(function () {
            $sub_menu_partner.css('display', 'none');
        })
        $gnb.mouseenter(function () {
            $('.gnb').css('background-color', '#fff');
            $('.gnb_menu_item a').css('color', '#666');
            $('.gnb_link_items').css('color', 'black');
            $('.gnb_logo a').css('color', 'black');
            $('.gnb_link_items a').css('color', 'black');
            $('.gnb_link_items span').css('color', 'black');
            $('.gnb_link_icon').css('filter', 'opacity(.5) drop-shadow(0 0 0 black)');
        })
        $gnb.mouseleave(function () {
            $('.gnb').css('background', 'none');
            $('.gnb_menu_item a, .gnb_link_items, .gnb_logo a, .gnb_link_items a, .gnb_link_items span').css('color', '#fff');
            $('.gnb_link_icon').css('filter', 'none');
        })
    });
    $(window).scroll(function () {
        var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
        if (height > 60) {
            $('.gnb').css('background-color', '#fff');
            $('.gnb_menu_item a').css('color', '#666');
            $('.gnb_link_items').css('color', 'black');
            $('.gnb_logo a').css('color', 'black');
            $('.gnb_link_items a').css('color', 'black');
            $('.gnb_link_items span').css('color', 'black');
            $('.gnb_link_icon').css('filter', 'opacity(.5) drop-shadow(0 0 0 black)');
        } else if (height <= 60) {
            $('.gnb').css('background', 'none');
            $('.gnb_menu_item a, .gnb_link_items, .gnb_logo a, .gnb_link_items a, .gnb_link_items span').css('color', '#fff');
            $('.gnb_link_icon').css('filter', 'none');
        }
    })
});


var currentSlide = 0;
var nextSlide;

function slideChange(target) {
    console.log(target);

    for (i = 0; i < 2; i++) {
        if (i != target) {
            document.getElementsByClassName('hero_slide')[i].style = "display:none";

            document.getElementsByClassName('hero_slide_button')[i].style = "background-color: rgba(255,255,255,0.4);";

        }
    }

    document.getElementsByClassName('hero_slide')[target].style = "display:block; animation:fade_in 0.5s forwards;";

    document.getElementsByClassName('hero_slide_button')[target].style = "background-color: grey;";

    currentSlide = target;
}

// JS (max-width 1440px) 
// footer m Btn Cross

let openstate = false;
// const footerBtn = document.querySelector('.line_m_btn');
const footerBtn = document.querySelector('.info_related_m_tit');
function footerCross() {

    if (openstate) {
        document.querySelector('.info_related_m').style = "height: 40px;"
        document.querySelector('.info_related_m_tit').style = "border-bottom: none"
        document.querySelector('.line1').style = " opacity: 1; transform: rotate(-90deg) translate(-1px, 0.1px); background-color: rgb(186, 186, 186);"
        document.querySelector('.line2').style = " background-color: rgb(186, 186, 186);"
        openstate = false;

    }
    else {
        document.querySelector('.info_related_m').style = "height: 200px;"
        document.querySelector('.info_related_m_tit').style = "border-bottom: 1px solid rgb(250,250,250);"
        document.querySelector('.line1').style = "transform: rotate(0deg); background-color: rgb(51,51,51);"
        document.querySelector('.line2').style = "background-color: rgb(51,51,51);"
        openstate = true;
    }

}
footerBtn.addEventListener('click', () => {
    footerCross();
});


// JS (max-width 767px) 
// gnboverM()

let navbarm = document.querySelector('.gnb_m_wrap');
const navbarHeightm = navbarm.getBoundingClientRect().height;

navbarm.addEventListener('mouseover', () => {

    function gnbOverM() {

        document.querySelector('.gnb_m').style = "background-color:white; box-shadow: 0 0 6px 0 rgba(75,75,75,0.8); transition: all 0.6s ease;";
        document.querySelector('.gnb_m_logo').src = "img/logo_black.png";

        for (let i = 0; i < 3; i++) {
            document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(16, 16, 16); ";
        }
    }

    if (window.scrollY <= navbarHeightm) {
        gnbOverM();
    }
});

// gnb_m_out
navbarm.addEventListener('mouseout', onMouseOut)

function onMouseOut() {

    function gnbOutM() {
        document.querySelector('.gnb_m').style = "background-color:transparent; transition: all 0.6s ease;";
        document.querySelector('.gnb_m_logo').src = "img/logo_white.png";

        for (let i = 0; i < 3; i++) {
            document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(252, 252, 252);";
        }

    }
    if (window.scrollY <= navbarHeightm) {
        gnbOutM();
    }

}


// 스크롤 움직일 때 gnb over & out
document.addEventListener('scroll', () => {

    // Scroll Down
    function gnbScrollDownM() {
        document.querySelector('.gnb_m').style = "background-color:white; box-shadow: 0 0 6px 0 rgba(75,75,75,0.8); transition: all 0.6s ease;";
        document.querySelector('.gnb_m_logo').src = "img/logo_black.png";

        for (let i = 0; i < 3; i++) {
            document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(16, 16, 16); ";
        }
    }

    // Scroll Up
    function gnbScrollUpM() {
        document.querySelector('.gnb_m').style = "background-color:transparent; transition: all 0.6s ease;";
        document.querySelector('.gnb_m_logo').src = "img/logo_white.png";

        for (let i = 0; i < 3; i++) {
            document.querySelectorAll('.gnb_m_burger div')[i].style = "background-color: rgb(252, 252, 252);";
        }
    }

    // 조건문 실행
    if (window.scrollY > navbarHeight) {
        gnbScrollDownM();
    }

    else {
        gnbScrollUpM();
    }
});


// gnb_m_hidden


const navSlide = () => {
    const burger = document.querySelector('.gnb_m_burger');
    const nav = document.querySelector('.gnb_m');
    const navLinks = document.querySelectorAll('.gnb_m_items li');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {

        //burger toggle
        nav.classList.toggle('nav-active')
        if (nav.className === 'gnb_m nav-active') {
            navbarm.removeEventListener('mouseout', onMouseOut)
            body.style.overflow = "hidden";
        }
        else {
            navbarm.addEventListener('mouseout', onMouseOut)
            body.style.overflow = "auto";
        }
        console.log(nav.className === 'gnb_m nav-active')
        //links animation
        navLinks.forEach((link, index) => {
            console.log(index);
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.4s ease-in forwards ${index / 4 + 0.8
                    }s`;
            }
        });

        //burger cross
        burger.classList.toggle('toggle');
    });
};

navSlide();



//  back to top btn
const button = document.querySelector('.btn_click');
const scrollInto = document.querySelector('.btn_click');
button.addEventListener('click', () => {
    navbarm.scrollIntoView({ behavior: 'smooth', block: 'center' });
});


// footer circleShow()
function circleShow(target) {

    document.querySelectorAll('.circle')[target].style = "visibility: visible;";

}

// footer circleNone()
function circleNone(target) {

    document.querySelectorAll('.circle')[target].style = "visibility: hidden;";

}
