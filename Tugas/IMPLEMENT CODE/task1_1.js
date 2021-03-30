let hasil = "";
let teks = "Kasur Rusak";
let x = teks.length - 1;
while (x >= 0) {
  hasil = hasil + teks.toLowerCase()[x];
  x = x - 1;
}
if (hasil.toLowerCase() === teks.toLowerCase()) {
  console.log("Palindrom");
} else {
  console.log("Bukan Palindrom");
}
