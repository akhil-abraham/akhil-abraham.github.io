$(document).ready(function() {
  $("#test").mouseenter(function(){
    $("#test").removeClass("invisible");
    $("#test").addClass("visible");
  });
  $("#test").mouseleave(function(){
    $("#test").removeClass("visible");
    $("#test").addClass("invisible");
  });
});
