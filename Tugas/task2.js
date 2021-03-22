let nilaiMTK = 80;
let nilaibahasaIndo = 80;
let nilaibahasaIng = 80;
let nilaiIpa = 81;
const nilaiRata =
  nilaiMTK / 4 + nilaibahasaIndo / 4 + nilaibahasaIng / 4 + nilaiIpa / 4;

if (nilaiMTK && nilaibahasaIndo && nilaibahasaIng && nilaiIpa) {
  if (nilaiRata > 100) {
    console.log("Nilai tidak boleh lebih dari 100");
  } else if (nilaiRata >= 90) {
    console.log(`Rata-rata = ${nilaiRata}`);
    console.log("Grade = A");
  } else if (nilaiRata >= 80) {
    console.log(`Rata-rata = ${nilaiRata}`);
    console.log("Grade = B");
  } else if (nilaiRata >= 70) {
    console.log(`Rata-rata = ${nilaiRata}`);
    console.log("Grade = C");
  } else if (nilaiRata >= 60) {
    console.log(`Rata-rata = ${nilaiRata}`);
    console.log("Grade = D");
  } else if (nilaiRata < 0) {
    console.log("Nilai harus positif");
  } else {
    console.log(`Rata-rata = ${nilaiRata}`);
    console.log("Grade = E");
  }
} else {
  console.log("Nilai harus diisi");
}
