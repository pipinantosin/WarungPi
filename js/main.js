function showKatalog() {
  document.getElementById('konten').innerHTML = `
    <h2>Katalog Barang</h2>
    <ul>
      <li>Beras 5kg - 75 Pi</li>
      <li>Minyak Goreng 1L - 20 Pi</li>
      <li>Gula Pasir 1kg - 15 Pi</li>
    </ul>
  `;
}

function showPreorder() {
  document.getElementById('konten').innerHTML = `
    <h2>Pre-Order</h2>
    <p>Formulir pre-order akan tersedia pada fase selanjutnya.</p>
  `;
}

function showLoyalty() {
  document.getElementById('konten').innerHTML = `
    <h2>Poin Loyalti</h2>
    <p>Warung aktif akan mendapatkan poin Pi setiap transaksi sukses.</p>
  `;
}
