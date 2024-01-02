function inputbuku(judul, pengarang, tahunterbit) {
    const fs = require('fs')
    
    let existingData = []
    
    //Mengecek file Books
    if (fs.existsSync('books.json')) {
        //kondisi jika ada isi di dalam filenya
        const existingJson = fs.readFileSync('books.json', 'utf8')
        existingData = JSON.parse(existingJson)
    }
    
    //Menambahkan data baru ke dalam file books
    existingData.push({ judul: judul, pengarang: pengarang, tahunterbit: tahunterbit })
    
    //Menyimpan kembali keseluruhan data dalam file books
    fs.writeFileSync('books.json', JSON.stringify(existingData, null, 3))
    
    console.log("")
    console.log('Berhasil menambahkan Data Buku ' + `"${judul}"`)
}  