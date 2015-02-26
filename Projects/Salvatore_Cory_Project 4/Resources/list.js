var showDetails = function(item){
	var itemview = Ti.UI.createView
	(
		{
			backgroundColor: "#fff",
			height: 200,
			width: 350,
			bottom: 100,
		}
	);
		
	var pictures = Ti.UI.createView
	(
		{
			backgroundImage: item.properties.images,
			height: 200,
			width: 300,
			top: 100,
		}
	);
		
	var detail = Ti.UI.createLabel
	(
		{
			text: item.properties.details,
			font: {
				fontSize: "12px",
				fontFamily: "Arial",
			}
		}
	);
		
	var itemwin = Ti.UI.createWindow
		(
			{
				backgroundImage: "images/mh4u.jpg",
				title: item.properties.title,
			}
		);
		
	itemview.add(detail);
	itemwin.add(itemview, pictures);
	navwin.openWindow(itemwin);
};

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
		backgroundColor: "#fff",
		title: "Info",
		color: "#F7F3E8"
	}
);

var monsters = Ti.UI.createListSection
(
	{
		headerTitle: "Monsters",
	}
);

var weapons = Ti.UI.createListSection
(
	{
		headerTitle: "Weapons",
	}
);

var armor = Ti.UI.createListSection
(
	{
		headerTitle: "Armor",
	}
);

Monsters = [
	{properties: {title: "Rathian", images: "images/gallery/firerath.jpg", details: "Rathian is a medium-sized true flying wyvern similar in looks to her male counterpart, Rathalos. Her hide is a duller and more muted colour, and her lower mandible features a long, protruding chin spike. Her upper back and wingtips are covered in a moss-like fur not seen on the Rathalos, and while her clubbed tail lacks bony spikes, it makes up for this with its ability to poison foes upon contact.", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Gore Magala", images: "images/gallery/gore.jpg", details: "Gore Magala is a very unique wyvern, sharing traits and similarities to that of the Elder Dragons, possessing six limbs, including the clawed wings on its back. Though, its overall appearance and stance resembles a quadrupedal wyvern like the Nargacuga. Its body is covered in dark exoskeleton plates, with notable features including the hidden horns that are folded alongside its face, the lack of visible eyes and fanged jaws that are actually parts of its external armor plates. The other unique part is its wings, which are covered in jet-black fur that resemble a tattered and ragged cape. The claws on its wings are extremely prehensile, and even seem to possess opposable thumbs. They are used for grabbing, help at running and maintaining stability. When not engaged in combat, Gore Magala tends to cloak its body with its wings by latching them onto its back.", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Nerscylla", images: "images/gallery/nerscylla.jpg", details: "Nerscylla physically resembles a real life Arachnid, but is much larger in size. Its long, strong legs allow it to move at fast speeds, even sideways. At the tip of its abdomen is a large stinger it may use to attack. Sharp, poisonous spikes protrude from its back. Nerscylla is armed with four powerful legs and two claws, each one tipped with a formidable barbed hook, used for holding prey as well as keeping its grip while scaling walls. In addition, it possesses a massive pair of retractable jaws which can inflict a poisonous bite. It can produce a strong, sticky webbing that it uses to trap prey and build nests.", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Seregios", images: "images/gallery/seregios.jpg", details: "Seregios is a medium-sized bipedal wyvern covered in lustrous gold scales. Its face features red markings around the eyes which continue along its body, and its head is topped with a single, backwards-curving horn. Its feet are zygodactyl in nature, with two toes facing forward, and two toes facing backward. Each of Seregios's scales can swivel individually, and it will use them to perform a rattling display when agitated. ", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Najarala", images: "images/gallery/najarala.jpg", details: "Najarala is a large Snake Wyvern with bright green skin adorned with large orange-yellow plates on its back and tail. It has a long serpentine body with small though fully functional fore- and hindlimbs that aid it in moving around on uneven ground. Najarala also has a large beak-like mouth similar to that of a parrot, along with a small pair of tusks.", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
];

Weapons = [
	{properties: {title: "Insect Glaive", images: "", details: "Insect Glaive (操虫棍 Sōchūkon: also known as \"Insect Taming Staff\", \"Insect Operating Rod\", \"Neopteron Handler\", and \"Insect Rod\") is a new weapon introduced in Monster Hunter 4. This double-ended rod is capable of quick, fluid attacks similar to the the Long Sword.  It also allows the hunter to jump at any time in a pole vaulting fashion. The rod is also capable of summoning a Kinsect to attack monsters. The hunter can either freely send out the Kinsect on a direct flight, or first shoot out a pheromone bullet at the target that works as a \"lock on.\" This allows the insect to home in. When the Kinsect successfully hits an enemy, it will drain out an \"essence\" which varies in color and attribute, depending on which part of the monster it hits. This will then power up the hunter when the Kinsect is called back.", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Charge Blade", images: "", details: "Charge Blade (チャージアックス Chājiakkusu) is a new weapon first introduced in MH4. This weapon is very similar to the Switch Axe, with the ability to switch between two different weapon modes: the Sword Mode and the Axe Mode. Both modes are capable of unleashing powerful charge attacks after the hunter scores enough hits. A phial located on the hilt will glow yellow after the minimum requirement of attacks has been met. When it starts glowing yellow the user can perform a charged attack. This can be taken to a higher level by attacking more to change it to a red glow for a maximum damage charge attack. Without sword energy, it will simply overheat and your charge attacks will have a chance of not hitting.", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Great Sword", images: "", details: "The Great Sword (大剣 Daiken), a classic weapon first introduced in Monster Hunter, is a weapon capable of dealing massive damage. Its way of use has changed since Monster Hunter 2, when it was given a charged attack. The weapon tree for the Great Sword is divided between 2 main branches: the Buster Sword branch and Bone Blade branch. The Buster Sword branch has slightly less overall sharpness than the Bone Blade in exchange for a wider amount of elemental damage up its sleeve, but both sides have generally lower sharpness bars than other weapons, so it's wise to have sharpening tools around.", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Heavy Bowgun", images: "", details: "The Heavy Bowgun (ヘビィボウガン Hebyibōgan) is the ranged weapon of choice for those who wish to have as much firepower as they can, while still maintaining some distance. While much slower than their Light Bowgun cousins, they are the only ranged weapon that allows a shield to be attached, giving them guard capabilities. For an experienced gunner, this is more of a restraint since you can only attach a power barrel OR a shield. In games before MH3U, Heavy Bowguns usually do not support elemental shots unlike their cousins, the Light Bowguns. They mainly support raw damage shots (such as Crag or Pierce).", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Lance", images: "", details: "Lances (ランス Ransu) are long weapons that can strike from a distance. The lance is always accompanied by a large shield which generally grants a powerful defense against most attacks. Although slow and difficult to travel with, the weapon's damage output can be impressive. Lances have different moves, such as the upstab, forward stab, and charging attack.", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
];

Armor = [
	{properties: {title: "Regios", images: "", details: "", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Vangis", images: "", details: "", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Gravios U", images: "", details: "", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Tigrex", images: "", details: "", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}},
	{properties: {title: "Khezu U", images: "", details: "", canEdit: true, canMove: true, accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL}}
];

list.addEventListener('itemclick', function(item){
	showDetails(item.section.getItemAt(item.itemIndex));
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

listwin.add(list);
monsters.setItems(Monsters);
weapons.setItems(Weapons);
armor.setItems(Armor);
listSections.push(monsters, weapons, armor);
list.sections = listSections;
button.add(edit);
listwin.add(button);