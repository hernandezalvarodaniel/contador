
let contador = 0; 

// DOM
const contadorElemento = document.getElementById('contador');
const incrementBtn = document.getElementById('incrementar');
const decrementarBtn= document.getElementById('decrementar');

incrementBtn.addEventListener('click', function() {
  contador++; 
  contadorElemento.textContent = contador; // actualizamos el texto en pantalla
  if (contador === 10) {
    contadorElemento.style.color = 'red';
  } else {
    contadorElemento.style.color = 'black';
  }
});

decrementarBtn.addEventListener('click', function() {
  contador=contador-1; 
  if (contador === 10) {
    contadorElemento.style.color = 'red';
  } else {
    contadorElemento.style.color = 'black';
  }
  contadorElemento.textContent = contador; // actualizamos el texto en pantalla
});
