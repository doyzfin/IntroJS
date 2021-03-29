const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};
//Promise
cekHariKerja("sabtu")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// Penjelasan :
//  Cara kerjanya adalah proses pengambilan data yang nanti outputnya terdapat dua kemungkinan,
//  jika true maka akan disimpan di resolve dan false akan di reject, untuk menghandler asycronous
//  ada di proses then dan catch, yang itu akan diambil otomatis dari resolve dan catch dari reject
//  sehingga datanya akan menjadi syncronous.

//Async Await
const coba = async (day) => {
  try {
    let result = await cekHariKerja(day);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
coba("sabtu");
// Penjelasan :
// Cara kerja nya adalah membuat satu function baru, dengan async await nya dan harus ada try dan catch yang berfungsi :
// try itu belum tentu benar dan juga belum tentu salah dan jika salah maka akan langsung dilempar ke catch dan juga
// di try ini terjadi handler dari ascyncronous menjadi syncronous.
