addEventListener('DOMContentLoaded', () => {
	let table = new DataTable('#myTable', {
		ajax: 'https://maxkret.github.io/rustScraper/item_table.json',
		columns: [
			{ data: 'Item' },
			{ data: 'Category' },
			{ data: 'Scrap' },
			{ data: 'High Quality Metal' },
			{ data: 'Tech Trash' },
			{ data: 'Rifle Body' },
			{ data: 'SMG Body' },
			{ data: 'Semi Automatic Body' },
			{ data: 'Gears' },
			{ data: 'Metal Spring' },
			{ data: 'Sheet Metal' },
			{ data: 'Metal Pipe' },
			{ data: 'Road Signs' },
			{ data: 'Metal Blade' },
			{ data: 'Empty Propane Tank' },
			{ data: 'Metal Fragments' },
			{ data: 'Gun Powder' },
			{ data: 'Sulfur' },
			{ data: 'Explosives' },
			{ data: 'Tarp' },
			{ data: 'Wood' },
			{ data: 'Cloth' },
			{ data: 'Sewing Kit' },
			{ data: 'Targeting Computer' },
			{ data: 'CCTV Camera' },
			{ data: 'Rope' },
			{ data: 'Low Grade Fuel' },
			{ data: 'Bone Fragments' },
			{ data: 'Leather' },
			{ data: 'Pumpkin' },
			{ data: 'Crude Oil' },
			{ data: 'Stones' },
			{ data: 'RF Broadcaster' },
			{ data: 'RF Receiver' },
			{ data: 'Wolf Skull' },
			{ data: 'Glue' },
			{ data: 'Charcoal' },
			{ data: 'Raw Human Meat' },
			{ data: 'Animal Fat' },
			{ data: 'Burst Module' },
			{ data: 'Wooden Ladder' },
			{ data: 'Medical Syringe' },
			{ data: 'Beancan Grenade' },
			{ data: 'Small Stash' },
			{ data: 'Human Skull' },
			{ data: 'Wooden Spear' },
			{ data: 'Electric Fuse' },
			{ data: 'Empty Tuna Can' }
		],
		paging: false
		// select: true
		// layout: {
		// 	topStart: {
		// 		buttons: [
		// 			'selected',
		// 			'selectNone',
		// 		]
		// 	}
		// },
	});
});
