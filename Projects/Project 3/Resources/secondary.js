var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryList = gallery.getDirectoryListing();

var numRows = 4;
var margin = 5;
var canWidth = pWidth - margin * (numRows);
var thumbSize = canWidth / numRows;
var size = thumbSize + 20;

var photo = [];

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
			image: "images/" + galleryList[i],
			clipMode: Ti.UI.iOS.CLIP_MODE_ENABLED,
			borderColor: "#fff",
			height: size,
			width: size,
			index: i,
		}
	);
	
	var scrollimage = Ti.UI.createView
	(
		{
			backgroundImage: "images/" + galleryList[i],
			height: 200,
			width: 300,
		}
	);
	
	var zoom = Ti.UI.createScrollView
	(
		{
			maxZoomScale: 2.0
		}
	);
	
	var thumbnail = Ti.UI.createView
	(
		{
			height: thumbSize,
			width: thumbSize,
			top: margin,
			left: margin,
		}
	);
	
	var showImage = function(item){
		scrollableView.currentPage = item.index;
		navwin.openWindow(scrollwin);
	};
	
	images.addEventListener('click', function(item){
		showImage(item.source);
		console.log(item.source.index);
	});
	
	thumbnail.add(images);
	contain.add(thumbnail);
	zoom.add(scrollimage);
	photo.push(zoom);
};

var scrollableView = Ti.UI.createScrollableView
(
	{
		views: photo,
		showPagingControl: true,
	}
);

scrollwin.add(scrollableView);
win.add(contain);