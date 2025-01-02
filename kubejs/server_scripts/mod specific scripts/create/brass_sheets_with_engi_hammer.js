ServerEvents.recipes(event => { //listen for the "recipes" server event.
	
	event.shapeless('create:brass_sheet', [ // arg 1: output
	  'create:brass_ingot',
	  'immersiveengineering:hammer'
	])
	
})