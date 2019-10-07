module.exports = function zeros(expression) {
  let arr = [];
  let number;
  let countFive =0;

  arr = expression.split('*');

  let count = 0;

  arr.forEach(item => {
    //let countFive = 0;
    count = 0;
    for(let i = 0; i< item.length; i++){
      if (item[i] === "!") count++;
    }

    let n = 1;
    number = Number(item.replace(/!/g, ''));

    while (number >= Math.pow(5, n)) {
      if (count === 2) {
        countFive += (Math.floor((number/Math.pow(5, n)))/2);
        n++;
        continue;
      }
      countFive += (Math.floor(number/Math.pow(5, n)));
      n++;
    }
  });
  return countFive;
}
