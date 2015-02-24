var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.createWindow
(
	{
		backgroundColor: "#fff"
	}
);

var view1 = Ti.UI.createImageView
(
	{
		image: "pokeball.jpg",
		width: pWidth
	}
);

var view2 = Ti.UI.createImageView
(
	{
		image: "avengers.jpg",
		width: pWidth
	}
);

var zoom1 = Ti.UI.createScrollView
(
	{
		maxZoomScale: 2.0,
	}
);

var zoom2 = Ti.UI.createScrollView
(
	{
		maxZoomScale: 2.0,
	}
);

var viewsContainer = [zoom1, zoom2];

var swipe = Ti.UI.createScrollableView
(
	{
		views: viewsContainer,
		showPagingControl: true,
	}
);

zoom1.add(view1);
zoom2.add(view2);
win.add(swipe);

win.open();
