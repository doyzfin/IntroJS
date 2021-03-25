const getmonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ["January","Febuary","March","April","May","June","July","August", "September","October","November","Desember",];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};
getmonth((prm1, month) => {
  if (prm1 === null) {
    const newM = new Map();
    const list = [];
    newM.set(list, month);
    const ress = newM.get(list);
    console.log(ress);
  } else {
    console.log(prm1, month);
  }
});
