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

    checkCookie();

    if (acceptBtn) {
        acceptBtn.addEventListener("click", addCookie);
    }
});


//GALLERY 
const filterItem = document.querySelector('.items-links');
const filterImages = document.querySelectorAll('.project-img');
const filterInfo = document.querySelector('.info');

if (filterItem && filterImages.length > 0) {
    window.addEventListener('load', () => {
        const initialFilter = 'rodzinny-deluxe';

        filterImages.forEach((image) => {
            let filterImageName = image.getAttribute('data-name');
            if (filterImageName === initialFilter) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });

        if (filterInfo) {
            filterInfo.querySelectorAll('[data-name]').forEach((infoItem) => {
                let infoName = infoItem.getAttribute('data-name');
                if (infoName === initialFilter) {
                    infoItem.style.display = "block";
                } else {
                    infoItem.style.display = "none";
                }
            });
        }

        filterItem.querySelector(`[data-name="${initialFilter}"]`).classList.add('menu-active');

        filterItem.addEventListener('click', (selectedItem) => {
            if (selectedItem.target.classList.contains('item-link')) {
                document.querySelector('.menu-active').classList.remove('menu-active');
                selectedItem.target.classList.add('menu-active');
                let filterName = selectedItem.target.getAttribute('data-name');

                filterImages.forEach((image) => {
                    let filterImageName = image.getAttribute('data-name');
                    if (filterImageName === filterName || filterName === 'all') {
                        image.style.display = "block";
                    } else {
                        image.style.display = "none";
                    }
                });

                if (filterInfo) {
                    filterInfo.querySelectorAll('[data-name]').forEach((infoItem) => {
                        let infoName = infoItem.getAttribute('data-name');
                        if (infoName === filterName || filterName === 'all') {
                            infoItem.style.display = "block";
                        } else {
                            infoItem.style.display = "none";
                        }
                    });
                }
            }
        });
    });
}
