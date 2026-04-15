$(document).ready(function() {
	if ($('div[day]').length) {
		$('.container-footer').swipe({
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
				if (direction == 'left' || direction == 'right') {
					var t = 0;
					var d = parseInt($('div.visible').attr('day'));
					if (direction == 'right') {
						t = d == 1 ? 5 : d - 1;
					} else if (direction == 'left') {
						t = d == 5 ? 1 : d + 1;
					}
					$('div.visible').removeClass('visible');
					$('div[day="' + t + '"]').addClass('visible');
					$('div.active').removeClass('active');
					$('div[dayf="' + t + '"]').addClass('active');
				}
			}, threshold: 75, allowPageScroll: 'vertical'
		});
		$('.container-footer .btn').on('click', function() {
			var t = $(this).attr('dayf');
			t = parseInt(t);
			$('div.visible').removeClass('visible');
			$('div[day="' + t + '"]').addClass('visible');
			$('div.active').removeClass('active');
			$('div[dayf="' + t + '"]').addClass('active');
		});
	}
	$('#menuTrig1').click(function() {
		$('#pageMenu').show();
	});
	$('#pageItems1').click(function() {
		$('#pageMenu').hide();
	});

	$('.pageMenuMain').mouseleave(function() {
		$('.pageMenuMain').hide();
	});
	$(document).on('touchstart', function(event) {
	    if (!$(event.target).is("#pageMenu, a") && !$(event.target).is("#menuTrig1, img")) {
	        $("#pageMenu").hide();
	    }
	});
});

function get_timetable() {
	window.location.href = "overview.php?d=" + $('#days').find(":selected").val() + "&h=" + $('#hours').find(":selected").val();
}