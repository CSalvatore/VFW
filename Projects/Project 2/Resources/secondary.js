var datafile = require('JSON');

var getDetail = function(item){
	var winDetail = Ti.UI.createWindow
	(
		{
			backgroundImage: "Minecraft.jpg",
			title: item.title,
		}
	);
	
	navwin.openWindow(winDetail);
};

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

for(i = 0; i < 3; i++)
{
	for(i = 0; i < datafile.xboxEx.length; i++)
	{
		var xboxExRow = Ti.UI.createTableViewRow
		(
			{
				title: datafile.xboxEx[i].title,
			}
		);
		xboxExSection.add(xboxExRow);
		
		xboxExRow.addEventListener('click', function(item){
		getDetail(item.source);
		});
	};
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

// for(i = 0; i < datafile.ps4Ex.length; i++)
// {
	// var ps4ExRow = Ti.UI.createTableViewRow
	// (
		// {
			// title: datafile.ps4Ex[i].title,
		// }
	// );
	// ps4ExSection.add(ps4ExRow);
// };

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

// for(i = 0; i < datafile.multiplatform.length; i++)
// {
	// var multiplatformRow = Ti.UI.createTableViewRow
	// (
		// {
			// title: datafile.multiplatform[i].title,
		// }
	// );
	// multiplatformSection.add(multiplatformRow);
// };

var gamesTable = Ti.UI.createTableView
(
	{
		backgroundColor: "#D1EBF0",
		seperatorColor: "#161941",
		data: [xboxExSection, ps4ExSection, multiplatformSection],
	}
);

var tablewin = Ti.UI.createWindow
(
	{
		backgroundColor: "white",
		title: "Video Games",
	}
);

tableButton.addEventListener('click', function(){
	navwin.openWindow(tablewin);
});

var osName = Ti.Platform.name;

if (osName === "iPhone OS")
{
	gamesTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

//Tables
xboxExHeader.add(xboxExLabel);
ps4ExHeader.add(ps4ExLabel);
multiplatformHeader.add(multiplatformLabel);
tablewin.add(gamesTable);
//Main Window
listButton.add(listLabel);
tableButton.add(tableLabel);
win.add(tableButton, listButton);