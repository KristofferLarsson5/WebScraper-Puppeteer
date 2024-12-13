# **Web Scraping with Puppeteer: Book Showcase**

This project demonstrates the power of **web scraping** with **Puppeteer**, focusing on extracting data from [Books to Scrape](https://books.toscrape.com). The scraped data is stored in a structured **JSON format**, which can be used for data analysis, machine learning, or visualization. Additionally, a simple HTML interface showcases the extracted data in a dynamic and interactive way.

---

## **Core Focus: Web Scraping**
The heart of this project is the Puppeteer script, which:
- **Navigates** through the book catalog on the target website.
- **Extracts key data points**, such as:
  - **Title**
  - **Price**
  - **Stock Status**
  - **Rating**
  - **Page Link**
- **Saves** the data in a JSON file (`books.json`), which can be directly used for analysis or further processing.

---

## **Features**

### **Web Scraping**
- Efficient and scalable scraping using Puppeteer.
- Configurable to scrape multiple pages by adjusting the `maxPages` variable.
- Outputs data in JSON format for further use in analytics or applications.

### **Data Presentation**
- **Book Showcase**: A simple, dynamic HTML page displays the scraped books as interactive cards.
- **Data Table**: Another HTML page presents the data in a structured table format, emphasizing its potential for analysis and machine learning.

---

## **Technologies Used**
- **Web Scraping**: [Puppeteer](https://github.com/puppeteer/puppeteer) (Node.js library).
- **Data Storage**: JSON format for structured and reusable data.
- **Frontend** (side feature):
  - HTML5 for layout.
  - CSS3 for styling.
  - JavaScript for dynamic content rendering.

---

## **Setup Instructions**

### **1. Clone the Repository**
git clone this repository

cd project-directory

### **2. Install Dependencies**
Ensure you have Node.js and Puppeteer installed to run the scraping script:
npm install puppeteer

### **3. Run the scraper**
node scrape.js

### **4. Use the Data**
Once the data is scraped and saved to `books.json`, you can:
- **Analyze it** with data science tools like Python or R.
- **Use it** in machine learning models.
- **Visualize it** with libraries like D3.js or Tableau.

### **5. (Optional) Run the Website**
To view the HTML pages that showcase the scraped data:
- Use a local server (e.g., Python, Node.js, or Live Server).
- Open `index.html` and `table.html` in your browser to explore the results.

---

## **Future Improvements**
- Extend the scraper to include more data points (e.g., book descriptions, categories).
- Implement error handling and retries for more robust scraping.
- Visualize data trends directly from the JSON file (e.g., price distribution by rating).
- Scale scraping to larger datasets or other websites.

---

## **Acknowledgments**
- [Books to Scrape](https://books.toscrape.com): The data source for this project.
- [Puppeteer](https://github.com/puppeteer/puppeteer): A powerful Node.js library for web scraping.
- Inspiration from web scraping and data analysis communities.

---

## **Disclaimer**
This project is for educational purposes only. Ensure you have permission to scrape any website, and adhere to its terms of service.


