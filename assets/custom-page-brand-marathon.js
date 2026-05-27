(function () {
  // Function to run when the page is ready
  const daysFormat = ['20260618', '20260619', '20260620', '20260621', '20260622', '20260623', '20260624', '20260625', '20260626', '20260627', '20260628', '20260629', '20260630', '20260701', '20260702', '20260703', '20260704', '20260705', '20260706', '20260707', '20260708', '20260709', '20260710', '20260711', '20260712', '20260713', '20260714', '20260715'];

  function setDates(cardList) {
    if (cardList.length > 0) {
      cardList.forEach((card, index) => {
        card.classList.add(`day-${daysFormat[index]}`);
      });
    }
    return;
  }

  function getActualDate() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return Number(`${y}${m}${day}`);
  }

  function initBrandMarathon() {
    // TODO: put your initialization code here
    const cardList = document.querySelector('.promotions-list-section').querySelectorAll('.item-card');
    setDates(cardList);
    const actualDate = getActualDate();
    cardList.forEach((card) => {
      const dayClass = Array.from(card.classList).find(cls => cls.startsWith('day-'));
      const dayInCard = Number(dayClass.replace('day-', ''));
      if (actualDate > dayInCard) {
        card.classList.add('expired');
      } else if (actualDate === dayInCard) {
        card.classList.add('active-today');
      }
    });
  }

  // If document is already ready, run immediately; otherwise wait for DOMContentLoaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // ensure async execution consistent with event handler behavior
    setTimeout(initBrandMarathon, 0);
  } else {
    document.addEventListener('DOMContentLoaded', initBrandMarathon);
  }

  // If you need to run something after all resources (images/fonts) are loaded, use window.load
  window.addEventListener('load', function () {
    // optional: run additional logic that requires full resource load
    console.log('Window fully loaded');
  });

  // Shopify-specific: re-run on section loads (useful in theme editor / AJAX page changes)
  document.addEventListener('shopify:section:load', initBrandMarathon);
})();