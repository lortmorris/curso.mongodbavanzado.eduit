/*
Todos los que han sido From:Automatico
Todos los despachos que han sido aceptados
Despachos por Zonas
Despachos con Base
Despachos por calles
Despachos por movil (que fueron aceptados)

*/
var cursor = db.dispatches.find({});

var stats = {
	withBase: 0,
	zones: {}
};
while(cursor.hasNext()){
	var el = cursor.next();
	if(el.withBase) stats.withBase++;
	
	if(stats.zones[el.ZonaName]) stats.zones[el.ZonaName] ++;
	else stats.zones[el.ZonaName]=1;
}
stats.created = new Date();
db.mystats.insert(stats);
print( tojson(stats) );


