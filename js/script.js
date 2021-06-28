let backgroundPopup = document.querySelector('.popup-container'); //Подложка
//Попап добавления товара в корзину
let payButtons = document.querySelectorAll('.button-pay');
let orderPopup = document.querySelector('.order-popup');
for (i=0;i<payButtons.length;i++) {
let payButton = payButtons[i];
payButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    backgroundPopup.classList.add('popup-container--visible');
    orderPopup.classList.add('order-popup--visible');
});
}
//Закрытие попапа
let closeButtons = document.querySelectorAll('.close-popup');
for (let i=0; i<closeButtons.length; i++) {
    let closeButton = closeButtons[i]; 
    closeButton.addEventListener('click', function () {
        backgroundPopup.classList.remove('popup-container--visible');
        orderPopup.classList.remove('order-popup--visible');
        mapPopup.classList.remove('map-popup--visible');
        contactPopup.classList.remove('contact-popup--visible');
    });
}
document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        backgroundPopup.classList.remove('popup-container--visible');
        orderPopup.classList.remove('order-popup--visible');
        mapPopup.classList.remove('map-popup--visible');
        contactPopup.classList.remove('contact-popup--visible');
    }
  });
//Попап обратной связи
let contactButton = document.querySelector('.contacts__button');
let contactPopup = document.querySelector('.contact-popup');
contactButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    backgroundPopup.classList.add('popup-container--visible');
    contactPopup.classList.add('contact-popup--visible');
});
//Попап карты
let mapButton = document.querySelector('.contacts__map-button');
let mapPopup = document.querySelector('.map-popup');
mapButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    backgroundPopup.classList.add('popup-container--visible');
    mapPopup.classList.add('map-popup--visible');
});


//переключение тоглами на первом слайдере
let toggleSliderButtons = document.querySelectorAll('.offer-slider__control');
let offerSliderPages = document.querySelectorAll('.offer-slider__item');
let currentSliderNumber=0;
for (let i=0; i<toggleSliderButtons.length; i++) {
    toggleSliderButtons[i].addEventListener('click', function () {
        offerSliderPages[currentSliderNumber].classList.toggle('offer-slider__item--visible'); 
        toggleSliderButtons[currentSliderNumber].classList.toggle('offer-slider__control--active');
        offerSliderPages[i].classList.toggle('offer-slider__item--visible'); 
        toggleSliderButtons[i].classList.toggle('offer-slider__control--active');
        currentSliderNumber=i; 
    });
    
}
