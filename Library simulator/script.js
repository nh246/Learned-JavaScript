// Define the Book object constructor
function Book(title, author, read = false) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
  
  // Create the library array
  const library = [];
  
  // Function to display books in the library
  function displayBooks() {
    const bookListContainer = document.getElementById("bookList");
    bookListContainer.innerHTML = "";
  
    library.forEach((book) => {
      const bookElement = document.createElement("div");
      bookElement.className = "book";
      bookElement.innerHTML = `
        <h3>${book.title}</h3>
        <p>By: ${book.author}</p>
        <p>Status: ${book.read ? "Read" : "Not Read"}</p>
      `;
  
      bookListContainer.appendChild(bookElement);
    });
  }
  
  // Function to add a book to the library
  function addBook() {
    const titleInput = document.getElementById("titleInput");
    const authorInput = document.getElementById("authorInput");
  
    const title = titleInput.value;
    const author = authorInput.value;
  
    if (title.trim() === "" || author.trim() === "") {
      alert("Please enter both title and author.");
      return;
    }
  
    const newBook = new Book(title, author);
    library.push(newBook);
  
    // Clear input fields
    titleInput.value = "";
    authorInput.value = "";
  
    displayBooks();
  }
  
  // Function to search for books by title or author
  function searchBooks() {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value.toLowerCase();
  
    const searchResult = library.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
  
    displayBooks(searchResult);
  }
  
  // Attach event listeners
  document.getElementById("addBookBtn").addEventListener("click", addBook);
  document.getElementById("searchBtn").addEventListener("click", searchBooks);
  
  // Test Data (Optional: You can remove this if you prefer to add books manually)
  addBook("Book 1", "Author 1", true);
  addBook("Book 2", "Author 2");
  addBook("Book 3", "Author 3");
  displayBooks();
  