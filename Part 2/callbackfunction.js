// buatlah callback function untuk menghitung luas dan keliling lingkaran
// FUNGSI UTAMA
function hitung(r, fungsiLuas, fungsiKeliling) {
  let phi;
  if (r % 7 === 0) {
    phi = 22 / 7;
  } else {
    phi = 3.14;
  }
  fungsiLuas(phi, r); // fungsiLuas = hitungLuas
  fungsiKeliling(phi, r);
  // let luas = phi * r * r;
  // console.log(luas);
  // let keliling = 2 * phi * r;
  // console.log(keliling);
}
// CALLBACK FUNCTION
function hitungLuas(phi, r) {
  // console.log("HITUNG LUAS");
  let luas = phi * r * r;
  console.log(luas);
}
function hitungKeliling(phi, r) {
  let keliling = 2 * phi * r;
  console.log(keliling);
}

hitung(14, hitungLuas, hitungKeliling);
