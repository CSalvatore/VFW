var xboxEx = [
	{title: "Sunset Overdrive"},
	{title: "Dead Rising 3"},
	{title: "Ryse: Son of Rome"},
	{title: "Fable Legends"},
	{title: "Quantum Break"}
];

var ps4Ex = [
	{title: "The Order: 1886"},
	{title: "Street Fighter V"},
	{title: "Uncharted 4"},
	{title: "No Man's Sky"},
	{title: "Planetside 2"}
];

var multiplatform = [
	{title: "Battlefield Hardline"},
	{title: "Evolve"},
	{title: "The Witcher 3: Wild Hunt"},
	{title: "The Division"},
	{title: "Mortal Kombat X"}
];

//( Main Window Buttons
var tableButton = Ti.UI.createView
(
	{
		backgroundColor: "#979C98",
		height: 75,
		width: 150,
		bottom: 50,
		right: 30
	}
);

var listButton = Ti.UI.createView
(
	{
		backgroundColor: "#979C98",
		height: 75,
		width: 150,
		bottom: 50,
		left: 30
	}
);

var listLabel = Ti.UI.createLabel
(
	{
		text: "List",
	}
);

listLabel.font = 
	{
		fontSize: 18,
		fontFamily: "monospace",
	};
	
var tableLabel = Ti.UI.createLabel
(
	{
		text: "Table",
	}
);

tableLabel.font = 
	{
		fontSize: 18,
		fontFamily: "monospace",
	};

//)

//( Table Data
var xboxExHeader = Ti.UI.createView
(
	{
		backgroundColor: "#54898c",
		height: 15,
	}
);

var xboxExLabel = Ti.UI.createLabel
(
	{
		text: "Xbox One Exclusives",
	}
);

var xboxExSection = Ti.UI.createTableViewSection
(
	{
		//headerTitle: "Breakfast"
		headerView: xboxExHeader,
	}
);

for(i = 0; i < xboxEx.length; i++)
{
	var xboxExRow = Ti.UI.createTableViewRow
	(
		{
			title: xboxEx[i].title,
		}
	);
	xboxExSection.add(xboxExRow);
};

var ps4ExHeader = Ti.UI.createView
(
	{
		backgroundColor: "#54898c",
		height: 15,
	}
);

var ps4ExLabel = Ti.UI.createLabel
(
	{
		text: "Play Station 4 Exclusives",
	}
);

var ps4ExSection = Ti.UI.createTableViewSection
(
	{
		//headerTitle: "Breakfast"
		headerView: ps4ExHeader,
	}
);

for(i = 0; i < ps4Ex.length; i++)
{
	var ps4ExRow = Ti.UI.createTableViewRow
	(
		{
			title: ps4Ex[i].title,
		}
	);
	ps4ExSection.add(ps4ExRow);
};

var multiplatformHeader = Ti.UI.createView
(
	{
		backgroundColor: "#54898c",
		height: 15,
	}
);

var multiplatformLabel = Ti.UI.createLabel
(
	{
		text: "Multiplatform",
	}
);

var multiplatformSection = Ti.UI.createTableViewSection
(
	{
		//headerTitle: "Breakfast"
		headerView: multiplatformHeader,
	}
);

for(i = 0; i < multiplatform.length; i++)
{
	var multiplatformRow = Ti.UI.createTableViewRow
	(
		{
			title: multiplatform[i].title,
		}
	);
	multiplatformSection.add(multiplatformRow);
};

var gamesTable = Ti.UI.createTableView
(
	{
		backgroundColor: "#D1EBF0",
		seperatorColor: "#161941",
		data: [xboxExSection, ps4ExSection, multiplatformSection],
	}
);

var win2 = Ti.UI.createWindow
(
	{
		backgroundColor: "white",
		title: "Video Games",
	}
);

var navwin = Ti.UI.iOS.createNavigationWindow
(
	{
   		window: win2
	}
);

var osName = Ti.Platform.name;

if (osName === "iPhone OS")
{
	gamesTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

tableButton.addEventListener('click', function(){
	navwin.open();
});

//Tables
xboxExHeader.add(xboxExLabel);
ps4ExHeader.add(ps4ExLabel);
multiplatformHeader.add(multiplatformLabel);
win2.add(gamesTable);
//Main Window
listButton.add(listLabel);
tableButton.add(tableLabel);
win.add(tableButton, listButton);