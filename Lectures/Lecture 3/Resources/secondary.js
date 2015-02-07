//console.log(message);

//Order matters
//var message = "Hello World.";

//exports.message = message;

var view1 = Ti.UI.createView
(
	{
		backgroundColor: "#ff3b54",
		width: 100,
		height: 100,
		top: 200,
	}
);

var view2 = Ti.UI.createView
(
	{
		backgroundColor: "#ff3b54",
		width: 100,
		height: 100,
		top: 310,
	}
);

var view3 = Ti.UI.createView
(
	{
		backgroundColor: "#ff3b54",
		width: 100,
		height: 100,
		top: 420,
	}
);

view1.addEventListener('click', function(){
	alert("I've Been Pressed!");
});

view2.addEventListener('dblclick', function(){
	var view4 = Ti.UI.createView
(
	{
		backgroundImage: "imgres.jpg",
	}
);
	win.add(view4);
});

view3.addEventListener('swipe', function(){
	var music = Ti.Media.createMusicPlayer
	(
		{
			play: "Shy Glizzy - Awwsome.mp3",
		}
	);
});

win.add(view1);
win.add(view2);
win.add(view3);
