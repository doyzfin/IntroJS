// Program 1 (Pembelian Ticket berdasarkan Kategori)
const saleTicket = (num) => {
  return new Promise((resolve, reject) => {
    const newMap = new Map();
    const acs = [];
    const cad = [];
    const ticketList = {
      category: [
        { no: 0, vvip: "1.500.000" },
        { no: 1, vip: "1.000.000" },
        { no: 2, eco: "500.000" },
      ],
    };
    newMap.set(acs, ticketList.category[num]);
    newMap.set(cad, ticketList.category);
    const cac = newMap.get(acs);
    const csd = newMap.get(cad);
    if (cac) {
      resolve(
        console.log(
          " Kategori yang tersedia ",
          csd,
          `\n`,
          " Pilihan Anda",
          cac,
          `\n`
        )
      );
    } else {
      reject(
        console.log(
          " Kategori yang tersedia ",
          csd,
          `\n`,
          "Silahkan ganti No Tiket ",
          `${num}`,
          "Dengan Nomer Tiket yang Tersedia",
          `\n`
        )
      );
    }
  });
};
saleTicket(4)
  .then((ress) => {
    return ress;
  })
  .catch((err) => {
    return err;
  });

// Program 2 (Menentukan Barang yang di Diskon)
const dataList = ["monitor", "headset", "keyboard", "webcam", "mouse"];
const checkDisc = (key) => {
  return new Promise((resolve, reject) => {
    const dataSupp = ["monitor", "keyboard", "mouse"];
    let ress = dataSupp.find((supply) => {
      return supply.toLowerCase() === key;
    });
    if (ress) {
      resolve(
        ` Supply = ${dataList}\n Discount = ${dataSupp}\n ${ress} = Barang Discount`
      );
    } else {
      reject(
        ` Supply = ${dataList}\n Discount = ${dataSupp}\n ${key} = Barang ini tidak Diskon`
      );
    }
  });
};
checkDisc("monitor")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
