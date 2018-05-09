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

## $nin
```javascript
> db.alumnos.find({ x: { $nin: [2, 1000, 5000] } }).count();
> db.alumnos.find({
  $or: [
    { $and: [{ x: { $lt: 1000 } }, { z: {$nin: [200, 500, 800] } } ] },
    { $and: [{ y: { $lt: 5000 } }, { x: {$nin: [1000, 2000, 3000] } } ] }
  ]
}).count();
```


# removing data

## db.collection.remove
```javascript
> db.alumnos.remove({ x: 4500 });
> db.alumnos.remove({ z: { $gt: 25000 } });
> db.alumnos.remove({ y: { $in: [1000, 1500, 2000] } });
> db.alumnos.remove({ _id: ObjectId("5af0d5739d9039555a0844a3") });
```



# work with Schemas

```javascript
// 10.000 sales
const getRandomData = (data) => data[Math.round(Math.random() * data.length)]
const getRandomFee = (limit) => Math.random() * limit;
const names = ["Jose", "Juan", "Pedro", "Luis", "Carlos"];
const lastnames = ["Sanchez", "Perez", "Casas", "Segura"];
const paymentMethods = ["cc", "check", "cash"];
const products = ["Iphone 8", "Ipad 2", "TV LG 50", "Acer Aspire 1221"];

for (let x=0; x<1000000; x++) {
  const cant = Math.round(Math.random() * 10);
  const fee = getRandomFee(1000);
  const prods = [];
  for (let p =0; p < (Math.round(Math.random() * 10) + 1); p++ ) {
    prods.push({
      name: getRandomData(products),
      priceUSD: fee,
      cant,
      finalPrice: cant * fee,
    });
  }
  db.sales.insert({
    vendor: {
      fname: getRandomData(names),
      lname: getRandomData(lastnames),
    },
    products: prods,
    datetime: new Date(),
    paymentMethod: getRandomData(paymentMethods),
  });
}

```


```javascript
> db.sales.find().pretty()
```

```javascript
> db.sales.find({ 'vendor.fname': 'Carlos', 'vendor.lname': 'Perez', 'products.name': 'Iphone 8'  }).pretty()
> var result = db.sales.find({ 'vendor.fname': 'Carlos', 'vendor.lname': 'Perez'  });
> result.hasNext()

var total = 0;
while(result.hasNext()) {
  const item = result.next();
  item.products.forEach(p => {
    total = total + p.finalPrice;
  });
}
print(total);
```


## Exa

- Total de ventas del vendedor: "Jose Perez"
- Total de ventas del vendedor: "Pedro Casas"
- Total de iphones vendidos
- Total de dinero vendido en material de Acer

# Sorting
is a method of find.
```javascript
> db.sales.find().sort({ _id: 1 }).pretty()
> db.sales.find().sort({ _id: -1 }).pretty()
```
# Indexes
