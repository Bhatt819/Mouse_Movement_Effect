document.addEventListener('DOMContentLoaded', function() {
    const tl = gsap.timeline();
    
    tl.to('.title-word', {
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.1
    });
    
    tl.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.5');
    
    gsap.to('.image-caption', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 1.5,
        stagger: 0.1
    });
    
    const imageItems = document.querySelectorAll('.image-item');
    
    imageItems.forEach(item => {
        const imgWrapper = item.querySelector('.image-wrapper');
        const mainImage = item.querySelector('.main-image');
        
        item.addEventListener('mousemove', (e) => {
            if (!item.matches(':hover')) return;
            
            const rect = imgWrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 20;
            const moveY = (y - centerY) / 20;
            
            gsap.to(mainImage, {
                x: moveX,
                y: moveY,
                duration: 0.9,
                ease: 'power2.out'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(mainImage, {
                x: 0,
                y: 0,
                duration: 0.9,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
    
    const titleWords = document.querySelectorAll('.title-word');
    
    imageItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            gsap.to(titleWords[index], {
                color: '#ff4d4d',
                duration: 0.6,
                ease: 'power2.out'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(titleWords[index], {
                color: '#333',
                duration: 0.6,
                ease: 'power2.out'
            });
        });
    });
});