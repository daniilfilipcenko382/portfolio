const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-list');
const menu_hover = document.querySelector('.menu_hover')
const portfolioBtn = document.querySelector('.portfolio_buttons');
const portfolioImages = document.querySelectorAll('.portfolio_image');
const portfolioBtns = document.querySelectorAll('.portfolio_button');
const languageRu = document.querySelector('.ru')
const languageEu = document.querySelector('.en')
const lineLight = document.querySelectorAll('.line')

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text_1': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
    'phone': 'Phone',
    'textarea': 'Message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text_1': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
    'phone': 'Телефон',
    'textarea': 'Ваше сообщение'
  }
}


function toggleMenu() {
  hamburger.classList.toggle('open');  
  nav.classList.toggle('open'); 
  menu_hover.classList.toggle('after');
  
}




 

hamburger.addEventListener('click', toggleMenu);
menu_hover.addEventListener('click', toggleMenu);
nav.addEventListener('click',toggleMenu);









function changeImage(event) {
  const season = event.target.dataset.season;
  if (event.target.classList.contains('portfolio_button')) {
    setTimeout(() => portfolioImages.forEach((img, index) => img.src = `assets/img/${season}/${index + 1}.jpg`), 1000);
    
  }
}


 
function animate(){
  portfolioImages.forEach(img => setTimeout(() => img.classList.add('slowChanges')), 1000);
  setTimeout(() => portfolioImages.forEach(img => img.classList.remove('slowChanges')), 1500);
  
}

portfolioBtn.addEventListener('click', changeImage,); 
portfolioBtn.addEventListener('click', animate);


function changeClassActive(event) {
  for(let i=0; i < portfolioBtns.length; i++){
    if (portfolioBtns[i] != event.target.classList){
      portfolioBtns[i].classList.remove('active');
    } if (event.target.classList.contains('portfolio_button'));{ 
    event.target.classList.add('active');    
     } 
    }
   }   

 portfolioBtn.addEventListener('click', changeClassActive);

 languageEu.addEventListener('click', () =>{
  getTranslate('en'); languageEu.classList.add('active');
 })

  


 languageRu.addEventListener('click', () =>{
  if(languageEu.classList.contains('active')) {
    languageEu.classList.remove('active');
    languageRu.classList.add('active');
  } 
 })
 

 languageEu.addEventListener('click', () =>{
  if(languageRu.classList.contains('active')) {
    languageRu.classList.remove('active');
    languageEu.classList.add('active');
  }
 })

  languageRu.addEventListener('click', () =>{
    getTranslate('ru'); 
  })

  
function getTranslate(language){  
  const i18 = document.querySelectorAll ('[data-i18]');
  i18.forEach((dataset) =>  {
    dataset.placeholder = i18Obj[language][dataset.dataset.i18];
    dataset.textContent = i18Obj[language][dataset.dataset.i18];
  }); 
}


function preloadSummerImages() {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/summer/${i}.jpg`;
  }
}
preloadSummerImages();

const  lightThemeArray = ['.skills_container','.section_title_wrap','.section-title','.skill_item','.skill_item_name']

const lightThemeBut= document.querySelector('.lightTheme');

const lightThemeArr = document.querySelectorAll(['.body','.skills_container','.section_title_wrap','.section-title','.skill_item','.skill_item_name','.skill_item_text','.portfolio_container','.portfolio_button',
'.portfolio_button.active','.video_container','.price_container','.price_block_name','.price_block','.nav-list','.menu_hover','.nav-item']);




function lightThemeButton() {  
 lightThemeBut.classList.toggle('off');
}

function lightTheme(){  
  for(let i=0; i < lightThemeArr.length; i++){    
    lightThemeArr[i].classList.toggle('light-theme');    
   }
}

lightThemeBut.addEventListener('click', lightThemeButton)
lightThemeBut.addEventListener('click', lightTheme)


