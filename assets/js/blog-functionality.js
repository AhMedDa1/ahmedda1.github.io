// Blog Functionality for Ahmed Eldaw's Website
// Handles load more functionality

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeLoadMore();
});

// Load More Posts Functionality
let postsLoaded = 4; // Initial posts shown
const postsPerLoad = 4; // Posts to load each time

function initializeLoadMore() {
    const hiddenPosts = document.getElementById('hiddenBlogPosts');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const noMorePosts = document.getElementById('noMorePosts');
    
    // Check if there are hidden posts
    if (!hiddenPosts || hiddenPosts.children.length === 0) {
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        if (noMorePosts) noMorePosts.style.display = 'block';
    }
}

function loadMorePosts() {
    const hiddenPosts = document.getElementById('hiddenBlogPosts');
    const blogContainer = document.getElementById('blogPostsContainer');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const noMorePosts = document.getElementById('noMorePosts');
    
    if (!hiddenPosts || !blogContainer) return;
    
    const hiddenPostsArray = Array.from(hiddenPosts.children);
    const postsToShow = hiddenPostsArray.splice(0, postsPerLoad);
    
    // Move posts from hidden to visible container
    postsToShow.forEach(post => {
        // Add animation class
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        blogContainer.appendChild(post);
        
        // Animate in
        setTimeout(() => {
            post.style.transition = 'all 0.5s ease';
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }, 100);
    });
    
    postsLoaded += postsToShow.length;
    
    // Check if there are more posts to load
    if (hiddenPosts.children.length === 0) {
        loadMoreBtn.style.display = 'none';
        noMorePosts.style.display = 'block';
    }
} 