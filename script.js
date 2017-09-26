$(document).ready(function() {
  $("#test").mouseEnter(function(){
    $("#test").removeClass("invisible");
    $("#test").addClass("visible");
  });
  $("#test").mouseExit(function(){
    $("#test").removeClass("visible");
    $("#test").addClass("invisible");
  });
});
