function inputpinjam(nama, telp, judulpinjam) {
    const fs = require('fs');
    let loans = [];

    try {
        //membaca isi file loans
        const loansData = fs.readFileSync('loans.json', 'utf-8');
        if (loansData.trim() !== '') {
            loans = JSON.parse(loansData);
        }
    } catch (err) {
        console.log("Error reading loans.json", err);
    }

    //pengaturan untuk menangkap tanggal peminjaman
    const pinjamDate = new Date().toLocaleDateString(); // Menggunakan toLocaleDateString() agar hanya tanggal yang diambil
    const kembaliDate = new Date(); // Menggunakan tanggal saat ini untuk tanggal pengembalian
    kembaliDate.setDate(kembaliDate.getDate() + 7);
    const bataspinjam = kembaliDate.toISOString().split('T')[0];

    //susunan array yang akan disimpan
    const newLoan = {
        nama: nama,
        telp: telp,
        judulpinjam: judulpinjam,
        tglpinjam: pinjamDate,
        bataspinjam: bataspinjam
    };

    //push data baru ke loans
    loans.push(newLoan);

    //memasukkan data baru ke file loans
    fs.writeFile('loans.json', JSON.stringify(loans, null, 2), 'utf-8', (err) => {
        if (err) {
            console.error('Error Menulis data loans.json', err);
        } else {
            console.log('');
            console.log('Data Peminjaman', nama ,' Berhasil ditambahkan');
            console.log('');
            console.log('Tanggal Peminjaman Buku : ', pinjamDate);
            console.log('');
            console.log('Tanggal Pengembalian Buku : ', bataspinjam);
            console.log('');

        }
    });

    return bataspinjam; // Mengembalikan tanggal pengembalian untuk keperluan lain jika dibutuhkan
}
