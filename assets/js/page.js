/**
 * Ahmed Eldaw Mohamed - Individual Pages
 * JavaScript for page interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateNavbar);
    updateNavbar();
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.timeline-content, .content-card, .info-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Mobile navigation
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
    
    // Profile image hover effect
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    }
    
    // Copy email to clipboard
    const emailElements = document.querySelectorAll('[href^="mailto:"], .info-list span');
    emailElements.forEach(element => {
        if (element.textContent && element.textContent.includes('@')) {
            element.style.cursor = 'pointer';
            element.title = 'Click to copy email';
            
            element.addEventListener('click', function(e) {
                e.preventDefault();
                const email = this.textContent.trim();
                navigator.clipboard.writeText(email).then(() => {
                    // Show temporary feedback
                    const originalText = this.textContent;
                    this.textContent = 'Email copied!';
                    this.style.color = 'var(--primary-color)';
                    
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.color = '';
                    }, 2000);
                });
            });
        }
    });
    
    // Social media link tracking
    const socialLinks = document.querySelectorAll('.footer-social a, .social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const href = this.getAttribute('href');
            let platform = 'Unknown';
            
            if (href.includes('github.com')) platform = 'GitHub';
            else if (href.includes('linkedin.com')) platform = 'LinkedIn';
            else if (href.includes('twitter.com')) platform = 'Twitter';
            else if (href.includes('researchgate.net')) platform = 'ResearchGate';
            
            console.log(`${platform} link clicked from ${window.location.pathname}`);
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
    
    // Page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        });
    }
    
    // Error handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
    });
    
    // Back to top functionality (if needed)
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: var(--shadow-md);
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTopButton);
    
    function toggleBackToTop() {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    }
    
    window.addEventListener('scroll', toggleBackToTop);
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 