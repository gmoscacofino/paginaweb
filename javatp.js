let cart = [];

// Add item to cart
function addToCart(id, name, price) {
  const item = { id, name, price };
  cart.push(item);
  document.getElementById("cart-count").innerText = cart.length;
  alert(`${name} added to cart!`);
}

// Open cart modal
document.getElementById("cart-btn").addEventListener("click", () => {
  const cartModal = document.getElementById("cart-modal");
  cartModal.style.display = "block";
  updateCartItems();
});

// Close cart modal
document.getElementById("close-cart").addEventListener("click", () => {
  document.getElementById("cart-modal").style.display = "none";
});

// Update cart items
function updateCartItems() {
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  cartItems.innerHTML = "";
  let totalPrice = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    totalPrice += item.price;
  });

  totalPriceElement.innerText = `Total: $${totalPrice}`;
}

// Open checkout modal
document.getElementById("checkout-btn").addEventListener("click", () => {
  const checkoutModal = document.getElementById("checkout-modal");
  checkoutModal.style.display = "block";
});

// Close checkout modal
document.getElementById("close-checkout").addEventListener("click", () => {
  document.getElementById("checkout-modal").style.display = "none";
});

// Handle checkout form submission
document.getElementById("checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  // Process the order here
  alert(`Order placed by ${name}!\nTotal: $${cart.reduce((sum, item) => sum + item.price, 0)}`);
  
  // Reset cart
  cart = [];
  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("cart-modal").style.display = "none";
  document.getElementById("checkout-modal").style.display = "none";
  document.getElementById("checkout-form").reset();
});
