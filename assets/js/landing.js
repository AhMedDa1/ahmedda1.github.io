/**
 * Ahmed Eldaw Mohamed - Landing Page
 * Simple JavaScript for interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Add click animations to buttons and links
    const clickableElements = document.querySelectorAll('.nav-link, .btn, .social-link, .interest-item');
    
    clickableElements.forEach(element => {
        element.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // CV download tracking
    const cvButton = document.querySelector('a[href*="CV"]');
    if (cvButton) {
        cvButton.addEventListener('click', function(e) {
            console.log('CV download clicked');
            // You can add analytics tracking here
        });
    }
    
    // Profile image hover effect
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        profileImg.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    }
    
    // Social media link tracking
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.classList.contains('github') ? 'GitHub' :
                           this.classList.contains('linkedin') ? 'LinkedIn' :
                           this.classList.contains('twitter') ? 'Twitter' :
                           this.classList.contains('researchgate') ? 'ResearchGate' : 'Unknown';
            console.log(`${platform} link clicked`);
        });
    });
    
    // Interest items interactive effects
    const interestItems = document.querySelectorAll('.interest-item');
    interestItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('using-keyboard');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('using-keyboard');
    });
    
    // Add focus styles for keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
        .using-keyboard *:focus {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Landing page load time: ${loadTime}ms`);
        });
    }
    
    // Error handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
    });
}); 