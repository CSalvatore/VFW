Ti.UI.backgroundColor = "#1b4d32";

var pWidth = Ti.Platform.displayCaps.platformWidth;

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryList = gallery.getDirectoryListing();

var numRows = 4;
var margin = 5;
var canWidth = pWidth - margin * (numRows);
var size = canWidth / numRows;

var win = Ti.UI.createWindow
(
	{
		backgroundColor: "#1b4d32",
		layout: "horizontal"
	}
);

var contain = Ti.UI.createScrollView	
(
	{
		layout: "horizontal",
		contentWidth: pWidth,
		top: 20
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
			height: size,
			width: size,
			left: margin * numRows,
			top: margin,
		}
	);

	contain.add(images);
};

win.add(contain);

win.open();