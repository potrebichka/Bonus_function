var sentence = prompt("Enter a sentence: ");
console.log(sentence);

var someFunction = function(sentence) {
  return (sentence.charAt(0) + sentence.charAt(sentence.length-1)).toUpperCase()
}

//console.log(someFunction(sentence));

var anotherFunction = function(sentence) {
  return (sentence.charAt(sentence.length-1) + sentence.charAt(0)).toUpperCase()
}

//console.log(anotherFunction(sentence))

var thirdFunction = function(sentence) {
  var newStr = someFunction(sentence);
  var secondStr = anotherFunction(newStr)
  return sentence + secondStr;
}

//console.log(thirdFunction(sentence));

function fourthFunction (sentence) {

  var sentenceLength= sentence.length;
  var newNumber= sentenceLength/2;
  return sentence.charAt(newNumber);

}

console.log(fourthFunction(sentence))
