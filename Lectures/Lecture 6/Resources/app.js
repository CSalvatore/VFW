var win = Ti.UI.createWindow({backgroundColor: "#fff"});

var list = Ti.UI.createListView({backgroundColor: "#132cad", top: 25, editing: false});

var listSections = [];

var produce = Ti.UI.createListSection
(
	{
		headerTitle: "Produce",
	}
);

var dairy = Ti.UI.createListSection
(
	{
		headerTitle: "Dairy",
	}
);

produceData = [
	{properties: {title: "Celery", image: "celery.png", canEdit: true, canMove: true, backgroundColor: "green"}},
	{properties: {title: "Apples", image: "apple-icon.png", canEdit: true, canMove: true, backgroundColor: "red"}},
	{properties: {title: "Carrots", image: "carrots.png", canEdit: true, canMove: true, backgroundColor: "orange"}}
];

dairyData = [
	{properties: {title: "Cheese", image: "cheese-icon.png", canEdit: true, canMove: true, backgroundColor: "yellow"}},
	{properties: {title: "Milk", image: "imgres.jpg", canEdit: true, canMove: true, backgroundColor: "white"}},
	{properties: {title: "Ice Cream", image: "icecream-icon.png", canEdit: true, canMove: true, backgroundColor: "pink"}}
];

var button = Ti.UI.createView
(
	{
		headerTitle: "Edit Mode",
		backgroundColor: "white",
		height: 100,
		width: 200,
		top: 400
	}
);

button.addEventListener('click', function(){
	if(list.editing == false)
		list.editing = true;
	else
		list.editing = false;
});

produce.setItems(produceData);
dairy.setItems(dairyData);

listSections.push(produce);
listSections.push(dairy);
list.sections = listSections;

list.add(button);
win.add(list);
win.open();

// var detail = Ti.UI.createWindow({backgroundColor: "blue"});
// 
// var sections = [];
// 
// var table = Ti.UI.createTableView({top: 25});
// 
// var section = Ti.UI.createTableViewSection();
// 
// var data = [
	// {title: "Sample Item 1", type: "todo"},
	// {title: "Sample Item 2", type: "parent"},
	// {title: "Sample Item 3", type: "detail"}
// ];
// 
// for(var i = 0; i < data.length; i++)
// {
	// var row =Ti.UI.createTableViewRow
	// (
		// {
			// title: data[i].title,
		// }
	// );
// 	
	// if(data[i].type === "todo")
	// {
		// row.hasCheck = true;
	// }
	// else if(data[i].type === "parent")
	// {
		// row.hasChild = true;
	// }
	// else if(data[i].type === "detail")
	// {
		// row.hasDetail = true;
	// }
// 	
	// row.addEventListener('click', function(){
		// console.log("I've been clicked!");
		// detail.open();
	// });
// 
	// section.add(row);
// }

// var rowCheck = Ti.UI.createTableViewRow
// (
	// {
		// title: "Sample Item",
		// hasCheck: true,
	// }
// );
// 
// var rowChild = Ti.UI.createTableViewRow
// (
	// {
		// title: "Sample Item",
		// hasChild: true,
	// }
// );
// 
// var rowDetail = Ti.UI.createTableViewRow
// (
	// {
		// title: "Sample Item",
		// hasDetail: true,
	// }
// );

// detail.addEventListener('click', function(){
	// detail.close();
// });
// 
// sections.push(section);
// table.setData(sections);
// 
// win.add(table);