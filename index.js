const add = require("date-fns/add");

let result = (days) => {
  return add(new Date(2020, 7, 22), days);
};
module.exports = result;

let answer = result(3);
console.log(answer);
