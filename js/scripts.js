$(document).ready(function() {
  // Front-end logic
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
// Back-end logic
  var leapYear = function(year) {
    return false;
  };
  
});