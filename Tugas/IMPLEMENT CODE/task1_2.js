let teks = "Saya Belajar Javascript";
let hasil = "";
let cek = teks.split(" ");
let x = cek.length - 1;
while (x >= 0) {
  hasil = hasil + " " + cek[x];
  x = x - 1;
}
console.log(hasil);
