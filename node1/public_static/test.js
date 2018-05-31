$('button').click(function() {
	$.ajax({
		url: '/student',
		success: function(response) {
			$('h1').html(response);
		}
		});
	} 
);