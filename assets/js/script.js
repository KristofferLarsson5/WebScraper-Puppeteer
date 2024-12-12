fetch('data/books.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load books.json');
        }
        return response.json();
    })
    .then(books => {
        const bookContainer = document.getElementById('book-container');

        // Create a card for each book
        books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');

            bookCard.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Price:</strong> ${book.price}</p>
                <p><strong>Stock:</strong> ${book.stock}</p>
                <p><strong>Rating:</strong> ${book.rating}</p>
                <a href="https://books.toscrape.com/catalogue/${book.link}" target="_blank">View Book</a>
            `;

            bookContainer.appendChild(bookCard);
        });
    })
    .catch(error => {
        console.error('Error loading books:', error);
        const bookContainer = document.getElementById('book-container');
        bookContainer.innerHTML = `<p style="color: red;">Failed to load book data. Please check the console for details.</p>`;
    });
