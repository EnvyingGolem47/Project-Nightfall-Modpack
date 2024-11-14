ServerEvents.recipes(event => { //listen for the "recipes" server event.
	
	event.shapeless('4x mca:rose_gold_dust', [ // arg 1: output
	  '3x mekanism:dust_gold',
	  'mekanism:dust_copper'
	])

	event.remove({ output: 'mca:wedding_ring' })
	
	event.remove({ output: 'mca:engagement_ring' })

	event.shaped('mca:wedding_ring', [
		'GGG',
		'G G',
		'GGG'
		], {
			G: 'minecraft:gold_ingot'
		}
	)
	
		event.shaped('mca:engagement_ring', [
		'GDG',
		'G G',
		'GGG'
		], {
			G: 'minecraft:gold_ingot',
			D: 'minecraft:diamond'
		}
	)

})

ServerEvents.tags('item', event => {
	
	event.removeAll('justenoughcrowns:gold_ingots')
	event.remove('forge:ingots/gold','mca:rose_gold_ingot')

})