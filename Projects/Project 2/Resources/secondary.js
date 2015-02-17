var datafile = require('JSON');
var sections = [];

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

var showImage = function(item){
	var gameImage = Ti.UI.createView
		(
			{
				backgroundImage: item.properties.winimage,
				height: 300,
				width: 400
			}
		);
		
	var itemwin = Ti.UI.createWindow
		(
			{
				backgroundImage: "The-Last-of-Us.jpg",
				title: item.properties.title,
			}
		);

	itemwin.add(gameImage);
	navwin.openWindow(itemwin);
};

//Main Window
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

//Table
for(n in datafile.games)
{
	var count = 0;
	var section = Ti.UI.createTableViewSection
	(
		{
			headerTitle: n,
		}
	);
	console.log(n);
	
	for(i = 0; i < datafile.games[n].exclusiveGames.length; i++)
	{
		var row = Ti.UI.createTableViewRow
		(
			{
				title: datafile.games[n].exclusiveGames[i].name,
			}
		);
		console.log(datafile.games[n].exclusiveGames[i].name);
		section.add(row);
			
		row.addEventListener('click', function(item){
			getDetail(item.source);
		});
	};
	sections.push(section);
};

var gamesTable = Ti.UI.createTableView
(
	{
		backgroundColor: "#D1EBF0",
		seperatorColor: "#161941",
		data: sections,
	}
);

var tablewin = Ti.UI.createWindow
(
	{
		backgroundColor: "white",
		title: "Video Games",
	}
);

//List
var list = Ti.UI.createListView
(
	{
		backgroundColor: "#132cad", 
		top: 40, 
		editing: false
	}
);

var listSections = [];

var viewwin = Ti.UI.createWindow
(
	{
		backgroundImage: "#fff",
		title: "Video Games",
		color: "#F7F3E8"
	}
);

var xbox = Ti.UI.createListSection
(
	{
		headerTitle: "Xbox One",
	}
);

var ps4 = Ti.UI.createListSection
(
	{
		headerTitle: "PS4",
	}
);

var multi = Ti.UI.createListSection
(
	{
		headerTitle: "Multiplatform",
	}
);

xboxData = [
	{properties: {title: "Sunset Overdrive", color: "#F7F3E8", image: "sunset.jpg", winimage: "overdrive.jpg", canEdit: true, canMove: true, backgroundColor: "#2D581D", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Dead Rising 3", color: "#F7F3E8", image: "deadrising3.png", winimage: "rising.jpg", canEdit: true, canMove: true, backgroundColor: "#2D581D", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Ryse: Son of Rome", color: "#F7F3E8", image: "ryse.png", winimage: "ryseimage.jpg", canEdit: true, canMove: true, backgroundColor: "#2D581D", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Fable Legends", color: "#F7F3E8", image: "fable.jpg", winimage: "legends.jpg", canEdit: true, canMove: true, backgroundColor: "#2D581D", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Quantum Break", color: "#F7F3E8", image: "quantum.jpg", winimage: "break.jpg", canEdit: true, canMove: true, backgroundColor: "#2D581D", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
];

ps4Data = [
	{properties: {title: "The Order: 1886", color: "#F7F3E8", image: "theorder.jpg", winimage: "theorder1886.jpg", canEdit: true, canMove: true, backgroundColor: "#161C41", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Street Fighter V", color: "#F7F3E8", image: "streetfighter5.jpg", winimage: "fighter.jpg", canEdit: true, canMove: true, backgroundColor: "#161C41", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Uncharted 4", color: "#F7F3E8", image: "uncharted4.jpg", winimage: "uncharted.jpg", canEdit: true, canMove: true, backgroundColor: "#161C41", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "No Man's Sky", color: "#F7F3E8", image: "nomanssky.jpg", winimage: "sky.jpg", canEdit: true, canMove: true, backgroundColor: "#161C41", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Planetside 2", color: "#F7F3E8", image: "planetside2.png", winimage: "planet.jpg", canEdit: true, canMove: true, backgroundColor: "#161C41", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
];

multiData = [
	{properties: {title: "Battlefield Hardline", image: "battlefield.png", winimage: "hardline.jpg", canEdit: true, canMove: true, backgroundColor: "#E4E5F6", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Evolve", image: "evolve.png", winimage: "evolvegame.jpg", canEdit: true, canMove: true, backgroundColor: "#E4E5F6", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "The Witcher 3: Wild Hunt", image: "thewitcher3.png", winimage: "witcher.jpg", canEdit: true, canMove: true, backgroundColor: "#E4E5F6", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "The Division", image: "thedivision.png", winimage: "division.jpg", canEdit: true, canMove: true, backgroundColor: "#E4E5F6", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Mortal Kombat X", image: "mortalkombatx.png", winimage: "mkx.jpg", canEdit: true, canMove: true, backgroundColor: "#E4E5F6", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}}
];

//Buttons
tableButton.addEventListener('click', function(){
	navwin.openWindow(tablewin);
});

listButton.addEventListener('click', function(){
	navwin.openWindow(viewwin);
});

list.addEventListener('itemclick', function(item){
	showImage(item.section.getItemAt(item.itemIndex));
});

var button = Ti.UI.createView
(
	{
		backgroundColor: "white",
		height: 40,
		top: 0
	}
);

var edit = Ti.UI.createLabel
(
	{
		text: "Edit Mode"
	}
);

button.addEventListener('click', function(){
	if(list.editing == false)
		list.editing = true;
	else
		list.editing = false;
});

var osName = Ti.Platform.name;

if (osName === "iPhone OS")
{
	gamesTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

//Table
tablewin.add(gamesTable);
//List
viewwin.add(list);
xbox.setItems(xboxData);
ps4.setItems(ps4Data);
multi.setItems(multiData);
listSections.push(xbox, ps4, multi);
list.sections = listSections;
button.add(edit);
viewwin.add(button);
//Main Window
listButton.add(listLabel);
tableButton.add(tableLabel);
win.add(tableButton, listButton);