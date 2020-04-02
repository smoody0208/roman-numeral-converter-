function numberInput(numbers) {
  var value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; //an array of values that match index of the roman numerals
  var romanNumeral = ["M","CM","D","CD","C","XC","L","XL","X","IX","V", "IV","I"]; //array of roman numerals in order from largest to smallest
  var result = ""; //empty string for result

  if(numbers<=0 || numbers>3900){
    alert("please enter different number"); //only allows numbers <0 and > than 3900
  }

  for (var index=0; index < 13; index++){ //loops through value array
    while (value[index] <= numbers) { //wait until the indexed number for the value array is less than the inputed #
      result += romanNumeral[index]; //push the roman numeral with the same index value as the value array to the result
      numbers -= value[index];
    }
  }
  return result;
}  

$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    event.preventDefault();
    var numbers = parseInt($("#number").val());
    var result = numberInput(numbers);
    $("ul").append("<li>"+result+"</li>")
  });
});