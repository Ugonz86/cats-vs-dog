$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Meow</li>");
    $("ul#webpage").prepend("<li>Woof!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#webpage").prepend("<li>Woof! Woof!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#fight").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#webpage").prepend("<li><img src=img/catdog.jpg></li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Meow meow meow meow!</li>");
    $("ul#webpage").prepend("<li>Grrrrrr!</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
  });
});
});
