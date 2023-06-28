// Fetch books from the API
function fetchBooks(query) {
    // Replace 'API_ENDPOINT' with the actual API endpoint URL
    var apiUrl = 'https://www.googleapis.com/auth/books' + query;
  
    fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Process the received data and update the UI
        displayBooks(data);
      })
      .catch(function(error) {
        console.log('Error fetching books:', error);
      });
  }
  
  // Display the fetched books in the search results
  function displayBooks(books) {
    var searchResultsDiv = document.getElementById('search-results');
    searchResultsDiv.innerHTML = '';
  
    books.forEach(function(book) {
      var bookItemDiv = document.createElement('div');
      bookItemDiv.classList.add('book-item');
  
      var titleElement = document.createElement('h3');
      titleElement.textContent = book.title;
  
      var authorElement = document.createElement('p');
      authorElement.textContent = 'Author: ' + book.author;
  
      var addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.addEventListener('click', function() {
        addToCart(book);
      });
  
      bookItemDiv.appendChild(titleElement);
      bookItemDiv.appendChild(authorElement);
      bookItemDiv.appendChild(addButton);
      searchResultsDiv.appendChild(bookItemDiv);
    });
  }
  
   // Add book to the cart
function addToCart(book) {
    var cartItemsDiv = document.getElementById('cart-items');
  
    var cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
  
    var titleElement = document.createElement('h3');
    titleElement.textContent = book.title;
  
    var authorElement = document.createElement('p');
    authorElement.textContent = 'Author: ' + book.author;
  
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
      removeCartItem(cartItemDiv);
    });
  
    cartItemDiv.appendChild(titleElement);
    cartItemDiv.appendChild(authorElement);
    cartItemDiv.appendChild(removeButton);
    cartItemsDiv.appendChild(cartItemDiv);
  
    calculateTotal();
  
    // Show confirmation message
    showConfirmationMessage('Item added to cart');
  }
  
  // Show confirmation message
  function showConfirmationMessage(message) {
    var confirmationDiv = document.createElement('div');
    confirmationDiv.classList.add('confirmation');
    confirmationDiv.textContent = message;
  
    // Append the confirmation message to the body or a specific container
    document.body.appendChild(confirmationDiv);
  
    // Remove the confirmation message after a certain duration
    setTimeout(function() {
      confirmationDiv.remove();
    }, 3000); // Remove after 3 seconds (adjust as needed)
  }
  
  
  // Remove item from the cart
  function removeCartItem(cartItem) {
    cartItem.remove();
    calculateTotal();
  }
  
  // Calculate the total price of items in the cart
  function calculateTotal() {
    var cartItems = document.getElementsByClassName('cart-item');
    var total = 0;
  
    for (var i = 0; i < cartItems.length; i++) {
      var bookTitle = cartItems[i].querySelector('h3').textContent;
      var bookPrice = getBookPrice(bookTitle);
      total += bookPrice;
    }
  
    var cartTotalElement = document.getElementById('cart-total');
    cartTotalElement.textContent = 'Total: $' + total.toFixed(2);
  }
  
  // Get the price of a book from the API or any other data source
  function getBookPrice(bookTitle) {
    // Replace with actual logic to fetch book price
    return Math.random() * 50; // Random price for demonstration purposes
  }
  
  // Perform search on button click
  document.getElementById('search-button').addEventListener('click', function() {
    var searchInput = document.getElementById('search-input').value;
    searchBooks(searchInput);
  });
  
  // Perform search on Enter key press
  document.getElementById('search-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      var searchInput = document.getElementById('search-input').value;
      searchBooks(searchInput);
    }
  });
  
  // Search books
  function searchBooks(query) {
    // Call the API or perform search logic here
    console.log('Searching for books:', query);
  
    // Mocking example data for display
    var books = [
      { title: 'Book 1', author: 'Author 1' },
      { title: 'Book 2', author: 'Author 2' },
      { title: 'Book 3', author: 'Author 3' },
    ];
  
    // Display the search results
    displayBooks(books);
  }
  
  // Submit contact form
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('message')[0].value;
  
    // Replace with your desired logic to submit the form
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Clear the form fields
    document.getElementById('contact-form').reset();
  });
  
  // Initialize the page
  function initializePage() {
    // Fetch initial book data
    fetchBooks('');
  
    // Calculate initial cart total
    calculateTotal();
  }
  
  // Call the initialization function
  initializePage();

  
  // Add book to the cart
function addToCart(book) {
    var cartItemsDiv = document.getElementById('cart-items');
  
    var cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
  
    var titleElement = document.createElement('h3');
    titleElement.textContent = book.title;
  
    var authorElement = document.createElement('p');
    authorElement.textContent = 'Author: ' + book.author;
  
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
      removeCartItem(cartItemDiv);
    });
  
    cartItemDiv.appendChild(titleElement);
    cartItemDiv.appendChild(authorElement);
    cartItemDiv.appendChild(removeButton);
    cartItemsDiv.appendChild(cartItemDiv);
  
    calculateTotal();
  
    // Show confirmation message
    showConfirmationMessage('Item added to cart');
  }
  
  // Show confirmation message
  function showConfirmationMessage(message) {
    var confirmationDiv = document.createElement('div');
    confirmationDiv.classList.add('confirmation');
    confirmationDiv.textContent = message;
  
    // Append the confirmation message to the body or a specific container
    document.body.appendChild(confirmationDiv);
  
    // Remove the confirmation message after a certain duration
    setTimeout(function() {
      confirmationDiv.remove();
    }, 3000); // Remove after 3 seconds (adjust as needed)
  }
  