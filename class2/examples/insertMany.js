db.alumnos.insertMany([{added: new Date(), name: 'Alejandro', age:23},
{added: new Date(), name: 'Martin', age:22},
{added: new Date(), name: 'Carlos', age:18},
{added: new Date(), name: 'Juan', age:31},
{added: new Date(), name: 'Pedro', age:28}]);

db.alumnos.find( {}, {});

