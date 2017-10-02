$(document).ready(function() {
  $(".visible").hover(function(){
    $(this).removeClass("invisible");
    $(this).addClass("visible");
  },
  function(){
    $(this).removeClass("visible");
    $(this).addClass("invisible");
  });
});
