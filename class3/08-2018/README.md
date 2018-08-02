# GeoSpatial Demo

## Pokemon mvp.

```bash
wget https://github.com/lortmorris/pokemongo
cd pokemongo
npm install
node tools/ --crawler
node tools/ --random
node app.js
```

# Aggregate

Is a framework into MongoDB for extends the natural query method.
## group by

## $group
id: is a field
other props: can use

## $match
is a easy way for filter previews document.


```javascript
db.markers.aggregate(
   [
     {
       $match: { type: 'pokemon' },
     },
      {
        $group : {
           _id : { name: "$name" },
           count: { $sum: 1 }
        }
      }
   ]
)
```


# createCollection

```javascript
db.createCollection('alumnos', {
  capped: true,
  size: 50000,
  max: 10
});

for (let x = 101; x< 110; x++) db.alumnos.insert({ x });

> var cursor = db.alumnos.find();
> cursor.count()
10
> var cursor = db.alumnos.find().addOption(DBQuery.Option.tailable);
> cursor.count()
10
> cursor
{ "_id" : ObjectId("5b638f9286962400518fd1bc"), "x" : 90 }
{ "_id" : ObjectId("5b638f9286962400518fd1bd"), "x" : 91 }
{ "_id" : ObjectId("5b638f9286962400518fd1be"), "x" : 92 }
{ "_id" : ObjectId("5b638f9286962400518fd1bf"), "x" : 93 }
{ "_id" : ObjectId("5b638f9286962400518fd1c0"), "x" : 94 }
{ "_id" : ObjectId("5b638f9286962400518fd1c1"), "x" : 95 }
{ "_id" : ObjectId("5b638f9286962400518fd1c2"), "x" : 96 }
{ "_id" : ObjectId("5b638f9286962400518fd1c3"), "x" : 97 }
{ "_id" : ObjectId("5b638f9286962400518fd1c4"), "x" : 98 }
{ "_id" : ObjectId("5b638f9286962400518fd1c5"), "x" : 99 }
> cursor
> cursor.count()
10
> cursor
> for (let x = 101; x< 110; x++) db.alumnos.insert({ x });
WriteResult({ "nInserted" : 1 })
> cursor
{ "_id" : ObjectId("5b63911786962400518fd1c6"), "x" : 101 }
{ "_id" : ObjectId("5b63911786962400518fd1c7"), "x" : 102 }
{ "_id" : ObjectId("5b63911786962400518fd1c8"), "x" : 103 }
{ "_id" : ObjectId("5b63911786962400518fd1c9"), "x" : 104 }
{ "_id" : ObjectId("5b63911786962400518fd1ca"), "x" : 105 }
{ "_id" : ObjectId("5b63911786962400518fd1cb"), "x" : 106 }
{ "_id" : ObjectId("5b63911786962400518fd1cc"), "x" : 107 }
{ "_id" : ObjectId("5b63911786962400518fd1cd"), "x" : 108 }
{ "_id" : ObjectId("5b63911786962400518fd1ce"), "x" : 109 }
>
```


# Document validator
```javascript
db.createCollection('users', {
  validator: {
    $and: [
        { phone: { $type: 'string' } },
        { email: { $regex: /@gmail\.com$/ } },
        { status: { $in: ['Complete', 'Incomplete'] }}
    ]
  }
});
```  


# Challenge

- Create collection 'markets'
```javascript
{
  name: //string
  position : { //be a object
       "type" : "Point", // only can be 'Point'
       "coordinates" : [  // only can be a array, with 2 values
           1.5166667,
           42.5
       ]
   },
   type: // ca be: ['supermarket', 'gas station', 'general', 'no defined']
}
```
- Create index GeoSpatial.
- Generate 100.000 random object for collection 'markets'.
- Return count by 'type' market.
- export to json 'markets' collection.
