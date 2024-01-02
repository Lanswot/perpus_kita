function tampilpinjam(namaPeminjam) {
    const fs = require('fs');
    try {
        const data = fs.readFileSync('loans.json', 'utf-8');
        const daftarPinjam = JSON.parse(data);

        if (daftarPinjam.length === 0) {
            console.log('');
            console.log('File loans.json kosong.');
            console.log('');
            return [];
        }

        const hasilPencarian = daftarPinjam.filter(peminjaman => peminjaman.nama.toLowerCase() === namaPeminjam.toLowerCase());

        if (hasilPencarian.length === 0) {
            console.log('');
            console.log(`Data Peminjam dengan Nama ${namaPeminjam} tidak ditemukan`);
            console.log('');
            return [];
        }

        console.log('');
        console.log(`Daftar Peminjaman untuk ${namaPeminjam}: `);

        hasilPencarian.sort((a, b) => new Date(a.tglpinjam) - new Date(b.tglpinjam));

        hasilPencarian.forEach((peminjaman, index) => {
            console.log('');
            console.log(`${index + 1}. Nama Peminjam : ${peminjaman.nama}`);
            console.log(`   No Telp : ${peminjaman.telp}`);
            console.log(`   Judul Buku : ${peminjaman.judulpinjam}`);
            console.log(`   Tanggal Pinjam : ${peminjaman.tglpinjam}`);
            console.log(`   Tanggal Pengembalian : ${peminjaman.bataspinjam}`);
            console.log('');
        });

        return hasilPencarian;  
    } catch (err) {
        console.log('Terjadi Kesalahan: ', err);
        return [];
    }
}