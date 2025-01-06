ServerEvents.recipes(event => { //listen for the "recipes" server event.
	
	event.shapeless('createaddition:zinc_sheet', [ // arg 1: output
		'create:zinc_ingot',
		'immersiveengineering:hammer'
	])
})