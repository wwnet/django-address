$(function () {
	$('input.address').each(function () {
		var self = $(this);
		var cmps = $('#' + self.attr('name') + '_components');
		var fmtd = $('input[name="' + self.attr('name') + '_formatted"]');
		self.geocomplete({
			details: cmps,
			detailsAttribute: 'data-geo',
			map: "#address-map",
			mapOptions: {
	    	zoom: 10
	  	},
			location: document.getElementsByName(self.attr('name') + '_latitude')[0].value + ',' + document.getElementsByName(self.attr('name') + '_longitude')[0].value,
	  	markerOptions: {
	    	draggable: true
	  	}
		}).change(function () {
			if (self.val() != fmtd.val()) {
				var cmp_names = [
					'country',
					'country_code',
					'locality',
					'postal_code',
					'route',
					'street_number',
					'state',
					'state_code',
					'formatted',
					'latitude',
					'longitude',
				];

				for (var ii = 0; ii < cmp_names.length; ++ii) {
					$('input[name="' + self.attr('name') + '_' + cmp_names[ii] + '"]').val('');
				}
			}
		}).bind("geocode:dragged", function(event, latLng) {
				$("input[name=" + self.attr('name') + "_latitude]").val(latLng.lat());
				$("input[name=" + self.attr('name') + "_longitude]").val(latLng.lng());
				// self.trigger("geocode");
    });
	});
});
