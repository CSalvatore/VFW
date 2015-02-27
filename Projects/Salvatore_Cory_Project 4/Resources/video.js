var phoneSizeW;
var phoneSizeH;

for (var i=0; i < 3; i++) 
{
	var button = Ti.UI.createView
	(
		{
			backgroundColor: "#DEDEDE",
			opacity: .75,
			borderColor: "#000",
			borderRadius: 10,
			height: 100,
			width: 200,
		}
	);
	
	var label = Ti.UI.createLabel
	(
		{
			font: {
				fontSize: '30px',	
				fontFamily: 'Arial',
			},
		}
	);

	if(i == 0)
	{
		button.top = 100;
		label.text = "TRAILER";
		button.addEventListener('click', function(){
			var videos = Ti.UI.createWindow
			(
				{
					backgroundColor: '#000',
					orientationModes: [
						Ti.UI.PORTRAIT,
						Ti.UI.UPSIDE_PORTRAIT,
						Ti.UI.LANDSCAPE_LEFT,
						Ti.UI.LANDSCAPE_RIGHT,
					],
				}
			);
			videos.title = "Trailer";
			videos.add(trailer);
			navwin.openWindow(videos);
		});
	}
	else if(i == 1)
	{
		button.top = 250;
		label.text = "GAMEPLAY";
		button.addEventListener('click', function(){
			var videos = Ti.UI.createWindow
			(
				{
					backgroundColor: '#000',
					orientationModes: [
						Ti.UI.PORTRAIT,
						Ti.UI.UPSIDE_PORTRAIT,
						Ti.UI.LANDSCAPE_LEFT,
						Ti.UI.LANDSCAPE_RIGHT,
					],
				}
			);
			videos.title = "Gameplay Trailer";
			videos.add(intro);
			navwin.openWindow(videos);
		});
	}
	else if(i == 2)
	{
		button.top = 400;
		label.text = "STORY";
		button.addEventListener('click', function(){
			var videos = Ti.UI.createWindow
			(
				{
					backgroundColor: '#000',
					orientationModes: [
						Ti.UI.PORTRAIT,
						Ti.UI.UPSIDE_PORTRAIT,
						Ti.UI.LANDSCAPE_LEFT,
						Ti.UI.LANDSCAPE_RIGHT,
					],
				}
			);
			videos.title = "Story Trailer";
			videos.add(story);
			navwin.openWindow(videos);
		});
	}
	
	button.add(label);
	videowin.add(button);
};

var changeSize = function(mode)
{
	phoneSizeW = Ti.Platform.displayCaps.platformWidth;
	phoneSizeH = Ti.Platform.displayCaps.platformHeight;
};

var trailer = Titanium.Media.createVideoPlayer
(
	{
    	autoplay : false,
    	backgroundColor : 'black',
    	height : phoneSizeH,
    	width : phoneSizeW,
    	mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    	scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
	}
);

var intro = Titanium.Media.createVideoPlayer
(
	{
    	autoplay : false,
    	backgroundColor : 'black',
    	height : phoneSizeH,
    	width : phoneSizeW,
    	mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    	scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
	}
);

var story = Titanium.Media.createVideoPlayer
(
	{
    	autoplay : false,
    	backgroundColor : 'black',
    	height : phoneSizeH,
    	width : phoneSizeW,
    	mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    	scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
	}
);

Ti.Gesture.addEventListener('orientationchange', function(events){
	changeSize(events.orientation);
});

trailer.url = "videos/MH4U_trailer.mp4";
story.url = "videos/MH4U_story.mp4";
intro.url = "videos/MH4U_introvideo.mp4";