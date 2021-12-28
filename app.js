/*
// We want to play a "Game of 3s". Here's how you play it:

// First, you pick a random number. Then, repeatedly do the following:

// If the number is divisible by 3, divide it by 3.
// If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
// The game stops when you reach "1".

// Challenge Description
// The input is a single number: the number at which the game starts. Write a program that plays the 3s game, and outputs a valid sequence of steps you need to take to get to 1.
 Each step should be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.

// Input Description
// The input is a single number: the number at which the game starts.

// gameOfThree(100);
// Output Description
// The output is a list of valid steps that must be taken to play the game. Each step is represented by the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.

// //OUTPUT:
// 100 -1
// 33 0
// 11 1
// 4 -1
// 1
*/


 function gameOfThree(n){
    console.log(n);
for (let i = 0;  i< n; i++) {
   
    if(n%3==0){
      n=n/3;
      console.log("result 0");   
      console.log(n);
    } else if(n%3!=0){
        console.log("result -1");
         if(n%3==1){
          n--;
          console.log("subtracting 1");
         }else{
          n++;
          console.log("adding 1");
          }
          console.log(n);
         if(n%3==0){
            n=n/3;
            console.log(n);
            console.log("result 0");
            
           
        }
    }
}


    return 1;
 }






gameOfThree(100);