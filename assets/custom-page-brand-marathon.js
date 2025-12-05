const daysFormat = ['20251204', '20251205', '20251206', '20251207', '20251208', '20251209', '20251210', '20251211', '20251212', '20251213', '20251214', '20251215', '20251216'];

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
  const m = (d.getMonth() + 1);
  const day = d.getDate();
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