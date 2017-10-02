$(document).ready(function() {
  $(".invisible").hover(function(){
    $(this).removeClass("invisible");
    $(this).addClass("visible");
  },
  function(){
    $(this).removeClass("visible");
    $(this).addClass("invisible");
  });
});
