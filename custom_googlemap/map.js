getGoogleMap = function(TargetID, LatX, LatY, Name, Zoom, Marker, MarkerSizeWidth, MarkerSizeHeight) {
    	if (document.getElementById(TargetID) === null || undefined) {
    		console.log("'", TargetID, "'", " is not exist element ID to this page.");
    		return false;
    	} else {

			var myLatLng = new google.maps.LatLng(LatX, LatY); //マップの中心座標
			var myOptions = {
				zoom: Zoom, //ズームレベル
				center: myLatLng,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControlOptions: {
					mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'style']
				},
				name: Name
			};
      map = new google.maps.Map(document.getElementById(TargetID), myOptions);
			new google.maps.Marker({
				position: myLatLng, //アイコンの中心座標
				map: map,
				icon: {
					url: Marker,
					scaledSize: new google.maps.Size(MarkerSizeWidth, MarkerSizeHeight)
				} //アイコン画像
			});
			var mapstyle = [{
					"stylers": [{
						"saturation": -100
					}]
				},
				{
					"stylers": [{
						"visibility": "simplified"
					}]
				}
			];

			var mapType = new google.maps.StyledMapType(mapstyle, myOptions);
			map.mapTypes.set('style', mapType);
			map.setMapTypeId('style');
		} // end if
	}
