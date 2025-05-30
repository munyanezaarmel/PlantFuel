
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

const ctaButton = document.getElementById('main-cta');
const cartButton = document.querySelector('.cart-btn');

ctaButton.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.backgroundColor = '#5a7a1a';
});

ctaButton.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.backgroundColor = '#6b8e23';
});

cartButton.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.backgroundColor = '#5a7a1a';
});

cartButton.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.backgroundColor = '#6b8e23';
});

function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const arrow = button.querySelector('.faq-arrow');
    

    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(function(item) {
        if (item !== faqItem) {
            const otherAnswer = item.querySelector('.faq-answer');
            const otherArrow = item.querySelector('.faq-arrow');
            otherAnswer.classList.remove('open');
            otherArrow.style.transform = 'rotate(0deg)';
        }
    });
    
    if (answer.classList.contains('open')) {
        answer.classList.remove('open');
        arrow.style.transform = 'rotate(0deg)';
    } else {
        answer.classList.add('open');
        arrow.style.transform = 'rotate(180deg)';
    }
}

const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 300) {
        console.log('User has scrolled down');
    }
});

function toggleMobileMenu() {
    const menuLinks = document.querySelector('.menu-links');
    if (menuLinks.style.display === 'none') {
        menuLinks.style.display = 'flex';
    } else {
        menuLinks.style.display = 'none';
    }
}

const logo = document.querySelector('.brand-name');
logo.addEventListener('click', function() {
    this.style.color = this.style.color === 'green' ? '#6b8e23' : 'green';
});