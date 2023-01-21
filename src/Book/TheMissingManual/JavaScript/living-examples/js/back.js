function makeBack(place, className) {
className = className || 'back';
historyLength = window.history.length;
	historyLength += (jQuery.browser=='msie') ? 1 : 0;
	if (historyLength>1) {
		var backLink = $('<a href="#" class="' + className + '"><small>Back</small></a>');
		backLink.click(function() {
				history.back();
				return false;
		});
		$(place).append(backLink);
	}
}