var getRandomInt = function (min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "gallery");
var galleryList = gallery.getDirectoryListing();

var numRows = 3;
var margin = 5;
var canWidth = pWidth - margin * (numRows);
var thumbSize = canWidth / numRows;
var size = thumbSize + 20;

var minimages = galleryList.length - galleryList.length + 1;
var maximages = galleryList.length - 1;
var index = getRandomInt(minimages, maximages);
var previndex = index;

var changeImage = function()
{
	var cont = true;
	do
	{
		index = getRandomInt(minimages, maximages);
	
		if(index === previndex)
		{
			continue;
		}
		else
		{
			randomimage.backgroundImage = "gallery/" + galleryList[index];
			previndex = index;
			cont = false;
		}
		
	}while(cont);
};

var randomwin = Ti.UI.createWindow
(
	{
		backgroundImage: "images/deviljho.jpg",
		title: "Random Image",
	}
);

var contain = Ti.UI.createScrollView	
(
	{
		layout: "horizontal",
		contentWidth: pWidth,
		bottom: 75,
	}
);

var random = Ti.UI.createView
(
	{
		backgroundColor: "#DEDEDE",
		borderRadius: 10,
		height: 50,
		width: 200,
		bottom: 10,
	}
);

var randomimagebutton = Ti.UI.createView
(
	{
		backgroundColor: "#DEDEDE",
		borderRadius: 10,
		height: 100,
		width: 250,
		bottom: 100,
	}
);

var randomimage = Ti.UI.createView
(
	{
		backgroundImage: "gallery/" + galleryList[index],
		height: 200,
		width: 300,
		top: 100,
	}
);

var randomlabel = Ti.UI.createLabel
(
	{
		text: "Random Image",
		font: {
			fontSize: "20px",
			fontFamily: "Arial",
		}
	}
);

var randomimagelabel = Ti.UI.createLabel
(
	{
		text: "Random Image",
		font: {
			fontSize: "30px",
			fontFamily: "Arial",
		}
	}
);

random.addEventListener('click', function(){
	navwin.openWindow(randomwin);
});

randomimagebutton.addEventListener('click', function(){
	changeImage();
});

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

random.add(randomlabel);
randomimagebutton.add(randomimagelabel);
randomwin.add(randomimage, randomimagebutton);
gallerywin.add(contain, random);