var main = function() {
	$("#lg").hover(function() {
		$("#lg h2").toggleClass('hidden');
		$("#lg p").toggleClass('hidden');
	})

	$("#sg").hover(function() {
		$("#sg h2").toggleClass('hidden');
		$("#sg p").toggleClass('hidden');
	})

	$("#other").hover(function() {
		$("#other h2").toggleClass('hidden');
		$("#other p").toggleClass('hidden');
	})

};

$(document).ready(main);