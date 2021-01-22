const navbar = document.querySelector('.navbar');
const navIcon = document.querySelector('.navbar-brand-nav-icon');
const mobileNavIcon = document.querySelector('.navbar-brand-nav-icon--mobile');
const navLink = document.querySelectorAll('.nav-link');
const navbrand = document.querySelector('.navbar-brand');
const mobileNavBtn = document.querySelector('.sp-mobile-nav-btn--mobile');

window.onscroll = function () {
    "use strict";


    if(window.innerWidth >= 992 && window.innerWidth <= 1920) {
        if (window.pageYOffset >= 50 || document.documentElement.scrollTop >= 50 || document.body.scrollTop >= 50) {
            // navbrand.style.padding = "15px 0";
            navbar.style.background = "rgba(7, 9, 55, .95)";
            navbar.style.boxShadow = "rgba(148, 75, 235, 0.2) 0px 2px 10px 2px";
            navLink.forEach(item => {
                item.style.textShadow = "2px 2px 20px #000000";
                // item.style.paddingBottom = "10px";
                // item.style.borderColor = "transparent";

            });
            navIcon.style.width = "72px";
            navIcon.style.height = "39px";
        }
        else {
            navbar.style.background = "linear-gradient(0deg, rgba(6, 6, 18, 0) 0, rgba(6, 1, 29, 0.68) 100%)";
            navbar.style.boxShadow = "none";
            // navbrand.style.padding  = "0";
            navLink.forEach(item => {
                item.style.textShadow = "none";
                // item.style.paddingBottom = "18px";
                // item.style.borderColor = "#EE5379";
            });
            navIcon.style.width = "82px";
            navIcon.style.height = "44px";
        }
    }
    if(window.innerWidth <= 992) {
        if (window.pageYOffset >= 50 || document.documentElement.scrollTop >= 50 || document.body.scrollTop >= 50) {
            navbar.style.background = "rgba(7, 9, 55, .95)";
            mobileNavBtn.style.padding  = "8px 20px";
            mobileNavIcon.style.width = "50px";
            mobileNavIcon.style.height = "28px";
        }
        else {
            navbar.style.background = "linear-gradient(0deg, rgb(0, 0, 12, 0) 0, rgba(6, 1, 29, 0.68) 100%)";
            mobileNavBtn.style.padding  = "10px 30px";
            mobileNavIcon.style.width = "71px";
            mobileNavIcon.style.height = "38px";
        }
    }
};
