require.config({
	
	baseUrl: 'scripts/app',
	paths: {
		'map': '../vendor/map/map',
		'jquery': '../vendor/jquery/jquery-2.1.1',
		'backbone': '../vendor/backbone/backbone',
		'underscore': '../vendor/underscore/underscore',
		'text': '../vendor/requirejs/text'
	},
	shim: {
		'underscore': ['jquery'],
		'backbone': ['jquery', 'underscore']
	},
	deps: ['bootstrap']
	
});
