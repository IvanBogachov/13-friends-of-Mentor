// Імпорт бібліотеки Accordion  
import Accordion from 'accordion-js';  
import 'accordion-js/dist/accordion.min.css';  

// Ініціалізація акордеона з потрібними класами  
document.addEventListener('DOMContentLoaded', () => {  
    const accordionFaq = new Accordion('.accordion-faq', {  
        duration: 300,  
        showMultiple: false, // Встановлення 'false' відкриває лише один елемент за раз  
    });  

    // Опціонально: відкрити перший елемент відразу  
    accordionFaq.open(0);  
});  