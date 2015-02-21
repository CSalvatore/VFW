var phoneSize;

var win = Ti.UI.createWindow
(
	{
		backgroundColor: "#fff",
		orientationModes: [
			Ti.UI.PORTRAIT,
			Ti.UI.UPSIDE_PORTRAIT,
			Ti.UI.LANDSCAPE_LEFT,
			Ti.UI.LANDSCAPE_RIGHT,
		],
	}
);

var view = Ti.UI.createView
(
	{
		backgroundColor: "297ab3",
		width: 100,
		height: 100,
	}
);

var changeSize = function(mode)
{
	phoneSize = Ti.Platform.displayCaps.platformWidth;
	view.width = phoneSize/2;
	if(mode === 3)
	{
		view.backgroundColor = "red";
	}
	else
	{
		view.backgroundColor = "blue";
	}
};

Ti.Gesture.addEventListener('orientationchange', function(events){
	changeSize(events.orientation);
	console.log(phoneSize);
});

win.add(view);

win.open();
// 
// var viewsCollection = [];
// 
// var data = [
	// {color: "red", name: "Roses"},
	// {color: "blue", name: "Ocean"},
	// {color: "green", name: "Grass"},
	// {color: "yellow", name: "Sunshine"},
// ];
// 
// for (var i=0; i < data.length; i++) 
// {
		// var view = Ti.UI.createView
		// (
			// {
				// backgroundColor: data[i].color,
				// name: data[i].name,
			// }
		// );
// 		
		// var label = Ti.UI.createLabel
		// (
			// {
				// text: data[i].name,
			// }
		// );
// 		
		// view.add(label);
		// viewsCollection.push(view);
// };
// 
// var scrollableView = Ti.UI.createScrollableView
// (
	// {
		// views: viewsCollection,
		// showPagingControl: true,
	// }
// );
// 
// scrollableView.addEventListener('scrollend', function(eventData)
// {
	// if(eventData.currentPage === 3)
	// {
		// alert("You are looking at Yellow");
	// };
// });
// 
// win.add(scrollableView);
// 
// win.open();