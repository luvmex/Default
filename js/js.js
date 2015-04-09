(function() {
  var counter, _i;

  $(document).ready(function() {
    var links, nextKin, para, parent, twin;

    links = $("a");
    para = $("<p>");
    para.addClass("bar");
    newPara.toggleClass("bar");
    $("a").click(function() {
      return code;
    });
    $("body").append($("<p>"));
    $("img:first").attr("alt", "Me");
    parent = $("#contact").parent();
    twin = $("#contact").clone();
    twin = $("#contact").empty();
    return nextKin = $("#contact").next();
  });

  for (counter = _i = 0; _i <= 20; counter = ++_i) {
    if (counter % 3 === 0 && counter % 4 === 0) {
      show(counter);
    }
  }

  if ($("#contact").is(":empty")) {
    $(this).addClass("counter");
  }

}).call(this);
