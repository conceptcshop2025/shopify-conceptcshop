function showCustomKlaviyoPopup(productTitle, releaseDate, releaseProductImage, releaseProductUrl) {

  const popup = document.querySelector('.custom-popup');
  popup.classList.add('show');

  popup.addEventListener('click', function () {
    popup.classList.remove('show');
  });

  const klaviyoFormContainer = popup.querySelector('.klaviyo-form-UbWDNZ');
  klaviyoFormContainer.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  var _learnq = window._learnq || [];

  _learnq.push(['identify', {
    'product_title': productTitle,
    'release_date': releaseDate,
    'release_produt_image': releaseProductImage,
    'release_product_url': releaseProductUrl
  }]);
}
