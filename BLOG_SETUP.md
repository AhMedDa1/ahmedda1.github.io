# Blog Comments & Likes Persistence Setup

This blog system uses GitHub Issues API for persistent storage of comments and likes across sessions.

## 🔧 Setup Instructions

### 1. Create a GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Blog Comments Token"
4. Select these scopes:
   - `public_repo` (to create issues in your public repository)
   - `write:discussion` (for discussion features)
5. Copy the generated token

### 2. Configure the Blog System

Open your blog in a browser and run this in the console:

```javascript
// Set your GitHub token for persistence
setGitHubToken('your_github_token_here');
```

### 3. How It Works

- **Comments**: Stored as GitHub Issues with label `blog-data` and `comments`
- **Likes**: Stored as GitHub Issues with label `blog-data` and `likes`
- **Local Fallback**: If no token is set, data is stored locally only
- **Auto-sync**: Data is automatically saved to GitHub on each action

### 4. Data Structure

#### Comments Issue Format:
```
Title: Comments: transformer-architecture
Labels: blog-data, comments
Body: 
```json
[
  {
    "id": "1640995200000",
    "name": "John Doe",
    "text": "Great article!",
    "timestamp": "2025-01-01T12:00:00.000Z",
    "approved": true,
    "parentId": null,
    "likes": 5,
    "depth": 0
  }
]
```

#### Likes Issue Format:
```
Title: Likes: transformer-architecture  
Labels: blog-data, likes
Body:
```json
{
  "articleId": "transformer-architecture",
  "likes": 42,
  "timestamp": "2025-01-01T12:00:00.000Z"
}
```

## 🎯 Features

### ✅ Nested Comments
- **Unlimited replies**: Reply to any comment (up to 5 levels deep)
- **Visual hierarchy**: Different colors and indentation for each level
- **Smart threading**: Maintains conversation flow

### ✅ Comment Actions
- **Like comments**: Each comment can be liked individually  
- **Reply system**: Click "Reply" to respond to any comment
- **No email required**: Only name (optional) and comment text

### ✅ Persistent Storage
- **GitHub Issues**: Comments and likes saved as GitHub Issues
- **Local backup**: localStorage used as fallback
- **Auto-sync**: Data automatically synced on actions

### ✅ Admin Functions

```javascript
// View all comments for current article
commentAdmin.getAllComments()

// Approve a comment (if needed)
commentAdmin.approveComment('comment_id')

// Delete a comment and all its replies
commentAdmin.deleteComment('comment_id')

// Reload comments from storage
commentAdmin.loadComments()
```

## 🔒 Security Notes

- Token is stored in localStorage (client-side only)
- Issues are created in your public repository
- Comments are public by design (GitHub Issues are public)
- No sensitive data should be included in comments

## 🚀 Usage

1. **Set token once**: `setGitHubToken('your_token')`
2. **Comments work automatically**: Users can comment and reply
3. **Data persists**: Comments and likes saved across sessions
4. **Admin control**: Use console commands for moderation

## 📱 Mobile Friendly

- Responsive comment threads
- Touch-friendly like buttons  
- Optimized for all screen sizes

---

**Need help?** Check the browser console for any connection status messages. 