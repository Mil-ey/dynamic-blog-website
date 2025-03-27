//INDEX.HTML//

function loadBlogPosts() {
 const blogContainer = document.getElementById('blog-posts');
    blogContainer.innerHTML = '';
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button onclick="deletePost(${post.id})">Delete</button>
        `;
        blogContainer.appendChild(postElement);
    });
    // you hvaent added this to the git//


}

//NEW-POST.HTML//
Document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const date = new Date().toLocaleDateString();
    const newPost = { title, content, date };
    
    if (title === '' || content === '') {
        alert('Please fill in all fields');
        return;
    }

    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.push(newPost);

    localStorage.setItem('blogPosts', JSON.stringify(posts));
    window.location.href = 'index.html';
});

// you havent added this to the git//

