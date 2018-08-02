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
