// business interface logic
// var makePPArray = function(n) {
//   var pingpongArray = [];
//   for (i=1; i<=n; i++) {
//     pingpongArray.push(i);
//   }
//   return pingpongArray;
// };

var makePPArray = function(n) {
  var pingpongArray = [];

  for (i=1; i<=n; i++) {
    if (i === 3) {
      pingpongArray.push("ping");
    } else {
      pingpongArray.push(i);
    }
  }

  return pingpongArray;
};


//user interface logic
$(document).ready (function() {
  $("form").submit (function() {
    event.preventDefault();
    var inputtedNumber = parseInt($("input#number").val());

    var pingpongArray = makePPArray(inputtedNumber);

    $("#results").empty();

    for(i=0;i<pingpongArray.length;i++) {

      $("#results").append("<li>" + pingpongArray[i] + "<\/li");
    }



  });
});
