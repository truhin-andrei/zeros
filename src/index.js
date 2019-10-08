module.exports = function zeros(expression) {
  let arr = [];
  let countFive =0,
    countTwo =0,
    countFiveDouble=0;
  
  arr = expression.split('*');
  
  let count = 0;
  
  arr.forEach(item => {
      
    count = 0;

    for(let i = 0; i< item.length; i++){
      if (item[i] === "!") count++;
    }
  
    let n = 1;
    let number = Number(item.replace(/!/g, ''));

    if (count === 1) {
      while (number >= Math.pow(5, n)) {
        countFive += (Math.floor(number/Math.pow(5, n)));
        n++; 
      }
      n=1;
      while (number >= Math.pow(2, n)) {
        countTwo += (Math.floor(number/Math.pow(2, n)));
        n++; 
      }
    }

    if ((count === 2) && (number%2 == 0)){
      let correct = 0;
        
      if (number/(50)>=1){
        correct ++;
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

  if ((countFive+countFiveDouble)==0 || countTwo == 0) return 0;
   
  return Math.floor (countFive+countFiveDouble);
}
