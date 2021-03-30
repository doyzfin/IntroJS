const divideSort = (num) => {
  let numString = num.toString(); //Ubah Param ke String
  let numSplit = numString.split("0"); // Memishakn Param dengan patokan "0"
  let numMapping = numSplit.map((item) => item.split("").sort().join("")); // Proses mapping, kemudian split, sort, dan join
  let mapJoin = numMapping.join(""); // Proses menggabungkan lagi
  let numOut = parseInt(mapJoin); // Convert String ke number
  return numOut; // Mengembalikan nilai dari variable numOut
};
console.log(divideSort(5956560159466056));
