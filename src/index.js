
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix === undefined) {
    return arr;
  }
  let i = 0;
  matrix.forEach(element => {
    if (i%2===0){
      element.forEach(k => arr.push(k));
    } else {
      let temp = [];
      for (let j = element.length - 1; j > -1; j--){
        temp.push(element[j]);
      }
      temp.forEach(k => arr.push(k));
    }
    i++;
  });
  return arr;
}
