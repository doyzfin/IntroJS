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
    return sortSeleksi;
  }
}
console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
