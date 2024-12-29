ServerEvents.recipes(event => { //listen for the "recipes" server event.

	event.remove({ output: 'utilitix:backpack'})

})