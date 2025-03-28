const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const authButtons = document.querySelector('.auth-buttons');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    authButtons.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target) && !authButtons.contains(e.target)) {
        navLinks.classList.remove('active');
        authButtons.classList.remove('active');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        authButtons.classList.remove('active');
    });
});

const scrollToTopBtn = document.getElementById('scroll-to-top');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = document.querySelector('header').offsetHeight;

    if (currentScroll > headerHeight) {
        if (currentScroll < lastScrollTop) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    } else {
        scrollToTopBtn.classList.remove('visible');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            item.classList.toggle('active');
        });
    });
});
