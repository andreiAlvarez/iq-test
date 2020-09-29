// solution 

const iqTest = numbers => {
numbers = numbers.split(" ").map(el=> parseInt(el));
   var evenNum = numbers.filter(el=> el % 2 === 0);
  var oddNum = numbers.filter(el=> el % 2 === 1);
 
  return oddNum.length < evenNum.length ? (numbers.indexOf(oddNum[0]) + 1) : (numbers.indexOf(evenNum[0]) + 1);
};

