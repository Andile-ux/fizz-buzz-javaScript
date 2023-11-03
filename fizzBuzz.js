function fizzBuzz() {
    for (let number = 1; number <= 100; number++) 
    {
        let divibleBy3 = number % 3 === 0;
        let divibleBy5 = number % 5 === 0;
      if (divibleBy3 && divibleBy5) 
      {
        console.log("FizzBuzz");
      } 
      else if (divibleBy3) 
      {
        console.log("Fizz");
      } 
      else if (divibleBy5) 
      {
        console.log("Buzz");
      }
      
      else 
      {
        console.log(number);
      }
    }
  }
  
  fizzBuzz();