ServerEvents.recipes(event => { //listen for the "recipes" server event.
	
	event.shapeless('minecraft:writable_book', [ // arg 1: output
	  'minecraft:book',
	  'minecraft:feather',
	  'minecraft:black_dye'
	])
	
})