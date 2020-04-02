function numberInput(num) {
  var value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; //an array of values that match index of the roman numerals
  var romanNumeral = ["M","CM","D","CD","C","XC","L","XL","X","IX","V", "IV","I"]; //array of roman numerals in order from largest to smallest
  var result = ""; //empty string for result

  if(num<=0 || num>3900){
    alert("please enter different number"); //only allows numbers <0 and > than 3900
  }

  for (var index=0; index < value.length; index++){ //loops through value array
    while (value[index] <= num) { //wait until the indexed number for the value array is less than the inputed #
      result += romanNumeral[index]; //push the roman numeral with the same index value as the value array to the result
      num -= value[index];
    }
  }
  return result;
}  

$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());
    var result = numberInput(number);
    $("ul").append("<li>"+result+"</li>")
  });
});