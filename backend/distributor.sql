
CREATE TABLE IF NOT EXISTS distributor (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100),
  lokasi VARCHAR(100),
  kontak VARCHAR(50)
);

INSERT INTO distributor (nama, lokasi, kontak) VALUES
('Toko Bina Rakyat', 'Bandung', '0812-1111-2222'),
('Grosir Sembako Nusantara', 'Surabaya', '0821-3333-4444'),
('UD Warung Sejahtera', 'Jakarta', '0852-5555-6666');
