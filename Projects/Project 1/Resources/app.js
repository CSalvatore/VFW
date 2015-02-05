var videogameArray = ["Call of Duty: AW", "Halo: MCC", "Evolve", "Super Smash Bros", "Battlefield Hardline"];

var win = Ti.UI.createWindow
(
	{
		title: "Video Games",
		backgroundImage: "Link.jpg"
	}
);

var arrayView = Ti.UI.createView
(
	{
		backgroundImage: "smashbros.jpg",
		height: 200,
		width: 350,
		top: 150
	}
);

var button1 = Ti.UI.createView
(
	{
		backgroundColor: "#D6D3D9",
		height: 75,
		width: 150,
		bottom: 50,
		left: 30
	}
);

var button2 = Ti.UI.createView
(
	{
		backgroundColor: "#D6D3D9",
		height: 75,
		width: 150,
		bottom: 50,
		right: 30
	}
);

var arrayLabel = Ti.UI.createLabel
(
	{
		text: videogameArray[3],
		color: "#ffffff",
		top: 100,
	}
);

arrayLabel.font = 
	{
		fontSize: 24,
		fontFamily: "monospace",
	};

var buttonLabel1 = Ti.UI.createLabel
(
	{
		text: "Previous",
		bottom: 75,
		left: 65
	}
);

var buttonLabel2 = Ti.UI.createLabel
(
	{
		text: "Next",
		bottom: 75,
		right: 85
	}
);

buttonLabel1.font = 
	{
		fontSize: 18,
		fontFamily: "monospace",
	};
	
buttonLabel2.font = 
	{
		fontSize: 18,
		fontFamily: "monospace",
	};

win.add(arrayView);
win.add(button1);
win.add(button2);
win.add(arrayLabel);
win.add(buttonLabel1);
win.add(buttonLabel2);

win.open();
