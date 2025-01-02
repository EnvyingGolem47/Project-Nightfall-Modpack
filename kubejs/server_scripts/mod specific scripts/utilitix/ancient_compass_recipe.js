ServerEvents.recipes(event => { //listen for the "recipes" server event.

	event.shaped('utilitix:ancient_compass', [
		'SSS',
		'SCS',
		'SSS'
		], {
			S: 'minecraft:sculk',
			C: 'minecraft:compass'
		}
	)

})