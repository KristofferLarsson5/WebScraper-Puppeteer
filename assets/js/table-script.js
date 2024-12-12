fetch('data/books.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load books.json');
        }
        return response.json();
    })
    .then(books => {
        const tableBody = document.querySelector('#data-table tbody');

        // Create a table row for each book
        books.forEach(book => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.price}</td>
                <td>${book.stock}</td>
                <td>${book.rating}</td>
                <td><a href="https://books.toscrape.com/catalogue/${book.link}" target="_blank">View Book</a></td>
            `;

            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error loading books:', error);
        const tableBody = document.querySelector('#data-table tbody');
        tableBody.innerHTML = `<tr><td colspan="5" style="color: red;">Failed to load book data. Please check the console for details.</td></tr>`;
    });
