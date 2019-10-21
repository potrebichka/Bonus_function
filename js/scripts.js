var sentence = prompt("Enter a sentence: ");
console.log(sentence);

var someFunction = function(sentence) {
  return (sentence.slice(0,1) + sentence.slice(-1)).toUpperCase()
}

console.log(someFunction(sentence));

var anotherFunction = function(sentence) {
  return someFunction(sentence).slice(1,2)+someFunction(sentence).slice(0,1)
}

console.log(anotherFunction(sentence))
