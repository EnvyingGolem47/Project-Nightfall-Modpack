ServerEvents.recipes(event => { //listen for the "recipes" server event.
	
	event.remove({ id: 'hearth_and_home:bamboo_parquet' })

	event.shaped('hearth_and_home:bamboo_parquet', [
		'SSA',
		'AAA',
		'AAA'
		], {
			S: 'minecraft:bamboo_slab',
			A: 'minecraft:air'
		}
	)
	
})