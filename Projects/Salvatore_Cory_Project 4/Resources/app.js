var getRandomInt = function (min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) + min);
};

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
		layout: "horizontal",
		title: "Monster Gallery",
		backgroundColor: "#fff",
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
		title: "Trailer",
		backgroundColor: "#fff",
	}
);

require('secondary')
require('list')

navwin.open();