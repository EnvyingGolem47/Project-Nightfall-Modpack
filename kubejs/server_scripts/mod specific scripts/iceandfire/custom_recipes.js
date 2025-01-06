ServerEvents.recipes(event => { //listen for the "recipes" server event.

	event.remove({ id: 'dragonseeker:legendary_dragonseeker_fire' })
	event.remove({ id: 'dragonseeker:legendary_dragonseeker_ice' })
	event.remove({ id: 'dragonseeker:legendary_dragonseeker_lightning' })
	
	event.smithing(
		'dragonseeker:legendary_dragonseeker',                     // arg 1: output
		'#ice_and_fire_spellbooks:dragon_steel', // arg 2: the smithing template
		'dragonseeker:epic_dragonseeker',                          // arg 3: the item to be upgraded
		'#ice_and_fire_spellbooks:dragon_steel'                            // arg 4: the upgrade item
	)
	
	event.remove({ id: 'iceandfire:jar_empty' })
	
	event.shaped('iceandfire:pixie_jar_empty', [
		'GPG',
		'G G',
		'GGG'
		], {
			G: '#forge:glass_panes',
			P: '#minecraft:planks'
		}
	)
	
})