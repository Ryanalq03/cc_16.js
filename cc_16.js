//Coding Challenge #16

//Task 2 Fetch products with .then()
function fetchProductsThen() { //creates fetch function
    fetch('https://www.course-api.com/javascript-store-products') //retrieved api data
      .then(response => { //checks for errors
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(products => {
        // Log each product's name to the console
        products.forEach(product => {
          console.log(product.fields.name);
        });
      })
      .catch(error => { //catches and logs errors
        console.error('Error fetching products with .then():', error);
      });
  } 

  //Task 3 Fetching products with async/await

  async function fetchProductsAsync() { //Creates async function
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const products = await response.json();
      // Call displayProducts to render products
      displayProducts(products);
    } catch (error) {
      // Pass any errors to the error handler
      handleError(error);
    }
  }

  //Task 4 Display products

  function displayProducts(products) { //Creates displayProducts function
    const container = document.getElementById('product-container');
    // Clear previous content 
    container.innerHTML = '';
    // Loop through the first 5 products
    products.slice(0, 5).forEach(product => {
      // Create a product card element
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
  
      // Product Name
      const nameEl = document.createElement('h2');
      nameEl.textContent = product.fields.name;
      productCard.appendChild(nameEl);
  
      // Product Price
      const priceEl = document.createElement('p');
      priceEl.textContent = `Price: $${product.fields.price}`;
      productCard.appendChild(priceEl);
  
      // Product Image
      const imgEl = document.createElement('img');
      // Assuming the API returns an array for images; using the first one
      imgEl.src = product.fields.image[0].url;
      imgEl.alt = product.fields.name;
      productCard.appendChild(imgEl);
  
      // Append the card to the container
      container.appendChild(productCard);
    });
}