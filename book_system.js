let books = []; // Declare an empty array for books

// Function to add a book
function addBook() {
    const bookName = document.getElementById('bookName').value.trim();
    const authorName = document.getElementById('authorName').value.trim();
    const bookDescription = document.getElementById('bookDescription').value.trim();
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// Function to display books
function showBooks() {
    if (books.length === 0) {
        document.getElementById('books').innerHTML = "<p>No books added yet.</p>";
        return;
    }

    const booksDiv = books.map((book, index) => `
        <div class="book">
            <h2>Book Number: ${index + 1}</h2>
            <p><strong>Book Name:</strong> ${book.name}</p>
            <p><strong>Author Name:</strong> ${book.authorName}</p>
            <p><strong>Book Description:</strong> ${book.bookDescription}</p>
            <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
            <button onclick="deleteBook(${index})" class="delete-btn">Delete</button>
        </div>
        <hr>
    `).join('');

    document.getElementById('books').innerHTML = booksDiv;
}

// Function to clear input fields
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

// Function to delete a book
function deleteBook(index) {
    books.splice(index, 1);
    showBooks();
}
