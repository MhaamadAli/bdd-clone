
window.onscroll = function() {changeLogo()};

function changeLogo() {
    let header = document.getElementById("main-header");
    let logo = document.getElementById("header-logo");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled");
        logo.src = "./assets/nav bar/logo-footer.png";
    } else {
        header.classList.remove("scrolled");
        logo.src = "./assets/nav bar/logo-light.png";
    }
}