const offerRadios = document.querySelectorAll('input[type="radio"]');
const sizeSelects = document.querySelectorAll(".size");
const totalBox = document.querySelector(".total-box");
const totalPrice = document.querySelector(".total-price");

const prices = [50, 90, 120];
const discounts = [0.4, 0.5, 0.6];
const shippingCost = 0;

offerRadios.forEach((radio) => {
  radio.addEventListener("change", updateTotal);
});

sizeSelects.forEach((select) => {
  select.addEventListener("change", updateTotal);
});

function updateTotal() {
  let selectedOffer = 0;
  offerRadios.forEach((radio, index) => {
    if (radio.checked) {
      selectedOffer = index;
    }
  });

  let selectedSize = sizeSelects[0].value;
  sizeSelects.forEach((select) => {
    if (
      select.parentElement.previousElementSibling.querySelector("input").checked
    ) {
      selectedSize = select.value;
    }
  });

  const price = prices[selectedOffer];
  const discount = discounts[selectedOffer];
  const sizeMultiplier =
    selectedSize === "s" ? 1 : selectedSize === "m" ? 1.2 : 1.5;
  const totalPriceValue =
    price * sizeMultiplier * (1 - discount) + shippingCost;

  totalPrice.textContent = `Total: DKK ${totalPriceValue.toFixed(2)}`;
}

updateTotal();
