function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal > nilaiAkhir) {
    console.log("Nilai Akhir harus lebih besar dari nilai Awal");
  } else if (dataArray.length < 5) {
    console.log("Jumlah angka pada dataArray tidak ada");
  } else {
    const seleksi = dataArray.filter(
      (dataArray) => dataArray >= nilaiAwal && dataArray <= nilaiAkhir
    );
    const sortSeleksi = seleksi.sort((a, b) => (a > b ? 1 : -1));
    if (sortSeleksi.length === 0) {
      console.log("Jumlah angka tidak ada dalam dataArray");
    } else {
      return console.log(sortSeleksi);
    }
  }
}
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(25, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(5, 10, [2, 25, 344, 45, 67]);
