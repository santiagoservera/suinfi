popupWhatsApp = () => {
    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');
    let popupSound = document.getElementById('popupSound');
  
    btnClosePopup.addEventListener("click", () => {
      popup.classList.toggle('is-active-whatsapp-popup');
    });
  
    btnOpenPopup.addEventListener("click", () => {
      popup.classList.toggle('is-active-whatsapp-popup');
      popup.style.animation = "fadeIn .6s 0.0s both";
      // Reproduce el sonido cuando se abre el popup
      popupSound.play();
    });
  
    sendBtn.addEventListener("click", () => {
      let msg = document.getElementById('whats-in').value;
      let relmsg = msg.replace(/ /g, "%20");
  
      window.open('https://wa.me/+5492644585555?text=' + relmsg, '_blank');
    });
  
    setTimeout(() => {
      popup.classList.toggle('is-active-whatsapp-popup');
    }, 3000);
  }
  
  popupWhatsApp();
  