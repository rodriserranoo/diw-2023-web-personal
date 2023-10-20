let checkbox = document.getElementById('toggleTheme');
let body = document.getElementsByTagName('body');

checkbox.addEventListener('change', function () {
  if(body[0].classList.contains('tema-claro')){
    body[0].classList.replace('tema-claro','tema-oscuro')
  }else{
    body[0].classList.replace('tema-oscuro','tema-claro')
  }
});
