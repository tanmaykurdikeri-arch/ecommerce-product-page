'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');
const toastBanner = document.querySelector('.toast-banner img');
const toastMessage = document.querySelector('.toast-message');
const toastTitle = document.querySelector('.toast-title');
const toastMeta = document.querySelector('.toast-meta');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});

// Function to show custom toast (for added to cart or other notifications)
function showToast(message, title, meta, imageSrc = './assets/images/products/headphone-1.jpg') {
  toastBanner.src = imageSrc;
  toastMessage.textContent = message;
  toastTitle.textContent = title;
  toastMeta.innerHTML = meta;
  notificationToast.classList.remove('closed');
  // Auto-hide after 5 seconds
  setTimeout(() => {
    notificationToast.classList.add('closed');
  }, 5000);
}

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function () {
    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;
      if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');
      }
    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
  });
}

// Add to cart notification
const addToCartBtns = document.querySelectorAll('.btn-action .ion-icon[name="bag-add-outline"]');
addToCartBtns.forEach(btn => {
  btn.parentElement.addEventListener('click', function () {
    // Get product title from the showcase (assuming it's the sibling h3)
    const productTitle = this.closest('.showcase').querySelector('.showcase-title').textContent;
    showToast('Added to cart!', productTitle, '<time datetime="PT0S">Just now</time>', './assets/images/products/headphone-1.jpg'); // Use a default image or dynamic one
  });
});