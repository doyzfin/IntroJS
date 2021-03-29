const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchName = (keyword, limit, callback) => {
  const contoh = name.filter((name) =>
    name.toLowerCase().includes(keyword.toLowerCase())
  );
  const jadi = contoh.splice(0, limit);
  callback(jadi);
};
const printName = (jadi) => {
  console.log(jadi);
};
searchName("an", 3, printName);
