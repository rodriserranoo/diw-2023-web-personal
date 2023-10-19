

const checkbox = document.getElementById('toggleTheme');
const body = document.getElementsByTagName('body');

checkbox.addEventListener('change', function () {
    console.log("Dentro")
    if(body[0].classList.contains('tema-claro')){
    body[0].classList.replace('tema-claro','tema-oscuro')
  }else{
    body[0].classList.replace('tema-oscuro','tema-claro')
  }
});




///////////////////////////////////////////////////////////
let currentSlide = 0;

function changeSlide(n) {
    currentSlide += n;

    const slides = document.querySelectorAll('.slide');
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    const transformValue = -currentSlide * 100 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + transformValue + ')';
}

// Intervalo de tiempo para cambiar las imágenes automáticamente (opcional)
setInterval(function() {
    changeSlide(1);
}, 3000);


function toggleCard(cardNumber) {
    const contenido = document.getElementById(`contenido_${cardNumber}`);
    
    if (contenido.style.display === 'none' || contenido.style.display === '') {
        contenido.style.display = 'block';
    } else {
        contenido.style.display = 'none';
    }
}


