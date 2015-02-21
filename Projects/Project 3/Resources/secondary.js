var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryList = gallery.getDirectoryListing();

var numRows = 4;
var margin = 5;
var canWidth = pWidth - margin * (numRows);
var size = canWidth / numRows;

var viewsCollection = [];

var photo = [];

var contain = Ti.UI.createScrollView	
(
	{
		layout: "horizontal",
		contentWidth: pWidth,
		top: 20
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
			left: margin,
			top: margin,
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
	
	var showImage = function(item){
		scrollableView.currentPage = item.index;
		navwin.openWindow(scrollwin);
	};
	
	images.addEventListener('click', function(item){
		showImage(item.source);
		console.log(item.source.index);
	});

	contain.add(images);
	photo.push(scrollimage);
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