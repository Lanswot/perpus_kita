do {
    menu();
    aksi = prompt("Pilih Menu (1-7) : ");
    console.log("");

    let lanjut = 'n'; // Inisialisasi lanjut ke 'n' untuk default

    switch (aksi) {
        case '1':
            const judul = prompt("Judul Buku : ");
            const pengarang = prompt("Pengarang Buku : ");
            const tahunterbit = prompt("Tahun Terbit Buku : ");

            inputbuku(judul, pengarang, tahunterbit);
            console.log("Data buku berhasil ditambahkan!");
            break;

        case '2':
            const judulCari = prompt("Masukan Judul Buku : ");
            cariBuku(judulCari);
            break;

        case '3':
            hapusBuku();
            console.log("Buku berhasil dihapus!");
            break;

        case '4':
            const nama = prompt('Nama Peminjam : ');
            const telp = prompt('No. Telp : ');
            const judulpinjam = prompt('Judul Buku : ');

            const bataspinjam = inputpinjam(nama, telp, judulpinjam);

            console.log('');
            console.log(`Tanggal Pengembalian: ${bataspinjam}`);
            console.log('');
            break;

        case '5':
            const namaPeminjam = prompt('Masukan Nama Peminjam : ');
            tampilpinjampus(namaPeminjam);
            break;

        case '6':
            const namaPeminjampus = prompt('Masukan Nama Peminjam yang Akan dihapus : ');
            const hasilPencarian = tampilpinjampus(namaPeminjampus);

            if (hasilPencarian.length > 0) {
                const indexhapuspinjam = prompt('Masukan Index keberapa yang Dihapus : ');
                hapuspinjam(hasilPencarian, indexhapuspinjam);
                console.log("Data peminjaman berhasil dihapus!");
            } else {
                console.log("Peminjam tidak ditemukan!");
            }
            break;

        case '7':
            console.log("Keluar dari Program");
            break;

        default:
            console.log("Pilihan tidak valid");
            break;
    }


    if (aksi !== '7') {
        lanjut = prompt("Apakah Anda ingin melanjutkan? (y/n): ").toLowerCase();
        if (lanjut !== 'y') {
            aksi = '7';
        }
    }
} while (aksi !== '7');