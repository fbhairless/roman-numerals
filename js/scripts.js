var romanNumerailConversion = function(inputValue) {
//debugger;
var answer = "";
  console.log("i hate this shit");
if (inputValue < 1 || inputValue > 3999)
  console.log("ERROR");
  while (inputValue >= 3000) {
    answer += "M";
    inputValue -= 1000;
    console.log("answer =" + answer);
}
  while (inputValue >= 2000) {
    answer += "M";
    inputValue -= 1000; }
  while (inputValue >= 1000){
    answer += "M";
    inputValue -= 1000; }
  while (inputValue >= 900) {
    answer += "CM";
    inputValue -= 900; }
  while (inputValue >= 500); {
    answer += "D";
    inputValue -= 500; }
  while (inputValue >= 400); {
    answer += "CD";
    inputValue -= 400; }
  while (inputValue >= 100); {
     answer += "C";
     inputValue -= 100; }
   while (inputValue >= 90); {
     answer =+ "XC";
     inputValue -= 90; }
   while (inputValue >= 50); {
     answer =+ "L";
     inputValue -= 50; }
   while (inputValue >= 40); {
     answer =+ "XL";
     inputValue -= 40; }
   while (inputValue >= 10) {
     answer =+ "X";
     inputValue -= 10; }
   while (inputValue >= 9); {
     answer =+ "IX";
     inputValue -= 9; }
   while (inputValue >= 5); {
     answer =+ "V";
     inputValue -= 5; }
   while (inputValue >= 4); {
     answer =+ "IV";
     inputValue -= 4; }
   while (inputValue >= 1); {
     answer += "I";
     inputValue -= 1; }
   return answer;
     alert(answer);
 }

$(document).ready(function() {
  $(".form-group").submit(function(event){
    event.preventDefault();
    var inputValue = $("input#inputValue").val();
    var processedNumber = romanNumerailConversion(inputValue);
    $(".answer p").text(processedNumber);
  });
});
