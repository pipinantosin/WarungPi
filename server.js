import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Untuk akses index.html

// Contoh endpoint API
app.post('/api/cari-distributor', (req, res) => {
  const { query } = req.body;
  console.log('Query:', query);

  // Data dummy (nanti bisa diganti database)
  const data = [
    { nama: 'Distributor A', kota: 'Bandung' },
    { nama: 'Distributor B', kota: 'Jakarta' }
  ];

  const hasil = data.filter(d => d.kota.toLowerCase().includes(query.toLowerCase()));
  res.json(hasil);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
