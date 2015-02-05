var mainwin = Ti.UI.createWindow
(
	{
		// Colors can be entered using either the name or a hex triplet (#ffffff)
		//backgroundColor: "black"
		backgroundColor: "#3a80d8",
		title: "SPAAAAAAAAAAAAAAAAAAAAAAAAAAACE!"
	}
);

var mainview = Ti.UI.createView
(
	{
		//backgroundColor: "#ffff00",
		//backgroundImage: "http://gambargadget.info/wp-content/uploads/2014/06/galaxy-tumblr-photography.jpg",
		backgroundImage: "galaxy-tumblr-photography.jpg",
		width: 200,
		height: 200,
		top: "10px"	
	}
);

var secview = Ti.UI.createView
(
	{
		backgroundImage: "stars.jpg",
		width: 200,
		height: 200,	
	}
);

var thirdview = Ti.UI.createView
(
	{
		backgroundImage: "comet.jpg",
		width: 200,
		height: 200,
		bottom: "10px"	
	}
);

var mainlabel = Ti.UI.createLabel
(
	{
		text: "So much Space, gotta see it all",
		color: "#ffffff",
		top: "420px"
	}
);

var seclabel = Ti.UI.createLabel
(
	{
		text: "Space, space, space, space",
		color: "#ffffff",
		bottom: "420px"
	}
);

mainwin.add(mainview);
mainwin.add(secview);
mainwin.add(thirdview);
mainwin.add(mainlabel);
mainwin.add(seclabel);

mainwin.open();