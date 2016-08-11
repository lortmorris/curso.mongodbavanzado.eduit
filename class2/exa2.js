db.alumnos.drop();
var t = db.alumnos;
t.insert({added: new Date(), name: 'Alejandro', age:23});
t.insert({added: new Date(), name: 'Martin', age:22});
t.insert({added: new Date(), name: 'Carlos', age:18});
t.insert({added: new Date(), name: 'Juan', age:31});
t.insert({added: new Date(), name: 'Pedro', age:28});
var results = t.find().addOption(DBQuery.Option.exhauts);
results;


