
///Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
////1




function isDivisible(n, x, y)  { 
   
  let key = n
  
 if(n  % x == 0 && n % y == 0  ) { 
   return 'You did good job!!'
 }
else{
  return 'Try again!!'
} 

}

console.log(isDivisible(8,2,4)); 

  //  isDivisible(20,2,4)


  

