var snacks = [
	{name: 'Bitterballen',
	brand: 'Mora',
	time: '4:00',
	temp: '190',
	sauce: ['Geen'],
	img: 'img/moraBitterballen.jpg'},

	{name: 'Frikandellen',
	brand: 'Mora',
	time: '3:37',
	temp: '190',
	sauce: ['Mayonaise'],
	img: 'img/moraFrikandellen.jpg'},

	{name: 'Kaassoufles',
	brand: 'Mora',
	time: '2:49',
	temp: '190',
	sauce: ['Geen'],
	img: 'img/moraKaassoufle.png'},

	{name: 'Minisnacks',
	brand: 'Golden',
	time: '3:37',
	temp: '190',
	sauce: ['Mayonaise', 'Curry'],
	img: 'img/goldenMinisnacks.jpg'},

	{name: 'Partymix',
	brand: 'Mora',
	time: '4:00',
	temp: '190',
	sauce: ['Mayonaise', 'Curry'],
	img: 'img/moraPartymix.png'},

	{name: 'Frikandellen',
	brand: 'Golden',
	time: '4:00',
	temp: '190',
	sauce: ['Mayonaise'],
	img: 'img/goldenFrikandellen.jpg'},

	{name: 'Vlammetjes',
	brand: 'TopKing',
	time: '3:00',
	temp: '180',
	sauce: ['Chili saus'],
	img: 'img/topkingVlammetjes.png'}
];

function itemInArray(array, item){
	for (var i=0; i<array.length; i++){
		if (item === array[i]){
			return true
		}
	}
	return false;
}

function addItemToArray(item, array){
	var itemInArray = false;
	for (var i=0; i<array.length; i++){
		if (array[i] == item){
			itemInArray=true;
		}
	}
	if (!itemInArray){
		array.push(item);
	}
}

var allProducts = [];
for (var i=0; i<snacks.length; i++){
	addItemToArray(snacks[i].name, allProducts);
}

var allBrands = [];
for (var i=0; i<snacks.length; i++){
	addItemToArray(snacks[i].brand, allBrands);
}

var allSauces = [];
for (var i=0; i<snacks.length; i++){
	console.log(snacks[i].sauce);
	for (var a=0; a<snacks[i].sauce.length; a++){
		console.log(snacks[i].sauce[a]);
		addItemToArray(snacks[i].sauce[a], allSauces);
	}
	// for (var a=0; a<snacks[i].sauce.length; a++){
	// 	addItemToArray(snacks[i].sauce[a], allSauces);
	// }
}

new Vue({
	el: '#app',
	data: {
		snacks: snacks,
		productFilter: [],
		brandFilter: [],
		sauceFilter: [],
		allProducts: allProducts,
		allBrands: allBrands,
		allSauces: allSauces,
		searchTerm: '',
		productInFilters: true
	},
	methods: {
		clearSearchField: function(){
			this.searchTerm = '';
		},
		clearFilters: function(){
			this.productFilter = [];
			this.brandFilter = [];
			this.sauceFilter = [];
		}
	}
});

