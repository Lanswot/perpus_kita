function hapusBuku() {
    const fs = require('fs');

    //memanggil tampil buku
    const daftarBuku = tampilBuku();

    //kalau isi bukunya kosong
    if (daftarBuku.length === 0) {
        console.log("Tidak ada buku yang bisa dihapus");
        return;
    }

    //inputan user memilih index buku ke berapa
    const nomorBuku = prompt("Masukan Nomor Buku yang akan Dihapus : ");
    const indexBuku = parseInt(nomorBuku);

    //bagian utama dari mengahpus data buku
    if (indexBuku >= 0 && indexBuku < daftarBuku.length) {
        const bukuHapus = daftarBuku.splice(indexBuku, 1)[0];
        fs.writeFileSync('books.json', JSON.stringify(daftarBuku, null, 3));
        console.log("");
        console.log(`Buku dengan judul "${bukuHapus.judul}" telah dihapus dari daftar.`);
    } else {
        console.log('Nomor Buku tidak Ditemukan');
    }
}