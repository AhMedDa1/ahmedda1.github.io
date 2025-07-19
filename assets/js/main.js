/**
 * Ahmed Eldaw Mohamed - AI Researcher Website
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active navigation item on scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    
    function updateActiveNavItem() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Scroll event listener
    window.addEventListener('scroll', function() {
        updateActiveNavItem();
        updateNavbar();
    });
    
    // Initial calls
    updateActiveNavItem();
    updateNavbar();
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.timeline-content, .research-card, .project-card, .publication-item, .blog-card, .contact-method');
    
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
    
    // Close mobile menu when clicking on a nav link
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
    
    // Typing effect for hero subtitle (optional enhancement)
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        const typingSpeed = 100;
        const erasingSpeed = 50;
        const delayBetweenLoop = 2000;
        
        let charIndex = 0;
        let isDeleting = false;
        
        function typeEffect() {
            if (isDeleting) {
                heroSubtitle.textContent = originalText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                heroSubtitle.textContent = originalText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === originalText.length) {
                isDeleting = true;
                setTimeout(typeEffect, delayBetweenLoop);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
            }
        }
        
        // Uncomment the line below to enable typing effect
        // typeEffect();
    }
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Social media links functionality
    const socialLinks = document.querySelectorAll('.social-link, .footer-social a');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
    });
  });

    // CV download button functionality
    const cvButton = document.querySelector('a[href*="CV"]');
    if (cvButton) {
        cvButton.addEventListener('click', function(e) {
            // You can add analytics tracking here
            console.log('CV download clicked');
        });
    }
    
    // Contact form functionality (if you add a contact form later)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            console.log('Contact form submitted');
        });
    }
    
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Print functionality
    window.addEventListener('beforeprint', function() {
        document.body.classList.add('printing');
    });
    
    window.addEventListener('afterprint', function() {
        document.body.classList.remove('printing');
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
    
    // Dark mode toggle (optional feature for future enhancement)
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
      }
    }
  });

// Additional CSS for navbar scroll effect
const additionalCSS = `
.navbar.scrolled {
    background-color: rgba(255, 255, 255, 0.98) !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-nav .nav-link.active {
    color: var(--primary-color) !important;
    font-weight: 600;
}

.animate {
    opacity: 1;
    transform: translateY(0);
}

.loaded {
    opacity: 1;
}

.using-keyboard *:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

.lazy {
    opacity: 0;
    transition: opacity 0.3s;
}

.printing .no-print {
    display: none !important;
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);