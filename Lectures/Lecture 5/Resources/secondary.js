var datafile = require('JSON');

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
		headerView: breakfastHeader,
	}
);

for(i = 0; i < datafile.breakfastdata.length; i++)
{
	var breakfastRow = Ti.UI.createTableViewRow
	(
		{
			title: datafile.breakfastdata[i].title,
		}
	);
	breakfastSection.add(breakfastRow);
	
	breakfastRow.addEventListener('click', function(item){
	getDetail(item.source);
	});
};

var dataTable = Ti.UI.createTableView
(
	{
		backgroundColor: "#6bacbf",
		seperatorColor: "#ff2fcd",
		data: [breakfastSection],
		headerTitle: "Groceries",
		top: 35,
	}
);

var getDetail = function(item){
	var winDetail = Ti.UI.createWindow
	(
		{
			backgroundColor: "#ab415d",
		}
	);
	var labelTitle = Ti.UI.createLabel
	(
		{
			text: item.title,
			top: 40,
		}
	);
	winDetail.add(labelTitle);
	winDetail.open();
};

var osName = Ti.Platform.name;
console.log(osName);

if (osName === "iPhone OS")
{
	dataTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

win.add(dataTable);
breakfastHeader.add(breakfastLabel);