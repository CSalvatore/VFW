Ti.UI.backgroundColor = "#1b4d32";

var win = Ti.UI.createWindow
(
	{
		backgroundColor: "#1b4d32",
		layout: "horizontal",
		title: "Space Gallery"
	}
);

var navwin = Ti.UI.iOS.createNavigationWindow
(
	{
   		window: win
	}
);

var scrollwin = Ti.UI.createWindow
(
	{
		backgroundColor: "#1b4d32",
		layout: "horizontal",
		title: "Space"
	}
);

require("secondary");

navwin.open();