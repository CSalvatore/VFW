var statusbar = Ti.UI.createView
(
	{
		backgroundColor: "#000",
		height: 20,
		top: 0,
	}
);

var infoview = Ti.UI.createView
(
	{
		backgroundColor: "#DEDEDE",
		height: 50,
		top: 20,
	}
);

var info = Ti.UI.createLabel
(
	{
		font: {
			fontSize: '20px',
			fontFamily: 'Arial',
		},
		text: "1502 Cory Salvatore",
	}
);

var buttonbar = Ti.UI.createView
(
	{
		backgroundColor: "#DEDEDE",
		opacity: .75,
		bottom: 20,
		height: 65,
	}
);

for (var i=0; i < 3; i++) 
{
	var button = Ti.UI.createView
	(
		{
			backgroundColor: "transparent",
			borderColor: "#000",
			borderRadius: 10,
			height: 50,
			width: 75,
		}
	);
	
	var label = Ti.UI.createLabel
	(
		{
			font: {
				fontSize: '14px',	
				fontFamily: 'Arial',
			},
		}
	);

	if(i == 0)
	{
		button.left = 30;
		label.text = "GALLERY";
		button.addEventListener('click', function(){
			navwin.openWindow(gallerywin);
		});
	}
	else if(i == 1)
	{
		button.center = 0;
		label.text = "LIST";
		button.addEventListener('click', function(){
			navwin.openWindow(listwin);
		});
	}
	else if(i == 2)
	{
		button.right = 30;
		label.text = "VIDEO";
		button.addEventListener('click', function(){
			navwin.openWindow(videowin);
		});
	}
	
	button.add(label);
	buttonbar.add(button);
};

infoview.add(info);
mainwin.add(infoview, statusbar, buttonbar);