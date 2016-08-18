db.alumnos.drop();
db.createCollection("alumnos", {capped: true, size: 500000, max: 5});
var t = db.alumnos;
t.insert({added: new Date(), name: 'Alejandro', age:23});
t.insert({added: new Date(), name: 'Martin', age:22});
t.insert({added: new Date(), name: 'Carlos', age:18});
t.insert({added: new Date(), name: 'Juan', age:31});
t.insert({added: new Date(), name: 'Pedro', age:28});
var results = t.find().addOption(DBQuery.Option.tailable);
results;
print("Cursor empty");
t.insert({added: new Date(), name: "Santiago", age:21});
results;

