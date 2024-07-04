function redirectBasedOnSize() {
    if (window.innerWidth <= 768) {
        localStorage.setItem('deviceType', 'mobile');
        window.location.href = "./mobile/index.html";
    } else {
        localStorage.setItem('deviceType', 'pc');
        window.location.href = "../index.html";
    }
}

window.onload = function() {
    let deviceType = localStorage.getItem('deviceType');
    if (!deviceType) {
        redirectBasedOnSize();
    } else {
        if (deviceType === 'mobile' && window.innerWidth > 768) {
            redirectBasedOnSize();
        } else if (deviceType === 'pc' && window.innerWidth <= 768) {
            redirectBasedOnSize();
        }
    }
}