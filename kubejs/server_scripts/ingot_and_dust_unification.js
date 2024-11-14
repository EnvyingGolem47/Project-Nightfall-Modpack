ServerEvents.recipes(event => { //listen for the "recipes" server event.

	const crushed_ores = ['create:crushed_raw_aluminum', // 0
						'scguns:crushed_raw_anthralite', // 1
						'create:crushed_raw_copper',
						'create:crushed_raw_gold',
						'create:crushed_raw_iron',
						'create:crushed_raw_lead',
						'create:crushed_raw_nickel',
						'create:crushed_raw_osmium',
						'create:crushed_raw_silver',
						'create:crushed_raw_tin',
						'create:crushed_raw_uranium'] // 10

	const dusts = ['immersiveengineering:dust_aluminum', // 0
				'scguns:anthralite_dust', // 1
				'immersiveengineering:dust_copper',
				'immersiveengineering:dust_gold',
				'immersiveengineering:dust_iron',
				'immersiveengineering:dust_lead',
				'immersiveengineering:dust_nickel',
				'mekanism:dust_osmium',
				'immersiveengineering:dust_silver',
				'mekanism:dust_tin',
				'immersiveengineering:dust_uranium', // 10
				'immersiveengineering:dust_steel']

	const mekanism_dusts = ['mekanism:dust_steel']

	crushed_ores.forEach(ore => {
		event.remove({ output: ore })
		
		event.replaceInput(
		{ input: ore },
		ore,
		dusts[crushed_ores.indexOf(ore)]
		)
	})
	
	//Replace with mekanism steel
	event.replaceOutput(
		{ output: dusts[11]},
		dusts[11],
		mekanism_dusts[0]
	)

	const silver_ores = ['occultism:silver_ore',
				'occultism:silver_ore_deepslate',
				'immersiveengineering:ore_silver',
				'immersiveengineering:deepslate_ore_silver',
				'eidolon:silver_ore',
				'eidolon:deep_silver_ore',
				'iceandfire:silver_ore',
				'iceandfire:deepslate_silver_ore',
				'occultism:raw_silver',
				'immersiveengineering:raw_silver',
				'eidolon:raw_silver',
				'iceandfire:raw_silver',
				'occultism:silver_ingot',
				'immersiveengineering:ingot_silver',
				'eidolon:silver_ingot',
				'iceandfire:silver_ingot']
					
	silver_ores.forEach(ore => {
		event.recipes.create.crushing(['immersiveengineering:dust_silver', Item.of('create:experience_nugget').withChance(0.75)], ore)
	})

	//mekanism:processing/diamond/from_ore
	event.remove({ id: 'mekanism:processing/diamond/from_ore'})
	
	//immersiveengineering:crusher/ore_diamond
	event.remove({ id: 'immersiveengineering:crusher/ore_diamond'})
})