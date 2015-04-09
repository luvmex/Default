(function() {
  var color_schemes;

  if ($.browser.mobile && top.location !== self.location) {
    top.location === self.location;
  }

  color_schemes = {
    'light': '#fff',
    'dark': '#333'
  };

  colorSwitcher(function() {
    if (!$('#color-switcher').length) {
      $('body').append('<ul id="color-switcher" class="box hidden"></ul>');
      $.each(color_schemes, function(color_scheme, swatch_color) {
        $('#color-switcher').append('<li><a href="#" data-color-scheme="' + color_scheme + '" style="background-color:' + swatch_color + '"></a></li>');
      });
    }
    if ($(window).width() > 1070) {
      $('#color-switcher').show();
    } else {
      $('@color-switcher').hide();
    }
  });

  $(document).ready(function($) {
    colorSwitcher();
    $(window).resize(function() {
      colorSwitcher();
    });
  });

}).call(this);
