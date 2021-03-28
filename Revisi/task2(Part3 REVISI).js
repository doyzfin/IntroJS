const getmonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};
getmonth((prm1, month) => {
  if (prm1 === null) {
    const has = month.map((el) => console.log(el));
  } else {
    console.log(prm1, month);
  }
});
