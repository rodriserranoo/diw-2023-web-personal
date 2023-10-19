let currentSlide = 0;

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    let slides = document.querySelector('.slider').children;

    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }

    // Mueve el slider a la posición correcta
    let transformValue = -100 * currentSlide + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + transformValue + ')';
}



let currentSlide2 = 0;

function changeSlide2(n) {
    showSlide2(currentSlide2 += n);
}

function showSlide2(n) {
    let slides2 = document.querySelector('.slider2').children;

    if (n >= slides2.length) {
        currentSlide2 = 0;
    } else if (n < 0) {
        currentSlide2 = slides2.length - 1;
    } else {
        currentSlide2 = n;
    }

    // Mueve el slider a la posición correcta
    let transformValue2 = -100 * currentSlide2 + '%';
    document.querySelector('.slider2').style.transform = 'translateX(' + transformValue2 + ')';
}

