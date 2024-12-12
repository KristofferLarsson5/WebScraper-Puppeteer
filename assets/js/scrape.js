import puppeteer from "puppeteer";
import fs from 'fs';

const scrape = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Array to store book data from all pages
    const allBooks = [];
    let currentPage = 1; // Initialize the current page number

    // Define the maximum number of pages to scrape
    const maxPages = 2;

    while (currentPage <= maxPages) {
        const url = `https://books.toscrape.com/catalogue/page-${currentPage}.html`;
        await page.goto(url);

        // Extract book data from the page
        const books = await page.evaluate(() => {
            // Select all book elements on the page
            const bookElements = document.querySelectorAll('.product_pod');

            // Map each book element to an object with its details
            return Array.from(bookElements).map((book) => {
                const title = book.querySelector('h3 a').getAttribute('title'); // Book title
                const price = book.querySelector('.price_color').textContent; // Book price
                const stock = book.querySelector('.instock.availability') 
                    ? 'In Stock' // Check stock status
                    : 'Out of Stock';
                const rating = book.querySelector('.star-rating').className.split(' ')[1]; // Extract rating
                const link = book.querySelector('h3 a').getAttribute('href'); // Link to the book's page

                // Return the book details as an object
                return {
                    title,
                    price,
                    stock,
                    rating,
                    link,
                };
            });
        });

        // Add the extracted books to the main array
        allBooks.push(...books);
        console.log(`Books on page ${currentPage}: `, books);
        // Move to the next page
        currentPage++;
    }

    // Save the extracted book data to a JSON file
    fs.writeFileSync('books.json', JSON.stringify(allBooks, null, 2));
    console.log('Data saved to books.json');

    await browser.close();
};
scrape();
