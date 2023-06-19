document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.getElementById('count');
    const disminuyeButton = document.getElementById('disminuye');
    const aumentaButton = document.getElementById('aumenta');
    const segundosInput = document.getElementById('segundos');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    let count = 0;
    let temporizador;
  
    disminuyeButton.addEventListener('click', () => {
      count--;
      countElement.textContent = count;
    });
  
    aumentaButton.addEventListener('click', () => {
      count++;
      countElement.textContent = count;
    });
  
    startButton.addEventListener('click', () => {
      const segundos = parseInt(segundosInput.value);
      if (segundos > 0) {
        startTimer(segundos);
      }
    });
  
    stopButton.addEventListener('click', () => {
      clearInterval(temporizador);
      alert('Temporizador detenido.');
    });
  
    function startTimer(segundos) {
      clearInterval(temporizador);
      temporizador = setInterval(() => {
        segundos--;
        if (segundos >= 0) {
          segundosInput.value = segundos;
        } else {
          clearInterval(temporizador);
          alert('¡Tiempo finalizado!');
        }
      }, 1000);
    }
  });
  