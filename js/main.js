const products = [
  { name: "Beras 5kg", priceIdr: 75000 },
  { name: "Minyak Goreng 1L", priceIdr: 18000 },
  { name: "Gula Pasir 1kg", priceIdr: 16000 },
  { name: "Mie Instan (1 dus)", priceIdr: 105000 },
  { name: "Telur 1kg", priceIdr: 28000 },
  { name: "Sabun Mandi", priceIdr: 7000 },
  { name: "Pasta Gigi", priceIdr: 12000 },
  { name: "Teh Celup", priceIdr: 8000 },
  { name: "Kopi Sachet", priceIdr: 22000 },
  { name: "Susu Bubuk 400gr", priceIdr: 46000 }
];

// GCV 1 Pi = $314159, Kurs USD = 16000 IDR
const USD_RATE = 16000;
const PI_GCV = 314159;

function convertToPi(priceIdr) {
  const usd = priceIdr / USD_RATE;
  const pi = usd / PI_GCV;
  return pi.toFixed(6);
}

const tbody = document.getElementById("product-list");

products.forEach(product => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${product.name}</td>
    <td>Rp ${product.priceIdr.toLocaleString()}</td>
    <td>${convertToPi(product.priceIdr)} π</td>
  `;
  tbody.appendChild(tr);
});
