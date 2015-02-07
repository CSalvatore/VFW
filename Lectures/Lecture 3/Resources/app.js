//var message = "Hello World.";
//var command;

//var myFunc = function()
//{	
	//console.log(message);
	
	//command = "Do Things.";
//};

//console.log(command);

//Require Example
//var message = "Hello World.";

//require('secondary');

//Order matters
//var loadFile = require('secondary');

//console.log(loadFile.message);

var win = Ti.UI.createWindow
(
	{
		backgroundColor: "#353a4a"
	}
);

require('secondary');


//Review and Buttons(Events)
//var win = Ti.UI.createWindow
//(
	//{
		//backgroundColor: "#414C4A",
	//}
//);

//var view = Ti.UI.createView
//(
	//{
		//backgroundColor: "#CCFBFF",
		//height: 200,
		//width: 200,
		//borderRadius: 20,
	//}
//);

//button for view
//view.addEventListener("click", function(event)
	//{
		//alert("I've been clicked");
		//console.log(event);
	//}
//);

win.open();