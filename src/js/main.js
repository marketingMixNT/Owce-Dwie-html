


//FOOTER YEAR
const footerYearSpan = document.querySelector('.footer__year')

const date = new Date()

const currentYear = date.getFullYear()


if(footerYearSpan){
    footerYearSpan.innerHTML = currentYear
}

//NAV CHANGE
const nav = document.querySelector(".desktop-nav-container");
const logo = document.querySelector('.nav--logo')

const height = 250;


window.addEventListener("scroll", () => {
    const actualPos = window.scrollY;

    if (actualPos >= height) {
        logo.style.display='block'

     

    }else{
        logo.style.display='none'

        
    }
});

//COOKIE BAR
document.addEventListener("DOMContentLoaded", () => {
    const cookieBox = document.querySelector("#cookieBox");
    const acceptBtn = document.querySelector("#acceptBtn");

    const addCookie = () => {
        document.cookie = "Privacy Policy; max-age=" + 60 * 60 * 24 * 30;
        checkCookie();
    };

    const checkCookie = () => {
        if (cookieBox && document.cookie.indexOf("Privacy Policy") !== -1) {
            cookieBox.classList.add("hidden");
        } else if (cookieBox) {
            cookieBox.classList.remove("hidden");
        }
    };

    // Uruchamiamy checkCookie od razu po załadowaniu strony
    checkCookie();

    if (acceptBtn) {
        acceptBtn.addEventListener("click", addCookie);
    }
});