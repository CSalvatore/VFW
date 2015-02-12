exports.xboxEx = [
	{title: "Sunset Overdrive"},
	{title: "Dead Rising 3"},
	{title: "Ryse: Son of Rome"},
	{title: "Fable Legends"},
	{title: "Quantum Break"}
];

exports.ps4Ex = [
	{title: "The Order: 1886"},
	{title: "Street Fighter V"},
	{title: "Uncharted 4"},
	{title: "No Man's Sky"},
	{title: "Planetside 2"}
];

exports.multiplatform = [
	{title: "Battlefield Hardline"},
	{title: "Evolve"},
	{title: "The Witcher 3: Wild Hunt"},
	{title: "The Division"},
	{title: "Mortal Kombat X"}
];

var games = {
	"xbox": {
		"headerTitle": "Xbox Exclusives",
		"exclusiveGames": [
			{name: "Sunset Overdrive"},
			{name: "Dead Rising 3"},
			{name: "Ryse: Son of Rome"},
			{name: "Fable Legends"},
			{name: "Quantum Break"},
		]
	},
	"ps4": {
		"headerTitle": "PS4 Exclusives",
		"exclusiveGames": [
			{name: "The Order: 1886"},
			{name: "Street Fighter V"},
			{name: "Uncharted 4"},
			{name: "No Man's Sky"},
			{name: "Planetside 2"}
		]
	},
	"multiplatform": {
		"headerTitle": "Multiplatform",
		"exclusiveGames": [
			{name: "Battlefield Hardline"},
			{name: "Evolve"},
			{name: "The Witcher 3: Wild Hunt"},
			{name: "The Division"},
			{name: "Mortal Kombat X"}
		]
	}
};

console.log(games.xbox.exclusiveGames[0].name);