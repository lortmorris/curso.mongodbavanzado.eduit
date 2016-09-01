function getMarkerRandom(){
	var lat = parseFloat("-34."+(619708 + Math.floor(Math.random()*51615) ) );
	var long = parseFloat("-58."+(503089 + Math.floor(Math.random()*132829) ) );

	var pokemones = [
	{name:"Bulbasaur", img:"001.png"},
	{name:"Ivysaur", img:"002.png"},
	{name:"Venusaur", img:"003.png"},
	{name:"Charmander", img:"004.png"},
	{name:"Charmeleon", img:"005.png"},
	{name:"Charizard", img:"006.png"},
	{name:"Squirtle", img:"007.png"},
	{name:"Wartortle", img:"008.png"},
	{name:"Blastoise", img:"009.png"},
	{name:"Caterpie", img:"010.png"},
	];

	var poke = pokemones[Math.floor(Math.random() * pokemones.length)];	
	return {

		location: {type: "Point", coordinates:[long, lat]},
		name: poke.name,
		photos: [poke.img],
		type: "pokemon"
	}
}

for(var i=0; i<10000; i++){	
	db.markers.insert(getMarkerRandom());
}
