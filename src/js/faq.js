document.addEventListener('DOMContentLoaded', function() {  
    const faqSection = document.querySelector('.faq');  
    const accordionItems = faqSection.querySelectorAll('.accordion-item');  

    accordionItems.forEach(item => {  
        const header = item.querySelector('.accordion-header');  
        header.addEventListener('click', () => {  
            const content = item.querySelector('.accordion-content');  
            const isOpen = content.style.display === 'block';  

            // Close all contents within the FAQ section  
            faqSection.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');  

            // Open the clicked content  
            if (!isOpen) {  
                content.style.display = 'block';  
            }  
        });  
    });  
});  