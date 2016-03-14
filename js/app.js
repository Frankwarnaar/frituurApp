var snacks = [
	{name: 'Bitterballen',
	brand: 'Mora',
	time: '4:00',
	temp: '190',
	sauce: 'Geen',
	img: 'moraBitterballen.jpg'},

	{name: 'Frikandellen',
	brand: 'Mora',
	time: '3:37',
	temp: '190',
	sauce: 'Mayonaise',
	img: 'moraFrikandellen.jpg'},

	{name: 'Kaassoufles',
	brand: 'Mora',
	time: '2:49',
	temp: '190',
	sauce: 'Geen',
	img: 'moraKaassoufle.png'},

	{name: 'Minisnacks',
	brand: 'Golden',
	time: '3:37',
	temp: '190',
	sauce: 'Mayonaise, Curry',
	img: 'goldenMinisnacks.jpg'},

	{name: 'Partymix',
	brand: 'Mora',
	time: '4:00',
	temp: '190',
	sauce: 'Mayonaise, Curry',
	img: 'moraPartymix.png'},

	{name: 'Frikandellen',
	brand: 'Golden',
	time: '4:00',
	temp: '190',
	sauce: 'Mayonaise',
	img: 'goldenFrikandellen.jpg'},

	{name: 'Vlammetjes',
	brand: 'TopKing',
	time: '3:00',
	temp: '180',
	sauce: 'Chili saus',
	img: 'topkingVlammetjes.png'}
];

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

new Vue({
	el: '#app',
	data: {
		snacks: snacks,
		productFilter: [],
		brandFilter: [],
		allProducts: allProducts,
		allBrands: allBrands,
		searchTerm: ''
	},
	methods: {
		clearSearchField: function(){
			this.searchTerm = '';
		},
		clearFilters: function(){
			this.productFilter = [];
			this.brandFilter = [];
		}
	}
});
