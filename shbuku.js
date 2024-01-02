function tampilBuku() {
    const fs = require('fs');

    try {
        //membaca file, apa saja isinya
        const data = fs.readFileSync('books.json', 'utf8');
        const daftarBuku = JSON.parse(data);

        console.log("");
        console.log("Daftar Buku : ");
        //ini perulangan untuk menampilkan data books
        daftarBuku.forEach((buku, index) => {
            console.log("");
            console.log(`${index}. Judul: ${buku.judul}, Pengarang: ${buku.pengarang}, Tahun Terbit: ${buku.tahunterbit}`);
            console.log("");
        });

        return daftarBuku;
    } catch (err) {
        console.log("Terjadi kesalahan: ", err);
    }
    return [];
}