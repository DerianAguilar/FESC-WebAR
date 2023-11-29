document.addEventListener("DOMContentLoaded", function() {
    const askButtomSoft = document.querySelector('#ask-button-sof');
    askButtomSoft.addEventListener("click", event => {
      window.location.href = "https://www.fesc.edu.co/micrositios/software/"
    });
    const askButtomGraf = document.querySelector('#ask-button-graf');
    askButtomGraf.addEventListener("click", event => {
      window.location.href = "https://www.fesc.edu.co/micrositios/grafico/"
    });
    const askButtomTur = document.querySelector('#ask-button-tur');
    askButtomTur.addEventListener("click", event => {
      window.location.href = "https://www.fesc.edu.co/micrositios/turismo/"
    });
  })
