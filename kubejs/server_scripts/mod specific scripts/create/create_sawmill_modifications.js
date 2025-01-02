//event.remove({ output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking' })

ServerEvents.recipes(event => { //listen for the "recipes" server event.
	
	//event.remove([{ type: 'minecraft:smelting', output: 'minecraft:iron_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:iron_ingot' }])
		
	event.remove({ id: 'petrolsparts:cutting/coaxial_gear_from_wood' })

	
})