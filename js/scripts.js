// business interface logic

var makePPArray = function(n) {
  var pingpongArray = [];

  for (i=1; i<=n; i++) {
    if (i % 15 === 0) {
      pingpongArray.push("ping-pong");
    } else if (i % 5 === 0) {
      pingpongArray.push("pong");
    } else if (i % 3 === 0) {
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

    // for(i=0;i<pingpongArray.length;i++) {
    //   alert ("let's fill");
    //   $("#result").html(pingpongArray[i]);
    //   alert ("filled");
    // }

    var count = 0;
    function pingpongSequence() {
      if (pingpongArray[count] === "0") {
        $( "#result" ).removeClass( "ping pong ping_pong" );
      }

      if (pingpongArray[count] === "ping") {
        $( "#result" ).addClass( "ping" ).removeClass("pong ping_pong");
      }
      if (pingpongArray[count] === "pong") {
        $( "#result" ).addClass( "pong" ).removeClass("ping ping_pong");
      }
      if (pingpongArray[count] === "ping-pong") {
        $( "#result" ).addClass( "ping_pong" ).removeClass("pong ping");
      }
      $("#result").text(pingpongArray[count]);
      count < pingpongArray.length ? count++ : clearInterval(pingpongSequence);
    }
    setInterval(pingpongSequence, 500);



  });
});
