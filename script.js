$(document).ready(function() {
  $("#test").hover(function(){
    $("#test").removeClass("invisible");
    $("#test").addClass("visible");
  },
  (function(){
    $("#test").removeClass("visible");
    $("#test").addClass("invisible");
  });
});
