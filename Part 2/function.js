function test() {
  return console.log("test");
}
test();

const test2 = function () {
  return console.log("test2");
};

const test3 = () => {
  return console.log("test3");
};

const additional = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
  }
  const penjumlahan = num1 + num2;
  return penjumlahan;
};
console.log(additional(1, 2));
