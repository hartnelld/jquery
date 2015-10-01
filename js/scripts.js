$(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $(function() {
    $(".clickable").click(function() {
      $("#walrus-showing").slideToggle();
      $("#walrus-hidden").slideToggle();
    });
  });

  $("img").hover(function() {
    alert("This is an image.");
  });

  $("h2").click(function() {
    alert("Hooray we have a headline element.");
  });

  $("ul").dblclick(function() {
    alert("A ul is here");
  });
});
