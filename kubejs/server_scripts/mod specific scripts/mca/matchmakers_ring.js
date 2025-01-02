ServerEvents.recipes(event => { //listen for the "recipes" server event.

	event.remove({ id: 'mca:matchmakers_ring' })
	
	event.shaped('mca:matchmakers_ring', [
		'II ',
		'I I',
		' II'
		], {
			I: 'minecraft:iron_ingot'
		}
	)

})