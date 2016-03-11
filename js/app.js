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

new Vue({
	el: '#app',
	data: {
		snacks: snacks,
		productFilter: [],
		brandFilter: [],
		searchTerm: ''
	},
	methods: {
		clearSearchField: function(){
			this.searchTerm = '';
		}
	}
});
