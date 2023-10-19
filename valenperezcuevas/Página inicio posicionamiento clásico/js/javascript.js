const checkbox = document.getElementById('toggleTheme');
const body = document.body;  // Obtener el elemento body directamente

checkbox.addEventListener('change', function () {
  if (body.classList.contains('tema-claro')) {
    body.classList.replace('tema-claro', 'tema-oscuro');
  } else {
    body.classList.replace('tema-oscuro', 'tema-claro');
  }
});
