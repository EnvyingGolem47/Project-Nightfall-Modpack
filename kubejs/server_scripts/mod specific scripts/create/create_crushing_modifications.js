let replaceCrushedOres = [
    'iron',
    'gold',
    'copper'
]

let mekanismCrushedOres = [
    'osmium',
    'tin',
    'uranium',
	'lead'
]

//event.remove({ output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking' })

ServerEvents.recipes(event => { //listen for the "recipes" server event.
	
	//event.remove([{ type: 'minecraft:smelting', output: 'minecraft:iron_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:iron_ingot' }])
	replaceCrushedOres.forEach(ore => {
		
		event.remove({ output: 'create:crushed_raw_' + ore, type: 'create:crushing' })
		
		event.recipes.create.crushing(['2x mekanism:dust_' + ore, Item.of('create:experience_nugget').withChance(0.75)], 'raw_' + ore)
		event.recipes.create.crushing(['2x mekanism:dust_' + ore, Item.of('create:experience_nugget').withChance(0.75)], ore + '_ore')
		event.recipes.create.crushing(['2x mekanism:dust_' + ore, Item.of('create:experience_nugget').withChance(0.75)], 'deepslate_' + ore + '_ore')
	
	})
	
	mekanismCrushedOres.forEach(ore => {
		
		event.remove({ output: 'create:crushed_raw_' + ore, type: 'create:crushing' })
		
		event.recipes.create.crushing(['2x mekanism:dust_' + ore, Item.of('create:experience_nugget').withChance(0.75)], 'mekanism:raw_' + ore)
		event.recipes.create.crushing(['2x mekanism:dust_' + ore, Item.of('create:experience_nugget').withChance(0.75)], 'mekanism:' + ore + '_ore')
		event.recipes.create.crushing(['2x mekanism:dust_' + ore, Item.of('create:experience_nugget').withChance(0.75)], 'mekanism:' + 'deepslate_' + ore + '_ore')
	
	})
	
	//create:crushing/deepslate_diamond_ore
	event.remove({ id: 'create:crushing/deepslate_diamond_ore' })
	
	//create:crushing/diamond_ore
	event.remove({ id: 'create:crushing/diamond_ore' })
	
	event.recipes.create.crushing(['minecraft:diamond', Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:cobblestone').withChance(0.12)], '#forge:ores/diamond')
})