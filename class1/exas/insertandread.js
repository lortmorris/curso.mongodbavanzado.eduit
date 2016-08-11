db.alumnos.insert({added: new Date(), name: 'Alejandro', age:23});
db.alumnos.insert({added: new Date(), name: 'Martin', age:22});
db.alumnos.insert({added: new Date(), name: 'Carlos', age:18});
db.alumnos.insert({added: new Date(), name: 'Juan', age:31});
db.alumnos.insert({added: new Date(), name: 'Pedro', age:28});
var results = db.alumnos.find();

