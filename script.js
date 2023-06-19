// Script for navigation bar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



function openCartPopup() {
    // Retrieve cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem("cartData")) || [];

    // Generate HTML for cart items
    var cartItemsHTML = "";
    cartItems.forEach(function (item, index) {
      cartItemsHTML += `
        <div>
          <span>Mens T-shirt - Rs${item.price}</span>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
    });

    // Display cart items in the popup
    var cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = cartItemsHTML;

    // Show the popup
    var popup = document.getElementById("cartPopup");
    popup.style.display = "block";
  }

  function closeCartPopup() {
    // Hide the popup
    var popup = document.getElementById("cartPopup");
    popup.style.display = "none";
  }

  function removeFromCart(index) {
    // Retrieve cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem("cartData")) || [];

    // Remove the item at the specified index
    if (index >= 0 && index < cartItems.length) {
      cartItems.splice(index, 1);

      // Update cart items in local storage
      localStorage.setItem("cartData", JSON.stringify(cartItems));
    }

    // Refresh the cart popup
    openCartPopup();
  }

  function checkout() {
    // Implement your checkout logic here
    // This function will be called when the "Checkout" button is clicked
    // You can redirect the user to a checkout page or process the checkout as per your requirements
  }
