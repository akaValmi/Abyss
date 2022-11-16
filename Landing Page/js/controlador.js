window.addEventListener("resize", getTemplate);

CurrentPage = 'DesktopPage';

function getTemplate() {
    if (screen.width >= 767 && CurrentPage != 'DesktopPage') {
        return window.location.replace("index.html");
    }

    if (screen.width < 767 && CurrentPage != 'MobilePage') {
        return window.location.replace("index-mobile.html");
    }
}

getTemplate();