var win = Ti.UI.createWindow
(
	{
		backgroundImage: "Link.jpg",
		title: "Main Menu"
	}
);

var navwin = Ti.UI.iOS.createNavigationWindow
(
	{
   		window: win
	}
);

require('secondary');

navwin.open();