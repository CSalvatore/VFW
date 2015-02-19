var pWidth = Ti.Platform.displayCaps.platformWidth;

var win = Ti.UI.createWindow
(
	{
		backgroundColor: "#fff",
	}
);

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryList = gallery.getDirectoryListing();

//var imageArray = ["galaxy.jpg", "horizon.jpg", "meteors.jpg", "planets.jpg", "space.jpg"];

var contain = Ti.UI.createScrollView	
(
	{
		layout: "horizontal",
		contentWidth: pWidth
	}
);

for (var i=0; i < galleryList.length; i++)
{	
	var images = Ti.UI.createImageView
	(
		{
			image: "images/" + galleryList[i],
			clipMode: Ti.UI.iOS.CLIP_MODE_ENABLED,
			borderColor: "#fff",
		}
	);

	contain.add(images);
};

win.add(contain);

win.open();

// Ti.UI.backgroundColor = "#fff";
// 
// var win = Ti.UI.createWindow
// (
	// {
		// backgroundColor: "#fff",
		// layout: "horizontal", // allows for wrapping
		// // layout: "vertical", allows wide and vertical lists 
		// top: 20
	// }
// );
// 
// var numViews = 10;
// var margin = 5;
// var size = 80;
// var typeSize = size / margin;
// 
// var makeViews = function()
// {
	// for (var i=0; i < numViews; i++) 
	// {
		// var newView = Ti.UI.createView
		// (
			// {
				// backgroundColor: "red",
				// borderColor: "black",
				// width: size,
				// height: size,
				// left: margin,
				// bottom: margin,
			// }
		// );
// 		
		// var newLabel = Ti.UI.createLabel
		// (
			// {
				// color: "#fff",
				// text: "Square #" + i,	
				// font: {fontSize: typeSize}
			// }
		// );
// 		
		// newView.add(newLabel);
		// win.add(newView);
	// };
// 
// };
// 
// makeViews();
// 
// win.open();