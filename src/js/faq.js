// Імпорт бібліотеки Accordion  
import Accordion from 'accordion-js';  
import 'accordion-js/dist/accordion.min.css';  

// Ініціалізація акордеона  
const accordionFaq = new Accordion('.accordion-faq', {  
  duration: 300,  
  showMultiple: false, // Установіть в false, якщо хочете, щоб був відкритим тільки один елемент за раз  
});  

// Вираження для відкриття першого елементу (необов'язково)  
accordionFaq.open(0);  