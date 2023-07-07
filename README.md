 # BlackCoder@CodeWise.com

# eCommerce application in JavaScript. Here's a breakdown of what the code does:

- 1. It starts by selecting the `form` element and `btn` element from the HTML using `document.querySelector()` and initializes an empty array called `itemData`.

- 2. The `cartItems` array and `totalPrice` variable are declared to keep track of items added to the cart and the total price of the items.

- 3. The `addToCart` function is defined, which is called when an "Add to Cart" button is clicked. It retrieves the `itemId` and `itemPrice` from the clicked button's `dataset` attributes.

- 4. It checks if the item is already in the cart by using `cartItems.find()` to find an item with the same `id`. If found, it increments the `quantity` property of the item. Otherwise, it creates a new item object with an initial quantity of 1 and adds it to the `cartItems` array.

- 5. The price of the item is added to the `totalPrice` variable.

- 6. The `updateCartUI` function is called to update the UI elements related to the cart, such as the number of items in the cart and the total price.

- 7. The `handleFetch` function is defined, which fetches data from the URL `http://localhost:3000/foodData` using the Fetch API. It expects the response to be in JSON format.

- 8. After the fetch request, the response data is stored in the `userData` variable, and the `handleRender` function is called to render the items on the page.

- 9. The `handleRender` function takes an array of items as a parameter and generates HTML markup for each item. The generated HTML is appended to the `#output` element.

- 10. The `searchItem` function is defined to handle the search functionality. It retrieves the value from the `searchInput` element, converts it to lowercase, and filters the `userData` array based on the search term. Then, it calls `handleRender` with the filtered items to display the search results.

- 11. An event listener is added to the form element to listen for the form submission event. When the form is submitted, it prevents the default form submission behavior and calls the `searchItem` function.

- 12. Finally, the `handleFetch` function is called to initiate the data fetching and rendering of items.

> Please note that the commented-out code block within the `handleRender` function appears to be an alternative template for rendering the items. It can be used instead of the existing template if desired.