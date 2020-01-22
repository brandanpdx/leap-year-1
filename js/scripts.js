$(document).ready(function() {
  // Front-end logic
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    
    $(".year").text(year);

    if (isNaN(year)) {
      alert("enter a number!")
    } else if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }


    $("#result").show();
  });
// Back-end logic
  var leapYear = function(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  };
  
});