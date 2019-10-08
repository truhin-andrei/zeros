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

      if (count === 1) {
        while (number >= Math.pow(5, n)) {
        countFive += (Math.floor(number/Math.pow(5, n)));
        n++; 
        }
    }

      if ((count === 2) && (number%2 == 0)){
        let correct = 0;
        k=10;
        while (number/(10*k)>=1){
          correct +=Math.floor(number/(10*k));
          k+=10;
        }
        while (number >= Math.pow(2, n)) {
            countTwo += (Math.floor(number/Math.pow(2, n)));
            if(number >= Math.pow(10, n)){
            countFiveDouble += (Math.floor(number/Math.pow(10, n)));
            }
            n++; 
        }
        countFiveDouble += Math.floor(correct);
      }

      if ((count === 2) && (number%2 != 0)){
        let correct = 0;
        k=1;
        while (number/(10*k)>1){
          correct +=Math.floor(number/(10*k));
          k*=5;
        }

        while (number >= Math.pow(5, n)) {
          countFive += (Math.floor(number/Math.pow(5, n)));
          n++; 
        } 
        countFive -= Math.floor(correct);
           
      } 
                  
    });

   /* if (countFive>(countTwo-countTen)){
     
    }

    return Math.floor (countZero+countTwo+countTen);
    if (countFive<(countTwo-countTen)){
        return Math.floor (countZero+countFive+countTen)
    }*/
    return Math.floor (countFive+countFiveDouble/1);
      }
