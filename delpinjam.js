function tampilpinjampus(namaPeminjampus){
    const fs = require('fs')

    try{
        const data = fs.readFileSync('loans.json', 'utf-8')
        const daftarPinjampus = JSON.parse(data)

        const hasilPencarian = daftarPinjampus.filter(peminjaman => peminjaman.nama.toLowerCase() === namaPeminjampus.toLowerCase())

        if(hasilPencarian.length === 0){
            console.log('')
            console.log(`Data Peminjam dengan Nama ${namaPeminjampus} tidak ditemukan`)
            console.log('')
            return[]
        }

        console.log('')
        console.log(`Daftar Peminjaman untuk ${namaPeminjampus} : `)

        hasilPencarian.sort((a,b) => new Date(a.tglpinjam))

        hasilPencarian.forEach((peminjaman, index) => {
            console.log('')
            console.log(`${index + 1}. Nama Peminjam : ${peminjaman.nama}`)
            console.log(`   No Telp : ${peminjaman.telp}`)
            console.log(`   Judul Buku : ${peminjaman.judulpinjam}`)
            console.log(`   Tanggal Pinjam : ${peminjaman.tglpinjam}`)
            console.log(`   Tanggal Pengembalian : ${peminjaman.bataspinjam}`)
            console.log('')
        });

        return hasilPencarian
    } catch(err){
        console.log('Terjadi Kesalahan Ges : ', err)
    }
    return [];
}

//Function Hapus Data Peminjaman
function hapuspinjam(hasilPencarian, indexhapuspinjam){
    const fs = require('fs')

    try{
        if(indexhapuspinjam < 1 || indexhapuspinjam > hasilPencarian.length){
            console.log('Index Tidak Valid Bos')
            return
        }

        const indexreal = indexhapuspinjam - 1
        const daftarPinjam = JSON.parse(fs.readFileSync('loans.json', 'utf-8'))
        const filterpinjam = daftarPinjam.filter(peminjaman => peminjaman.nama.toLowerCase() !== hasilPencarian[0].nama.toLowerCase())

        fs.writeFileSync('loans.json', JSON.stringify(filterpinjam, null, 2), 'utf-8')

        console.log('')
        console.log('Data Peminjaman Berhasil Dihapus')
        console.log('')

    }catch (err){
        console.log('Terjadi Kesalahan Ges : ', err)
    }
}