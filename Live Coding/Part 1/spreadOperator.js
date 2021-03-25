const hobby = ["swiming", "gaming"];
const newHobby = [...hobby, "karaoke", "hiking"];

console.log(newHobby);

const arr1 = [0,1,2]
const arr2 = [4,5,6]
const arr3 = [...arr1,3,...arr2]
console.log(arr3);

for(let i = 0; i < arr3.length;i++){
    console.log(arr3[i]);
}

const obj1 = {foo: "bar", x : 12}
const obj2 = {foo: "baz", y : 10}
const obj = {...obj1,...obj2}
console.log(obj)