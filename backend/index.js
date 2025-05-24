// backend/index.js (terhubung ke Freesqldatabase.com)
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;

// Izinkan akses dari GitHub Pages
app.use(cors({
  origin: 'https://pipinantosin.github.io'
}));

app.use(express.json());

// Koneksi ke database Freesqldatabase
const db = mysql.createPool({
  host: 'sql12.freesqldatabase.com',
  port: 3306,
  user: 'sql12780934',
  password: 'htU5vWXJ1m',
  database: 'sql12780934'
});

// Endpoint untuk pencarian distributor
app.post('/api/cari-distributor', async (req, res) => {
  const { query } = req.body;
  try {
    const [rows] = await db.execute(
      "SELECT * FROM distributor WHERE nama LIKE ? OR lokasi LIKE ?",
      [`%${query}%`, `%${query}%`]
    );
    res.json(rows);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Database error', detail: err });
  }
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
