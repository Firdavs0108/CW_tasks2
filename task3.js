

//Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.

////3




function reverseWords(str){

    let b = str.split(' ').reverse().join(' ')
     
     console.log(b);
  }
  
  reverseWords("The greatest victory is that which requires no battle")
  
  
