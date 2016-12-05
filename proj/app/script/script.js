$(document).ready(function () {
	var heightY = $('#drag').height() / 2;
	var widthX = $('#drag').width() / 2;
	$('#drag').on('mousedown', function () {
		$('#drag').on('mousemove', function (e) {
			var posX = e.pageX - widthX;
			var posY = e.pageY - heightY;
			$('#drag').offset({
				top: posY
				, left: posX
			})
		})
	});
	$(document).on('mouseup', function () {
		$('#drag').off('mousemove');
	});
});