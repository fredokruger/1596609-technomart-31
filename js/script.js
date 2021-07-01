let body = document.querySelector('.page-body');
let containerPopup = document.querySelector('.popup-container'); 
let popupOpenClose= function(isClose, selectorName) {  //Функция открытия и закрытия попапов
    if (isClose) { //если попап закрыт
    let scrollPosition = window.pageYOffset; //найти текущую позицию на странице
    body.classList.add('page-overflow'); //запрет на скролл страницы
    body.setAttribute('data-body-scroll-fix', scrollPosition); //Cохранить текущее местоположение при открытом попапе для боди
    body.style.top = '-' + scrollPosition + 'px'; // добавить положение со значением прокрутки 
    selectorName.classList.add('popup-visible'); //сделать попап видимым
    containerPopup.classList.add('popup-container--visible'); //добавить затемнение
    } else { //если попап открыт
    let scrollPosition = body.getAttribute('data-body-scroll-fix'); //получить текущее положение на странице
    let openPopup =document.querySelector('.popup-visible'); //найти текущий открытый попап
    openPopup.classList.remove('popup-visible'); //скрыть попап
    containerPopup.classList.remove('popup-container--visible'); //убрать затемнение
    body.classList.remove('page-overflow'); //разрешить скролл
    body.style.top =''; //расфиксировать текущее положение боди
    window.scroll(0, scrollPosition); //скролл страницы до нужного значения
};
} 
//Попап добавления товара в корзину
let payButtons = document.querySelectorAll('.button-pay');
let orderPopup = document.querySelector('.order-popup');
for (i=0;i<payButtons.length;i++) {
let payButton = payButtons[i];
payButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOpenClose(true, orderPopup);
});
}
//Закрытие попапа
let closeButtons = document.querySelectorAll('.close-popup');
for (let i=0; i<closeButtons.length; i++) {
    let closeButton = closeButtons[i]; 
    closeButton.addEventListener('click', function () {
        popupOpenClose(false);
    });
}
document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        popupOpenClose(false);
    }
  });
//Попап обратной связи
let contactButton = document.querySelector('.contacts__button');
let contactPopup = document.querySelector('.contact-popup');
contactButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOpenClose(true, contactPopup);
});
//Попап карты
let mapButton = document.querySelector('.contacts__map-button');
let mapPopup = document.querySelector('.map-popup');
mapButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOpenClose(true, mapPopup);
});


//Переключение тоглами и стрелками на первом слайдере
let toggleSliderButtons = document.querySelectorAll('.offer-slider__control');
let offerSliderPages = document.querySelectorAll('.offer-slider__item');
let arrowSliderButtons =document.querySelectorAll('.offer-slider__arrow');
let arrowNextButton =document.querySelector('.offer-slider__arrow--next');
let arrowPrevButton =document.querySelector('.offer-slider__arrow--prev');
let currentOfferSlide=0;
let sliderClassTogle = function(current,another) {
    offerSliderPages[current].classList.toggle('offer-slider__item--visible');
    offerSliderPages[another].classList.toggle('offer-slider__item--visible');
    toggleSliderButtons[current].classList.toggle('offer-slider__control--active');
    toggleSliderButtons[another].classList.toggle('offer-slider__control--active');
}
for (let i=0; i<offerSliderPages.length; i++) {
    toggleSliderButtons[i].addEventListener('click', function () {
        sliderClassTogle(currentOfferSlide,i);
        currentOfferSlide=i; 
    } );
}
arrowNextButton.addEventListener('click', function() {
    if (currentOfferSlide<offerSliderPages.length-1) {
        sliderClassTogle(currentOfferSlide,currentOfferSlide+1);
        currentOfferSlide++;
    } else {
        sliderClassTogle(currentOfferSlide,0);
        currentOfferSlide=0;
    };
});
arrowPrevButton.addEventListener('click', function() {
    if (currentOfferSlide>0) {
        sliderClassTogle(currentOfferSlide,currentOfferSlide-1);
    currentOfferSlide--;
    } else {
        sliderClassTogle(currentOfferSlide,offerSliderPages.length-1);
        currentOfferSlide=offerSliderPages.length-1;
    };
});
   // Переключение второго слайдера
let serviceButtons = document.querySelectorAll('.services__button');
let serviceSlides = document.querySelectorAll('.service');
let currentServiceSlide=0;
for (let i=0;i<serviceButtons.length;i++) {
    serviceButtons[i].addEventListener('click', function() {
        serviceButtons[currentServiceSlide].classList.toggle('services__button--active');
        serviceSlides[currentServiceSlide].classList.toggle('service--visible');
        serviceButtons[i].classList.toggle('services__button--active');
        serviceSlides[i].classList.toggle('service--visible');
        currentServiceSlide=i;
    });
}
