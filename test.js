
var cursor = db.alumnos.find();
while(cursor.hasNext()){
    print(tojson(cursor.next()));
}