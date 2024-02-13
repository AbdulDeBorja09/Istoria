// Get the elements
const minusBtn = document.getElementById("minusBtn");
const addBtn = document.getElementById("addBtn");
const quantityInput = document.getElementById("quantityInput");

// Add event listener to minus button
minusBtn.addEventListener("click", () => {
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
    updateButtonState();
  }
});

// Add event listener to add button
addBtn.addEventListener("click", () => {
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity < 10) {
    quantityInput.value = currentQuantity + 1;
    updateButtonState();
  }
});

// Function to update button state
function updateButtonState() {
  let currentQuantity = parseInt(quantityInput.value);
  // Enable or disable minus button based on quantity
  minusBtn.disabled = currentQuantity === 1;
  // Enable or disable add button based on quantity
  addBtn.disabled = currentQuantity === 10;
  // Apply/disable styles based on disabled state
  minusBtn.classList.toggle("disabled", currentQuantity === 1);
  addBtn.classList.toggle("disabled", currentQuantity === 10);
}
