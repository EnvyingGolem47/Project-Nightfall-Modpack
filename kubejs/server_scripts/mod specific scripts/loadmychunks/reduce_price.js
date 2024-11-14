ServerEvents.recipes(event => { //listen for the "recipes" server event.

	event.remove({ output: 'loadmychunks:chunk_loader' })
	event.remove({ output: 'loadmychunks:tickometer' })
	event.remove({ output: 'loadmychunks:chunkometer' })
	event.remove({ output: 'loadmychunks:dimensional_locator' })
	
	//Material removal
	event.remove({ output: 'loadmychunks:diamond_wire' })
	event.remove({ output: 'loadmychunks:player_spoofer' })

	event.shapeless('loadmychunks:chunk_loader', [ // arg 1: output
	  '#loadmychunks:chunk_loaders'
	])

	//Chunkometer
	event.shaped('loadmychunks:chunkometer', [
		'G S',
		'GSS',
		'TMT'
		], {
			S: 'minecraft:stone',
			T: '#forge:glass',
			G: 'minecraft:string',
			M: 'loadmychunks:tickometer'
		}
	)

	//Tickometer
	event.shaped('loadmychunks:tickometer', [
		'SRS',
		'GCG',
		'SSS'
		], {
			S: 'minecraft:stone',
			R: 'minecraft:redstone_torch',
			G: 'minecraft:string',
			C: 'minecraft:clock'
		}
	)

	//Dimensional Locator
	/*event.shaped('loadmychunks:dimensional_locator', [
		' E ',
		'LCL',
		'III'
		], {
			C: 'minecraft:compass',
			L: 'minecraft:lapis_lazuli',
			E: 'minecraft:emerald',
			I: 'minecraft:iron_ingot'
		}
	)

	//Chunk Loader
	event.shaped('3x loadmychunks:chunk_loader', [
		'SSS',
		'EDE',
		'SSS'
		], {
			S: 'minecraft:stone',
			D: 'loadmychunks:dimensional_locator',
			E: 'minecraft:emerald'
		}
	)*/

})