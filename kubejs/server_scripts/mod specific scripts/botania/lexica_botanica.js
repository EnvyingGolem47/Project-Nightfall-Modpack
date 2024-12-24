ServerEvents.recipes(event => { //listen for the "recipes" server event.
	event.remove({ output: 'botania:lexicon' })
	
	event.shapeless('botania:lexicon', [ // arg 1: output
	  '#minecraft:flowers',
	  'minecraft:book'
	])
})