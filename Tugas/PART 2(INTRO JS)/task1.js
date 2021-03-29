console.log("Filter");
// 1. filter ()
// Membuat sebuah array baru dengan memperlihatkan kondisi tertentu pada setiap elemen array yang ada.
const genap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newGenap = genap.filter((genap) => genap % 2 == 0);
console.log(newGenap);

console.log(" \nMap");
// 2. map()
// membuat array baru sambil mengecek/melakukan operasi pada setiap elemen pada array.
const angka = [1, 4, 2, 6, 3];
const kaliDua = angka.map((kali) => kali * 2);
console.log(kaliDua);

console.log(" \nSort");
// 3. sort()
// untuk mengurutkan array baik secara ascending maupun descending.
const huruf = ["a", "z", "d", "e", "l", "f"];
const urut = huruf.sort((a, b) => (a > b ? 1 : -1));
console.log(urut);

console.log(" \nConcat");
// 4. concat()
// untuk menggabungkan 2 array menjadi 1 array.
const motor = ["moge", "matic", "bebek"];
const cc = [150, 115, 125];
const jenis = motor.concat(cc);
console.log(jenis);

console.log(" \nReduce");
// 5.reduce()
// untuk mereduce array menjadi single value lalu menjumlahkannya dari kiri ke kanan.
const angka1 = [20, 20, 20];
const sum = angka1.reduce((total, value) => total + value);
console.log(sum);

console.log(" \nEvery");
// 6.every()
// untuk mengecek apakah setiap elemen memenuhi kondisi.
const angka2 = [1, 3, 5, 7, 9, 13, 15];
const cekGanjil = angka2.every((ganjil) => ganjil % 2 != 0);
const cekLagi = angka2.every((lagi) => lagi < 10);
console.log(cekGanjil);
console.log(cekLagi);

console.log(" \nInclude");
// 7.include()
// untuk mengecek apakah elemen array sudah memenuhi kondisi atau tidak (ada atau tidak)
const cobaHuruf = ["a", "l", "f", "i", "n"];
const testHuruf = cobaHuruf.includes("i");
const gagalHuruf = cobaHuruf.includes("z");
console.log(testHuruf);
console.log(gagalHuruf);

console.log(" \nforEach");
// 8.foreach()
// untuk melakukan perulangan pada Array.
const apa = [1, "a", 2, "b", 3, "c"];
const ulang = apa.forEach((cara) => {
  console.log(cara);
});

console.log(" \narrayOf");
// 9.arrayof()
// untuk membuat array dari elemen yang dipassing atau dilempar.
const task = Array.of("task1", "task2", "task3");
console.log(task);

console.log(" \nSome");
// 10.some()
// untuk mengecek setidaknya ada satu elemen yang memenuhi kondisi.
const bilPrima = [1, 3, 5, 7, 9, 13];
const cekGenap = bilPrima.some((cek) => cek % 2 == 0);
const cekPrima = bilPrima.some((cek) => cek / cek == 1);
console.log(cekGenap);
console.log(cekPrima);
