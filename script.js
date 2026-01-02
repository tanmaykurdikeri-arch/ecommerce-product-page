// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartDisplay();

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.dataset.id;
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        alert(`${name} added to cart!`);
    });
});

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name} (x${item.quantity})</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
                <button onclick="removeItem('${item.id}')">Remove</button>
            </div>
        `;
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
}

function checkout() {
    alert('Checkout functionality would integrate with a payment gateway here. Total: ' + document.getElementById('cart-total').textContent);
}

// Form submission (basic)
document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent!');
});
