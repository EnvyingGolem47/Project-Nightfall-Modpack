ServerEvents.recipes(event => { //listen for the "recipes" server event.
	
	//Replace with mekanism steel
	event.replaceInput(
		{ input: "minecraft:ender_pearl" },
		"minecraft:ender_pearl",
		"#forge:ender_pearls"
	)
	
})