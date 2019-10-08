module.exports = function zeros(expression) {
  let arr = [];
    let number;
    let countFive =0,
    countTwo =0,
    countTen =0,
    countZero =0,
    countFiveDouble=0;
  
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

      if ((count === 2) && (number%2 == 0)){
        while (number >= Math.pow(2, n)) {
            countTwo += (Math.floor(number/Math.pow(2, n)));
            if(number >= Math.pow(10, n)){
            countTen += (Math.floor(number/Math.pow(10, n)));
        }
            n++; 
            }
      }

      if ((count === 2) && (number%2 != 0)){
        while (number >= Math.pow(5, n)) {
            countFive += (Math.floor(number/Math.pow(5, n)));
            n++; 
            } 
    }

    if (count === 1) {
        while (number >= Math.pow(5, n)) {
        countZero += (Math.floor(number/Math.pow(5, n)));
        n++; 
        }
    }
              
    });
    if (countFive>(countTwo-countTen)){
        return Math.floor (countZero+countTwo+countTen);
    }
    if (countFive<(countTwo-countTen)){
        return Math.floor (countZero+countFive+countTen)
    }
      }
