 import Accordion from 'accordion-js';  
import 'accordion-js/dist/accordion.min.css';  

 
document.addEventListener('DOMContentLoaded', () => {  
    const accordionFaq = new Accordion('.accordion-faq', {  
        duration: 300,  
        showMultiple: false,  
    });  
 
    accordionFaq.open(0);  
});  