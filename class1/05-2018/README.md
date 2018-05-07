# Exas

```js
for (let x = 1000; x < 10000; x++) db.alumnos.insert({ x, y: x * 2, z: x * 3});
db.alumnos.find({ x: { $gte: 100 }, z: {$lte: 2000 } }).count()
db.alumnos.find({ x: { $gte: 100 }, z: {$lte: 10000 } }).count()
```
## Get results

```javascript
// x < 2000, z > = 100
db.alumnos.find({ x : { $lt: 2000 }, z: { $gte: 100 } }).count();
// z < 5000, y < 2000
db.alumnos.find({ z : { $lt: 5000 }, y: { $lt: 2000 } }).count();
// y < 2000, x > 1000, z = 3000
db.alumnos.find({ y : { $lt: 2000 }, x: { $gt: 1000 }, z: 3000 }).count();
```

## $and $or
```javascript
> db.alumnos.find({ $and: [{ x: { $gt: 1000} }, { z: {$lt: 5000} }, { y: {$ne: 2010} }] }).count()

> db.alumnos.find({ $or: [{ x: {$gt: 1000 }}, { z: { $lt: 10 } } ] }).count()
```

```javascript
db.alumnos.find({
  $or: [
    { $and: [{ x: { $gt: 5000 } }, { z: { $lt: 8000 } }] },
    { $and: [{ y: { $gt: 5000 } }, { z: { $lt: 18000 } }] },
  ]
}).count();
```

## $in
```javascript
> db.alumnos.find({ x: { $in: [2, 1000, 5000] } });
> db.alumnos.find({
  $or: [
    { $and: [{ x: { $lt: 1000 } }, { z: {$in: [200, 500, 800] } } ] },
    { $and: [{ y: { $lt: 5000 } }, { x: {$in: [1000, 2000, 3000] } } ] }
  ]
})
```
