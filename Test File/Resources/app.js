var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.createWindow({backgroundColor: "#fff"});

var colors = ['red', 'orange', 'blue', 'black'];

var view = Titanium.UI.createView({
	backgroundColor: colors[0],
 	height: 100,
 	width: 100,
});

var animation = Titanium.UI.createAnimation();
animation.duration = 1000;
animation.repeat = 20;

for (var i=0; i < colors.length; i++) 
{
	animation.backgroundColor = colors[i];
 	animation.width = pWidth;
	animation.height = pHeight;
};

var animationHandler = function() {
  animation.removeEventListener('complete',animationHandler);
  view.animate(animation);
};
animation.addEventListener('complete',animationHandler);
view.animate(animation);

console.log(animation.getDuration());
console.log(animation.getRepeat());

win.add(view);
win.open();

// // this sets the background color of the master UIView (when there are no windows/tab groups on it)
// Titanium.UI.setBackgroundColor('#000');
// 
// // create tab group
// var tabGroup = Titanium.UI.createTabGroup();
// 
// 
// //
// // create base UI tab and root window
// //
// var win1 = Titanium.UI.createWindow({  
    // title:'Tab 1',
    // backgroundColor:'#fff'
// });
// var tab1 = Titanium.UI.createTab({  
    // icon:'KS_nav_views.png',
    // title:'Tab 1',
    // window:win1
// });
// 
// var label1 = Titanium.UI.createLabel({
	// color:'#999',
	// text:'I am Window 1',
	// font:{fontSize:20,fontFamily:'Helvetica Neue'},
	// textAlign:'center',
	// width:'auto'
// });
// 
// win1.add(label1);
// 
// //
// // create controls tab and root window
// //
// var win2 = Titanium.UI.createWindow({  
    // title:'Tab 2',
    // backgroundColor:'#fff'
// });
// var tab2 = Titanium.UI.createTab({  
    // icon:'KS_nav_ui.png',
    // title:'Tab 2',
    // window:win2
// });
// 
// var label2 = Titanium.UI.createLabel({
	// color:'#999',
	// text:'I am Window 2',
	// font:{fontSize:20,fontFamily:'Helvetica Neue'},
	// textAlign:'center',
	// width:'auto'
// });
// 
// win2.add(label2);
// 
// 
// 
// //
// //  add tabs
// //
// tabGroup.addTab(tab1);  
// tabGroup.addTab(tab2);  
// 
// 
// // open tab group
// tabGroup.open();