ServerEvents.recipes(event => { //listen for the "recipes" server event.

	event.remove({ output: 'create:crushed_raw_silver', type: 'create:crushing' })
	event.remove({ output: 'justenoughcrowns:silverblock'})
	event.remove({ output: 'justenoughcrowns:silvernugget'})
	event.remove({ output: 'justenoughcrowns:silveringot'})
	
	event.remove({ input: 'justenoughcrowns:silverblock'})
	
	event.shapeless('occultism:silver_ingot', [ // arg 1: output
	  'justenoughcrowns:silveringot'
	])
	
	// Silver Armor
	event.remove({ id: 'eidolon:silver_helmet'})
	event.remove({ id: 'eidolon:silver_chestplate'})
	event.remove({ id: 'eidolon:silver_leggings'})
	event.remove({ id: 'eidolon:silver_boots'})
	
	event.shapeless('iceandfire:armor_silver_metal_helmet', ['eidolon:silver_helmet'])
	event.shapeless('iceandfire:armor_silver_metal_chestplate', ['eidolon:silver_chestplate'])
	event.shapeless('iceandfire:armor_silver_metal_leggings', ['eidolon:silver_leggings'])
	event.shapeless('iceandfire:armor_silver_metal_boots', ['eidolon:silver_boots'])
	
	event.shapeless('eidolon:silver_helmet', ['iceandfire:armor_silver_metal_helmet'])
	event.shapeless('eidolon:silver_chestplate', ['iceandfire:armor_silver_metal_chestplate'])
	event.shapeless('eidolon:silver_leggings', ['iceandfire:armor_silver_metal_leggings'])
	event.shapeless('eidolon:silver_boots', ['iceandfire:armor_silver_metal_boots'])
	
	// Silver Tools
	event.remove({ id: 'eidolon:silver_sword'})
	event.remove({ id: 'eidolon:silver_pickaxe'})
	event.remove({ id: 'eidolon:silver_shovel'})
	event.remove({ id: 'eidolon:silver_axe'})
	event.remove({ id: 'eidolon:silver_hoe'})
	
	event.shapeless('eidolon:silver_sword', ['iceandfire:silver_sword'])
	event.shapeless('eidolon:silver_pickaxe', ['iceandfire:silver_pickaxe'])
	event.shapeless('eidolon:silver_shovel', ['iceandfire:silver_shovel'])
	event.shapeless('eidolon:silver_axe', ['iceandfire:silver_axe'])
	event.shapeless('eidolon:silver_hoe', ['iceandfire:silver_hoe'])
	
	event.shapeless('iceandfire:silver_sword', ['eidolon:silver_sword'])
	event.shapeless('iceandfire:silver_pickaxe', ['eidolon:silver_pickaxe'])
	event.shapeless('iceandfire:silver_shovel', ['eidolon:silver_shovel'])
	event.shapeless('iceandfire:silver_axe', ['eidolon:silver_axe'])
	event.shapeless('iceandfire:silver_hoe', ['eidolon:silver_hoe'])
})