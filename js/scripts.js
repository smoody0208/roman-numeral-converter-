function toRomanNumerals(num){
  var result = [];
  var numbers = ['1000', '900', '500', '400', '100', '90', '50', '40', '10', '9', '5', '4', '1'];
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  if (num<=0 || num>3999) {
    alert("please enter different number");

  } 

$(document).ready(function(){
  $("form#numberInput").submit(function(event){
    event.preventDefault();

    var num = $("#number").val()
    var result = toRomanNumerals(num)

    result.show();
  });
});