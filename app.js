const horas = document.querySelector('[data-timer="horas"]');
const minutos = document.querySelector('[data-timer="minutos"]');
const segundos = document.querySelector('[data-timer="segundos"]');
const bntIniciar = document.querySelector('[data-timer="iniciar"]');
const btnPausar = document.querySelector('[data-timer="pausar"]');
const btnParar = document.querySelector('[data-timer="parar"]');

let hora = 0;
let minuto = 0;
let segundo = 0;
let relogio;

function iniciarTimer() {
  relogio = setInterval(() => {
    timer();
  }, 1000);

  bntIniciar.setAttribute('disabled', '');
}

bntIniciar.addEventListener('click', iniciarTimer);

function timer() {
  segundo++;
 
  if(segundo === 60){
    segundo = 0;
    minuto++;
  } else if(minuto === 60) {
    minuto = 0;
    hora++;
  }

  if(segundo < 10) {
    segundos.innerText = '0' + segundo;
  } else {
    segundos.innerText = segundo;
  }

  if(minuto < 10) {
    minutos.innerText = '0' + minuto;
  } else {
    minutos.innerText = minuto;
  }

  if(hora < 10){
    horas.innerText = '0' + hora;
  } else {
    horas.innerText = hora;
  }
}

function pausarTimer() {
  clearInterval(relogio);
  bntIniciar.removeAttribute('disabled');
}

btnPausar.addEventListener('click', pausarTimer);

function pararTimer() {
  clearInterval(relogio);
  bntIniciar.removeAttribute('disabled');

  segundo = 0;
  minuto = 0;
  hora = 0;

  segundos.innerText = '00';
  minutos.innerText = '00';
  horas.innerText = '00'
}

btnParar.addEventListener('click', pararTimer);