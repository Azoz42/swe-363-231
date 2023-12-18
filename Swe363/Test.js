// Example list of blog posts
const blogPosts = [
    { title: 'Post 1', content: 'This is the content of post 1.' },
    { title: 'Post 2', content: 'This is the content of post 2.' },
    { title: 'Post 3', content: 'This is the content of post 3.' }
  ];
  
  // Function to add blog posts dynamically
function addBlogPostsToPage(posts) {
    const container = document.getElementById('blog-posts-container');
  
    posts.forEach(post => {
      // Create HTML elements
      const postDiv = document.createElement('div');
      const titleElem = document.createElement('h2');
      const contentElem = document.createElement('p');
  
      // Set content for the elements
      titleElem.textContent = post.title;
      contentElem.textContent = post.content;
  
      // Append elements to the container
      postDiv.appendChild(titleElem);
      postDiv.appendChild(contentElem);
      container.appendChild(postDiv);
    });
  }
  
  // Call the function with the list of blog posts
  addBlogPostsToPage(blogPosts);
  