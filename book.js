// book.js

document.addEventListener('DOMContentLoaded', () => {
    // Mock book data
    const books = [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            genre: "fiction",
            cover: "great.jpg",
            price: "$10.99",
            description: "A classic novel set in the 1920s."
        },
        {
            title: "Sapiens",
            author: "Yuval Noah Harari",
            genre: "non-fiction",
            cover: "sapiens.jpg",
            price: "$15.99",
            description: "A brief history of humankind."
        },

        {
            title: "Anatomy of a Murder",
            author: "Robert Traver",
            genre: "Mystery",
            cover: "an.jpg",
            price: "$13.79",
            description:"The Original Classic Courtroom Thriller"
        },
        {
            title: "Romeo and Juliet",
            author: "William Shakespeare",
            genre: "Romance",
            cover: "rom.jpg",
            price: "$17.80",
            
        },
        {
            title: "Twenty Years Later",
            author: "Carlie Donlea",
            genre: "Thriller",
            cover: "thrill.jpg",
            price: "$20.00",
        },
        {
            title: "How to Do Nothing",
            author: "Jenny Odell",
            genre: "Thriller",
            cover: "non.jpg",
            price: "$12.00",
        },
    ];

    const bookList = document.querySelector('.book-list');
    const bookModal = document.getElementById('book-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-btn');
    const searchInput = document.getElementById('search');
    const searchBtn = document.getElementById('search-btn');

    // Function to display books
    function displayBooks(books) {
        bookList.innerHTML = '';
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `
                <img src="${book.cover}" alt="${book.title}">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>by ${book.author}</p>
                    <p>${book.price}</p>
                </div>
            `;
            bookItem.addEventListener('click', () => showBookDetails(book));
            bookList.appendChild(bookItem);
        });
    }

    // Function to show book details in the modal
    function showBookDetails(book) {
        modalBody.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Price:</strong> ${book.price}</p>
            <p><strong>Description:</strong> ${book.description}</p>
            <img src="${book.cover}" alt="${book.title}" style="width: 100%; max-height: 400px; object-fit: cover;">
        `;
        bookModal.style.display = 'block';
    }

    // Close modal
    closeBtn.addEventListener('click', () => {
        bookModal.style.display = 'none';
    });

    // Search functionality
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm)
        );
        displayBooks(filteredBooks);
    });

    // Initial display of books
    displayBooks(books);
});
