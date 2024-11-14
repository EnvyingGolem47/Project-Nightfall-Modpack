ServerEvents.recipes(event => { //listen for the "recipes" server event.

	//event.remove({ output: 'doggytalents:rice_grains'})
	
	event.shapeless('doggytalents:uncooked_rice_bowl', [ // arg 1: output
	  '5x farmersdelight:rice',
	  'minecraft:bowl'
	])
	
	event.shapeless('3x doggytalents:koji', [ // arg 1: output
	  'doggytalents:koji',
	  'farmersdelight:rice',
	  'minecraft:sugar'
	])
	
	event.shapeless('doggytalents:onigiri', [ // arg 1: output
	  'farmersdelight:cooked_rice',
	  'minecraft:kelp'
	])

	event.shapeless('3x farmersdelight:rice', [ // arg 1: output
	  'doggytalents:rice_wheat'
	])
	
	event.shapeless('doggytalents:rice_grains', [ // arg 1: output
	  'farmersdelight:rice'
	])
	
	event.shapeless('farmersdelight:rice', [ // arg 1: output
	  'doggytalents:rice_grains'
	])

	//event.smoking('doggytalents:koji', 'farmersdelight:rice')
	
	//event.smoking('doggytalents:koji', 'doggytalents:rice_grains')

})