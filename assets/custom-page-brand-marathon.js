(function () {
  // Function to run when the page is ready

  function getActualDate() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return Number(`${y}${m}${day}`);
  }

  function initBrandMarathon() {
    const cardList = document.querySelector('.promotions-list-section').querySelectorAll('.item-card');
    const actualDate = getActualDate();
    cardList.forEach((card) => {
      const expirationDate = card.getAttribute('expiration-card');
      const dayInCard = Number(expirationDate);
      if (expirationDate) {
        if (actualDate > dayInCard) {
          card.classList.add('expired');
        } else if (actualDate === dayInCard) {
          card.classList.add('active-today');
        }
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

  // Shopify-specific: re-run on section loads (useful in theme editor / AJAX page changes)
  document.addEventListener('shopify:section:load', initBrandMarathon);
})();