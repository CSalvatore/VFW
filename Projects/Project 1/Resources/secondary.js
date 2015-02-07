var videogameArray = ["Call of Duty: AW", "Halo: MCC", "Evolve", "Super Smash Bros", "Battlefield Hardline"];
var imageArray = ["codaw.jpg", "halomcc.jpg", "evolve.jpg", "smashbros.jpg", "bfhardline.jpg"];
var count = 0;

var arrayView = Ti.UI.createView
(
	{
		backgroundImage: "codaw.jpg",	
		height: 200,
		width: 350,
		top: 150
	}
);

var button1 = Ti.UI.createView
(
	{
		backgroundColor: "#979C98",
		height: 75,
		width: 150,
		bottom: 50,
		left: 30
	}
);

var button2 = Ti.UI.createView
(
	{
		backgroundColor: "#979C98",
		height: 75,
		width: 150,
		bottom: 50,
		right: 30
	}
);

var arrayLabel = Ti.UI.createLabel
(
	{
		text: videogameArray[0],
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
	
button1.addEventListener('click', function(){
	if (count == 0)
	{
		count = 4;
	}
	else
	{
		count--;
	}
	arrayLabel.text = videogameArray[count];
	arrayView.backgroundImage = imageArray[count];
});

button2.addEventListener('click', function(){
	if (count == 4)
	{
		count = 0;
	}
	else
	{
		count++;
	}
	arrayLabel.text = videogameArray[count];
	arrayView.backgroundImage = imageArray[count];
});

win.add(arrayView);
win.add(button1, button2);
win.add(arrayLabel, buttonLabel1, buttonLabel2);