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


# updating data
use update method of collection.
update(criterial, updateObject, options);

Mongodb will replace the currents document with the new document.

If we want is add a new property, require use $set operator.

```javascript
$set: {
  dni: 30756484
}
```

Attention: if the prop already exists, the value will be replace.

```javascript
> db.sales.update({ 'vendor.fname': 'Jose', 'vendor.lname': 'Sanchez'}, { $set: { dni: 30756484 } });

> db.sales.update({ 'vendor.fname': 'Jose', 'vendor.lname': 'Sanchez' }, { $set: { dni: 30756484 } }, { multi: true });
WriteResult({ "nMatched" : 12927, "nUpserted" : 0, "nModified" : 12926 })
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
> result.hasNext();

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

### solution
```javascript
// Total de ventas del vendedor: "Jose Perez"
db.sales.find({ 'vendor.fname': 'Jose', 'vendor.lname': 'Perez'}).count();

// Total de ventas del vendedor: "Pedro Casas"
db.sales.find({ 'vendor.fname': 'Pedro', 'vendor.lname': 'Casas'}).count();

// Total de iphones vendidos

var result = db.sales.find({ 'products.name': 'Iphone 8'});
var total = 0;
while(result.hasNext()) {
  const item = result.next();
  item.products.forEach(p => {
    if (p.name === 'Iphone 8') total++;
  });
}
print(total);
```


```javascript
  function getStatsByVendor(fname, lname) {

  }
```

# Sorting and limit
is a method of find.
```javascript
> db.sales.find().sort({ _id: 1 }).pretty();
> db.sales.find().sort({ _id: -1 }).pretty();

> db.sales.find({ 'vendor.fname': 'Jose', 'vendor.lname': 'Sanchez'}).limit(1);

```
# Indexes

db.collection.createIndex({ field: -1 / 1 });
db.collection.createIndex({ field: -1 / 1, field2: -1 /1 });
```javascript
> db.sales.createIndex({ 'vendor.fname': 1, 'vendor.lname' : 1 });
{
	"createdCollectionAutomatically" : false,
	"numIndexesBefore" : 1,
	"numIndexesAfter" : 2,
	"ok" : 1
}

> db.sales.createIndex({ 'products.name': 1 });
{
	"createdCollectionAutomatically" : false,
	"numIndexesBefore" : 2,
	"numIndexesAfter" : 3,
	"ok" : 1
}

```
 # Exas

 Add a new property 'totalAmount' with the sum(products.finalPrice);

 Tips:
 - Get all sales
 - While(hasNext)
 - Calculate the value the new property
 - db.collection.update ($set)
 

 ```javascript
 // original

 {
	"_id" : ObjectId("5af0eb2f9d9039555a086bc7"),
	"vendor" : {
		"fname" : "Luis",
		"lname" : undefined
	},
	"products" : [
		{
			"name" : "Ipad 2",
			"priceUSD" : 472.21027308904974,
			"cant" : 8,
			"finalPrice" : 3777.682184712398
		},
		{
			"name" : "Acer Aspire 1221",
			"priceUSD" : 472.21027308904974,
			"cant" : 8,
			"finalPrice" : 3777.682184712398
		}
	],
	"datetime" : ISODate("2018-05-08T00:11:27.149Z"),
	"paymentMethod" : "cc"
}

// new document (after added new prop)
{
 "_id" : ObjectId("5af0eb2f9d9039555a086bc7"),
 "vendor" : {
   "fname" : "Luis",
   "lname" : undefined
 },
 "products" : [
   {
     "name" : "Ipad 2",
     "priceUSD" : 472.21027308904974,
     "cant" : 8,
     "finalPrice" : 3777.682184712398
   },
   {
     "name" : "Acer Aspire 1221",
     "priceUSD" : 472.21027308904974,
     "cant" : 8,
     "finalPrice" : 3777.682184712398
   }
 ],
 "datetime" : ISODate("2018-05-08T00:11:27.149Z"),
 "paymentMethod" : "cc",
 "totalAmount": 755,36
}
 ```
