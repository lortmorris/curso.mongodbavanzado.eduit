function getRandomData(data){ return data[Math.floor(Math.random()* data.length)] }
function getRandom(limit){ return Math.floor(Math.random()* limit); }

var brands=["Panafonic", "GLG","Samsem", "Filips","ELG"];
var productNames=["Iphone","TV","Radio","Tv super TV", "Reloj","Ipad","ZarPad"];
var fnames=["Carlos","Jose","Cesar","Pepe","Esteban","Carolina"];
var lnames=["Gomez","Casas","Arteaga","Soles","Gorgori","Simpson"];

function getRamdomProducts(){
	var products=[];
	for(var x=0; x<getRandom(10); x++){
		products.push( {
	            "prodName" : getRandomData(productNames),
	            "BrandName" : getRandomData(brands),
	            "model" : "SKSK"+getRandom(10),
	            "price" : (getRandom(2500)+1)*1.3,
	            "cant" : getRandom(10)+1
	        });
	}
	return products;
}

function getSaleRandon(){
	return {
	    "datetime" : new Date(),
	    "products" : getRamdomProducts(),
	    "vendor" : {
	        "fname" : getRandomData(fnames),
	        "lname" : getRandomData(lnames)
	    }
	}
}

for(var x=0;x<1000000; x++) db.sales.insert(getSaleRandon());