const arkfood = (harga, voucher, jarak, pajak) => {
  console.log(`Kode : ${voucher.toUpperCase()}`); // Output voucher dengan sudah dibesarkan hurufnya
  console.log(`Harga        : ${harga}`); // Output dari harga
  let promo = ["ARKAFOOD5", "DITRAKTIRDEMY"]; // Variable penampung kode yang tersedia
  let upperV = voucher.toUpperCase(); // Membesarkan huruf
  let upVoucher = promo.indexOf(upperV); // Memilih data dari array
  let vDisc = ""; // Varibale penampung hasil kondisi switch
  switch (upVoucher) {
    case 0:
      if (harga >= 50000) {
        // Kondisi min pembelian
        let disc = (harga * 50) / 100;
        if (disc > 50000) {
          // Kondisi max diskon
          let disc = 50000;
          vDisc = disc;
        } else {
          vDisc = disc;
        }
      } else {
        // Kondisi tidak mendapat diskon
        vDisc = 0;
      }
      break;
    case 1:
      if (harga >= 25000) {
        // Kondisi min pembelian
        let disc = (harga * 60) / 100;
        if (disc > 30000) {
          // Kondisi max diskon
          let disc = 30000;
          vDisc = disc;
        } else {
          vDisc = disc;
        }
      } else {
        // Kondisi tidak mendapat diskon
        vDisc = 0;
      }
      break;
    default:
      // Kondisi jika salah masukan kode
      vDisc = 0;
      console.log(`=========================================
  (${voucher.toUpperCase()}) Kode salah, Silahkan coba lagi
      atau lanjut dengan harga normal
=========================================`);
      break;
  }
  let shipping = payShip(jarak);
  let payTax = payJak(harga, pajak);
  const totalPay = harga - vDisc + shipping + payTax;

  console.log(`Potongan     : ${vDisc}`); // Output dari proses switch case
  console.log(`Ongkos Kirim : ${shipping}`); // Output dari function payShip
  console.log(`Bayar Pajak  : ${payTax}`); // Output dari funtion payJak
  console.log(`Sub Total    : ${totalPay}`); // Output dari proses aritmatika seluruh variable
};
const payShip = (jarak) => {
  if (jarak <= 2) {
    // Kondisi Bayar Ongkos Kirim
    let shipp = 5000;
    return shipp;
  } else {
    let shipp = 5000 + 3000 * (jarak - 2);
    return shipp;
  }
};
const payJak = (harga, pajak) => {
  if (pajak == true) {
    //Kondisi Bayar Pajak
    let hasl = (harga * 5) / 100;
    return hasl;
  } else {
    let hasl = 0;
    return hasl;
  }
};
arkfood(75000, "ARKAFOOD5", 5, true);
