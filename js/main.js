const USD_RATE = 16000; // Nilai tukar IDR ke USD
const PI_GCV = 314159;  // 1π = 314,159 USD (Global Consensus Value)

const products = [
  { name: "Beras 5kg", price: 75000 },
  { name: "Beras 10kg", price: 150000 },
  { name: "Mie instan", price: 3500 },
  { name: "Telur ayam 1kg", price: 30000 },
  { name: "Minyak goreng 1L", price: 18000 },
  { name: "Gula pasir 1kg", price: 16000 },
  { name: "Tepung terigu 1kg", price: 10000 },
  { name: "Garam halus 500gr", price: 4000 },
  { name: "Kecap manis", price: 13000 },
  { name: "Saos sambal", price: 12000 },
  { name: "Penyedap rasa", price: 500 },
  { name: "Santan instan", price: 3000 },
  { name: "Air mineral", price: 3000 },
  { name: "Kopi instan", price: 1500 },
  { name: "Teh celup", price: 8000 },
  { name: "Susu kental manis", price: 11000 },
  { name: "Minuman buah", price: 4000 },
  { name: "Sabun mandi", price: 3000 },
  { name: "Pasta gigi", price: 9000 },
  { name: "Sikat gigi", price: 6000 },
  { name: "Deterjen 1kg", price: 15000 },
  { name: "Pewangi pakaian", price: 10000 },
  { name: "Tisu gulung", price: 7000 },
  { name: "Pembalut wanita", price: 13000 },
  { name: "Rokok", price: 25000 },
  { name: "Gas LPG 3kg", price: 23000 },
  { name: "Lilin 1 pack", price: 6000 },
  { name: "Korek api", price: 1000 },
  { name: "Baterai AA 2 pcs", price: 8000 }
];

function convertToPi(priceIdr) {
  const usd = priceIdr / USD_RATE;
  const pi = usd / PI_GCV;
  return pi.toFixed(6);
}

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("product-list");

  products.forEach((product, index) => {
    const piPrice = convertToPi(product.price);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${product.name}</td>
      <td>Rp ${product.price.toLocaleString()}</td>
      <td>
        ${piPrice} π <br/>
        <button onclick="bayarPi('${product.name}', ${piPrice})">Bayar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
});

function bayarPi(namaProduk, jumlahPi) {
  Pi.createPayment(
    {
      amount: jumlahPi,
      memo: `Pembelian: ${namaProduk}`,
      metadata: { produk: namaProduk }
    },
    {
      onReadyForServerApproval: function (paymentId) {
        console.log("Siap untuk persetujuan server:", paymentId);
        // Kirim ke backend kalau kamu punya
      },
      onReadyForServerCompletion: function (paymentId, txid) {
        alert(`Pembayaran ${namaProduk} berhasil!`);
        console.log("Transaksi:", txid);
      },
      onCancel: function (paymentId) {
        alert("Pembayaran dibatalkan.");
      },
      onError: function (error, payment) {
        console.error("Terjadi kesalahan:", error);
        alert("Pembayaran gagal.");
      }
    }
  );
}
