// backend/index.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Koneksi database
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'warungpi'
});

// Endpoint cari distributor
app.post('/api/cari-distributor', async (req, res) => {
  const { query } = req.body;
  try {
    const [rows] = await db.execute(
      "SELECT * FROM distributor WHERE nama LIKE ? OR lokasi LIKE ?",
      [`%${query}%`, `%${query}%`]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error', detail: err });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

