function selectColor(btn) {
  document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function increaseQty() {
  const input = document.getElementById('qty');
  input.value = parseInt(input.value) + 1;
}

function decreaseQty() {
  const input = document.getElementById('qty');
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

function addToCart() {
  const qty = document.getElementById('qty').value;
  const color = document.querySelector('.color-btn.selected').getAttribute('aria-label');
  const pricePerUnit = 15999;
  const totalPrice = pricePerUnit * parseInt(qty);
  
  // Update cart modal
  document.getElementById('cartColor').textContent = color;
  document.getElementById('cartQty').textContent = qty;
  document.getElementById('cartPrice').textContent = totalPrice.toLocaleString('en-IN');
  
  // Show modal
  document.getElementById('cartModal').classList.add('show');
  
  // Also show toast
  const toast = document.getElementById('toast');
  toast.textContent = `Added ${qty} ${color} earbuds to cart ✅`;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

function closeCart() {
  document.getElementById('cartModal').classList.remove('show');
}

function checkout() {
  alert('Proceeding to checkout...');
  closeCart();
}

// Close modal on outside click
document.getElementById('cartModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeCart();
  }
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
```
