let obj = { "prop1": 20, "prop2": "string" };
let arr = [1, 2, 3, 4, 5];
obj["prop3"] = arr;
arr[5] = 6;
console.log(JSON.stringify(obj));
