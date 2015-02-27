var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "gallery");
var galleryList = gallery.getDirectoryListing();

var numRows = 3;
var margin = 5;
var canWidth = pWidth - margin * (numRows);
var thumbSize = canWidth / numRows;
var size = thumbSize + 20;

var contain = Ti.UI.createScrollView	
(
	{
		layout: "horizontal",
		contentWidth: pWidth,
		top: 20,
	}
);

for (var i = 0; i < galleryList.length; i++)
{
	var images = Ti.UI.createImageView
	(
		{
			image: "gallery/" + galleryList[i],
			clipMode: Ti.UI.iOS.CLIP_MODE_ENABLED,
			borderColor: "#fff",
			height: size,
			width: size,
			index: i,
		}
	);
	console.log(images.image);
	
	var thumbnail = Ti.UI.createView
	(
		{
			height: thumbSize,
			width: thumbSize,
			top: margin,
			left: margin,
		}
	);
	
	thumbnail.add(images);
	contain.add(thumbnail);
};

gallerywin.add(contain);