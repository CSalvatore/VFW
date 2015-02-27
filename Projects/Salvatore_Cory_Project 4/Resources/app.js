var mainwin = Ti.UI.createWindow
(
	{
		title: "MH4U",
		backgroundImage: "images/rathian.jpg",
		navBarHidden: true,
		statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
	}
);

var navwin = Ti.UI.iOS.createNavigationWindow
(
	{
   		window: mainwin
	}
);

var gallerywin = Ti.UI.createWindow
(
	{
		title: "Gallery",
		backgroundImage: "images/zinogre.jpg",
	}
);

var listwin = Ti.UI.createWindow
(
	{
		title: "Info",
		backgroundColor: "#fff",
	}
);

var videowin = Ti.UI.createWindow
(
	{
		title: "Videos",
		backgroundImage: "images/daora.jpg",
		orientationModes: [
			Ti.UI.PORTRAIT,
			Ti.UI.UPSIDE_PORTRAIT,
			Ti.UI.LANDSCAPE_LEFT,
			Ti.UI.LANDSCAPE_RIGHT,
		],
	}
);

require('secondary');
require('list');
require('gallery');
require('video');

navwin.open();