// Simple scroll animation
import { PageFlip } from 'page-flip';

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Animations
    const fadeElements = document.querySelectorAll('.fade-in, .highlight-card, .subject-item, .bonus-card');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 2. Flipbook Initialization
    const flipbookEl = document.getElementById('flipbook');

    if (flipbookEl) {
        const pageFlip = new PageFlip(flipbookEl, {
            width: 300, // base page width
            height: 400, // base page height
            size: 'stretch',
            // set threshold values:
            minWidth: 315,
            maxWidth: 1000,
            minHeight: 420,
            maxHeight: 1350,
            maxHeight: 1350,
            maxShadowOpacity: 0.1, // Reduced shadow to look cleaner
            showCover: true,
            mobileScrollSupport: false
        });

        // Load pages
        pageFlip.loadFromHTML(document.querySelectorAll('.page'));
    }
});
