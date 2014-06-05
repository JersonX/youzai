define( [ 'map' ], function() {
	window.BMap_loadScriptTime = (new Date).getTime();
	
		var map = new BMap.Map("allmap");
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
		map.setMapStyle( {
			style : 'dark'
		});
		map.enableScrollWheelZoom();
		var local = new BMap.LocalSearch(map, {
			renderOptions : {
				map : map,
				autoViewport : true
			}
		});
		local.searchNearby("–°≥‘", "«∞√≈");
});
