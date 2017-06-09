// business interface logic



//user interface logic
$(document).ready (function() {
  $("form").submit (function() {
    event.preventDefault();

    var inputtedNumber = parseInt($("input#number").val());

    $("#results").append("<li>" + inputtedNumber + "<\/li");




  });
});
