var myCursor = db.alumnos.find();

while (myCursor.hasNext()) {
   print(tojson(myCursor.next()));
}



var myCursor =  db.alumnos.find(  );
myCursor.forEach(printjson);


var myCursor = db.alumnos.find( );
var documentArray = myCursor.toArray();
var myDocument = documentArray[3];
myDocument;

