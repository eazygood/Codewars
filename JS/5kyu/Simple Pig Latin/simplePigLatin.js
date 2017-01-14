Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

function pigIt(str){
  return str.split(' ').map(function(arg) {
    return arg.slice(1) + arg.slice(0,1) + 'ay';
  }).join(' ');
}
