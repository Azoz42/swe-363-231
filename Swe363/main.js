class Article {
    constructor(title, content, date) {
        this.title = title;
        this.content = content;
        this.date = date;
    }

    createCard = () => {
        const card = document.createElement('div');
        card.classList.add('card');

        const titleElement = document.createElement('h3');
        titleElement.textContent = this.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = this.content;

        const dateElement = document.createElement('p');
        dateElement.classList.add('date');
        dateElement.textContent = this.date;

        card.appendChild(titleElement);
        card.appendChild(contentElement);
        card.appendChild(dateElement);

        return card;
    }
}

const articlesData = [
    { title: 'Web Development Basics', content: 'Learn the fundamentals of web development.', date: 'October 5, 2023' },
    { title: 'CSS Styling Tips', content: 'Explore tips for effective CSS styling.', date: 'October 10, 2023' },
];

const blogPostsContainer = document.getElementById('blog-posts-container');

const articles = articlesData.map(articleData => new Article(articleData.title, articleData.content, articleData.date));

articles.forEach(article => {
    const articleCard = article.createCard();
    blogPostsContainer.appendChild(articleCard);
});

const totalContentCharacters = articles.reduce((total, article) => total + article.content.length, 0);

const longArticles = articles.filter(article => article.content.length > 50);

console.log('Total content characters:', totalContentCharacters);
console.log('Long articles:', longArticles);
