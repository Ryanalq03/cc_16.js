//Coding Challenge #16

//Task 2
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