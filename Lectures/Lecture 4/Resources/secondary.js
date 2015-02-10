//Arrays for Tables
//var data = ["Bacon", "Eggs", "Milk", "Apples", "Cap't Crunch", "Bread"];
var breakfastdata = [
	{title: "Bacon"},
	{title: "Eggs"},
	{title: "Milk"},
	{title: "Apples"},
	{title: "Cap't Crunch"},
	{title: "Bread"}
];

var lunchdata = [
	{title: "Cheese"},
	{title: "Ham"},
	{title: "Turkey"},
	{title: "Gatorade"},
	{title: "Bologna"},
	{title: "Tuna"}
];

var dinnerdata = [
	{title: "Steak"},
	{title: "Pasta"},
	{title: "Salmon"},
	{title: "Pizza"},
	{title: "Chicken"},
	{title: "Soda"}
];

var breakfastHeader = Ti.UI.createView
(
	{
		backgroundColor: "#54898c",
		height: 15,
	}
);

var breakfastLabel = Ti.UI.createLabel
(
	{
		text: "Breakfast",
	}
);

var breakfastSection = Ti.UI.createTableViewSection
(
	{
		//headerTitle: "Breakfast"
		headerView: breakfastHeader,
	}
);

for(i = 0; i < lunchdata.length; i++)
{
	var breakfastRow = Ti.UI.createTableViewRow
	(
		{
			title: breakfastdata[i].title,
		}
	);
	breakfastSection.add(breakfastRow);
};

var lunchHeader = Ti.UI.createView
(
	{
		backgroundColor: "#54898c",
		height: 15,
	}
);

var lunchLabel = Ti.UI.createLabel
(
	{
		text: "Lunch",
	}
);

var lunchSection = Ti.UI.createTableViewSection
(
	{
		//headerTitle: "Lunch"
		headerView: lunchHeader,
	}
);

for(i = 0; i < lunchdata.length; i++)
{
	var lunchRow = Ti.UI.createTableViewRow
	(
		{
			title: lunchdata[i].title,
		}
	);
	lunchSection.add(lunchRow);
};

var dinnerHeader = Ti.UI.createView
(
	{
		backgroundColor: "#54898c",
		height: 15,
	}
);

var dinnerLabel = Ti.UI.createLabel
(
	{
		text: "Dinner",
	}
);

var dinnerSection = Ti.UI.createTableViewSection
(
	{
		//headerTitle: "Breakfast"
		headerView: dinnerHeader,
	}
);

for(i = 0; i < dinnerdata.length; i++)
{
	var dinnerRow = Ti.UI.createTableViewRow
	(
		{
			title: dinnerdata[i].title,
		}
	);
	dinnerSection.add(dinnerRow);
};

var dataTable = Ti.UI.createTableView
(
	{
		backgroundColor: "#6bacbf",
		seperatorColor: "#ff2fcd",
		//style: Ti.UI.iPhone.TableViewStyle.GROUPED,
		//data: breakfastdata,
		data: [breakfastSection, lunchSection, dinnerSection],
		headerTitle: "Groceries",
		top: 35,
	}
);

//Device Detection
var osName = Ti.Platform.name;
console.log(osName);

if (osName === "iPhone OS")
{
	dataTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

win.add(dataTable);
breakfastHeader.add(breakfastLabel);
lunchHeader.add(lunchLabel);
dinnerHeader.add(dinnerLabel);
