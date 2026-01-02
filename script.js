let selectedColor = "";

function selectColor(btn) {
  document.querySelectorAll(".options button")
    .forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  selectedColor = btn.innerText;
}

function addToCart() {
  const qty = document.getElementById("qty").value;
  if (!selectedColor) {
    alert("Please select a color!");
    return;
  }

  const toast = document.getElementById("toast");
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}