const USD_TO_IDR = 16000; // bisa kamu ubah kalau nilai tukar berubah
const PI_TO_USD = 314159;

const PI_TO_IDR = PI_TO_USD * USD_TO_IDR;

function formatPi(piValue) {
  return piValue.toFixed(7) + " π";
}

function convertPrices() {
  const items = document.querySelectorAll(".price-idr");
  items.forEach(item => {
    const idr = parseFloat(item.dataset.idr);
    const pi = idr / PI_TO_IDR;
    const piDisplay = formatPi(pi);
    item.querySelector(".pi-price").textContent = piDisplay;
  });
}

document.addEventListener("DOMContentLoaded", convertPrices);
