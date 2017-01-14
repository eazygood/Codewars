The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

Examples:

// === JavaScript ==

tickets([25, 25, 50]) // => YES 
tickets([25, 100])   // => NO. Vasya will not have enough money to give chang

//Solution

function tickets(peopleInLine){
  
  var total25bill = 0;
  var total50bill = 0;
  
  for (var i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      total25bill += 1; //gives 25$
     }
     if (peopleInLine[i] === 50) {
       total25bill -= 1; //gives 25$
       total50bill += 1; //takes 50$
     }
     if (peopleInLine[i] === 100) {
        if (total25bill >= 3 && total50bill == 0) {
          total25bill -= 3; //gives 2x25$
        } else {
          total25bill -= 1; //gives 25$
          total50bill -= 1; //gives 50$
        }
     }
     if (total25bill < 0 || total50bill < 0 ) { 
     return 'NO';
     }
   }
  return 'YES';
}
