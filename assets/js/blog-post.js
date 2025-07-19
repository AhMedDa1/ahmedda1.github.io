// Blog Post Functionality for Ahmed Eldaw's Website
// Handles social sharing and reading progress

document.addEventListener('DOMContentLoaded', function() {
    initializeReadingProgress();
    initializeSocialSharing();
});

// Reading Progress Bar
function initializeReadingProgress() {
    const progressBar = document.querySelector('.reading-progress');
    if (!progressBar) return;

    const article = document.querySelector('article');
    if (!article) return;

    window.addEventListener('scroll', function() {
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;

        const articleBottom = articleTop + articleHeight - windowHeight;
        const progress = Math.max(0, Math.min(100, ((scrollTop - articleTop) / (articleBottom - articleTop)) * 100));

        progressBar.style.width = progress + '%';
    });
}

// Social Sharing Functions
function initializeSocialSharing() {
    // Pre-populate sharing content
    window.articleTitle = document.title;
    window.articleUrl = window.location.href;
}

function shareOnTwitter() {
    const text = `Just read: ${window.articleTitle}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.articleUrl)}`;
    window.open(url, '_blank', 'width=550,height=420');
}

function shareOnLinkedIn() {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.articleUrl)}`;
    window.open(url, '_blank', 'width=550,height=420');
}

function copyLink() {
    navigator.clipboard.writeText(window.articleUrl).then(function() {
        // Show temporary feedback
        const btn = event.target.closest('.share-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        
        setTimeout(function() {
            btn.innerHTML = originalText;
        }, 2000);
    }).catch(function() {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = window.articleUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const btn = event.target.closest('.share-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        
        setTimeout(function() {
            btn.innerHTML = originalText;
        }, 2000);
    });
} 