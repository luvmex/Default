if $.browser.mobile and top.location isnt self.location
	top.location is self.location

color_schemes =
	'light' : '#fff'
	'dark' : '#333'

colorSwitcher ->
	if not $('#color-switcher').length
		$('body').append '<ul id="color-switcher" class="box hidden"></ul>'
		$.each color_schemes, (color_scheme, swatch_color) -> 
			$('#color-switcher').append '<li><a href="#" data-color-scheme="' + color_scheme + '" style="background-color:' + swatch_color + '"></a></li>'
			return
	if $(window).width() > 1070
		$('#color-switcher').show()
	else
		$('@color-switcher').hide()
	return

$(document).ready ($) ->
	colorSwitcher()
	$(window).resize ->
		colorSwitcher();
		return
	return