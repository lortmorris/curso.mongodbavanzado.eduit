# challenge class 1
- Download & unzip
```bash
cesars-MBP:08-2018 cesarcasas$ wget http://download.maxmind.com/download/worldcities/worldcitiespop.txt.gz  
cesars-MBP:08-2018 cesarcasas$ gunzip worldcitiespop.txt.gz
```

- Import the csv into 'cities' collection (cursodb)
- Create index on props 'City' (-1, 1)
## Solutions
```bash
mongoimport --db cursodb --collection cities -f Country,City,AccentCity,Region,Population,Latitude,Longitude --type csv --file worldcitiespop.txt

```

# Indexes
## Combined
```javascript
> db.getCollection('cities').createIndex({ Latitude:1, Longitude: 1 })
```

## index embed document
```javascript
> db.sales.createIndex({ 'products.name': -1 });
> const results = db.sales.find({ 'products.name': 'Iphone 6' });

const total = 0;
while(results.hasNext()) {
  const item = results.next();
  item.products.filter(i => i.name === 'Iphone 6')
  .forEach(i => total+= i.cant);
}
print(total);

// 10.000.000
// 30.000.000
{
  added: new Date(),
  products: [
    {
      name: 'Iphone 6s',
      price: 300,
      cant: 2,
      totalPrice: 600
    },
    {
      name: 'LG TV 60',
      price: 200,
      cant: 2,
      totalPrice: 400
    },
    {
      name: 'Licuadora',
      price: 60,
      cant: 2,
      totalPrice: 120
    },
  ],
  vendor: {
    fname: 'Pepe',
    lname: 'Luis',
    dni: 238817272,
  },
  client: {
    fname: 'Cacho',
    lname: 'Castaña',
    dni: 1088271,
  },
}
```


## Text index
```javascript
> db.getCollection('cities').createIndex({ City: 'text' })
```

```javascript
> db.getCollection('cities').find({
  $text:
    {
      $search: 'las -puertas',
      $caseSensitive: false,
    }
})

```

# Geospatial indexes.

## creating geojson struct
```javascript
const result = db.cities.find();
while(result.hasNext()) {
  const item = result.next();
  db.cities.update({
    _id: item._id
  }, {
    $set: {
      position: {
        type: "Point",
        coordinates: [ item.Longitude, item.Latitude ]
      }
    }
  });
}
```


## searching near point a to b
```javascript
db.getCollection('cities').find(
{
     position:
       { $near :
          {
            $geometry: { type: "Point",  coordinates: [ -58.5035097, -34.6156624 ] },
            $minDistance: 1000,
            $maxDistance: 5000
          }
       }
   }
 )
```


# challenge

get 4 points of bs as city.
Get all document (cities) within buenos aires

.count()
