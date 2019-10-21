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
function fourthFunction (sentence) {

  var sentenceLength= sentence.length;
  var newNumber= sentenceLength/2;
  return sentence.charAt(newNumber);
}
//console.log(thirdFunction(sentence));

var thirdFunction = function(sentence) {
  var newStr = someFunction(sentence);
  var secondStr = anotherFunction(newStr)
  var thirdStr = fourthFunction (sentence);
  var resultStr = thirdStr + sentence + secondStr;
  /*
  //variant1
  var arrayStr = Array.from(resultStr).reverse();
  return arrayStr.join('');

  //variant2
  var resultStrReversed = "";
  for (let i=resultStr.length-1; i >= 0; i--) {
      resultStrReversed += resultStr.charAt(i)
  }
    return resultStrReversed
  */
  return resultStr
}

console.log(thirdFunction(sentence))

jQuery("#img1").click(function() {
  alert(sentence)
});

jQuery('#img2').click(function() {
  alert(thirdFunction(sentence))
})
