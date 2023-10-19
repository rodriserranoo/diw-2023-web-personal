const modoOscuroButton =document.getElementById('modo-oscuro');
const body = document.getElementsByTagName('body');

modoOscuroButton.addEventListener('click', () => {
  if(body.classList.contains('colores-claros')){
    body.classList.remove('colores-claros');
    body.classList.add('colores-oscuros');
  }else{
    body.classList.remove('colores-oscuros');
    body.classList.add('colores-claros');
  }
});