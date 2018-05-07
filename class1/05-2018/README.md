# Exas

```js
for (let x = 1000; x < 10000; x++) db.alumnos.insert({ x, y: x * 2, z: x * 3});
db.alumnos.find({ x: { $gte: 100 }, z: {$lte: 2000 } }).count()
db.alumnos.find({ x: { $gte: 100 }, z: {$lte: 10000 } }).count()
```
## Get results

```bash
x < 2000, z > = 100
z < 5000, y < 2000
y < 2000, x > 1000, z = 3000
```
