
# MongoTools

## Mongodump

This command is use for make databases dump.

### Create a database example, and collection with 1000 documents.
```javascript
> use cursodb;
switched to db cursodb
> show dbs;
admin      0.000GB
config     0.000GB
local      0.000GB
> db
cursodb
>
> for (let x=0; x<1000; x++) db.numbers.insert({ x, x2: x*2 });
WriteResult({ "nInserted" : 1 })
> show collections;
numbers
> show dbs;
admin      0.000GB
config     0.000GB
cursodb    0.000GB
local      0.000GB
>
> db
cursodb
> show collections;
numbers
> db.numbers.find().count()
1000
>
```

### make Mongodump
```bash
cesars-MBP:08-2018 cesarcasas$ mongodump -d cursodb
2018-07-19T19:26:45.861-0300	writing cursodb.numbers to
2018-07-19T19:26:45.866-0300	done dumping cursodb.numbers (1000 documents)
cesars-MBP:08-2018 cesarcasas$ ls -la
total 8
drwxr-xr-x  4 cesarcasas  staff  128 Jul 19 19:26 .
drwxr-xr-x  8 cesarcasas  staff  256 Jul 19 19:16 ..
-rw-r--r--  1 cesarcasas  staff  573 Jul 19 19:26 README.md
drwxr-xr-x  3 cesarcasas  staff   96 Jul 19 19:26 dump
cesars-MBP:08-2018 cesarcasas$
```

### remove databases
```javascript
> show collections;
numbers
> db.dropDatabase();
{ "dropped" : "cursodb", "ok" : 1 }
>
```

### restoring database
```bash
cesars-MBP:08-2018 cesarcasas$ mongorestore
2018-07-19T19:30:20.302-0300	using default 'dump' directory
2018-07-19T19:30:20.302-0300	preparing collections to restore from
2018-07-19T19:30:20.303-0300	reading metadata for cursodb.numbers from dump/cursodb/numbers.metadata.json
2018-07-19T19:30:20.345-0300	restoring cursodb.numbers from dump/cursodb/numbers.bson
2018-07-19T19:30:20.360-0300	no indexes to restore
2018-07-19T19:30:20.360-0300	finished restoring cursodb.numbers (1000 documents)
2018-07-19T19:30:20.360-0300	done
cesars-MBP:08-2018 cesarcasas$
```

```javascript

> show databases;
admin      0.000GB
config     0.000GB
cursodb    0.000GB
local      0.000GB
> use cursodb;
switched to db cursodb
> show collections;
numbers
> db.numbers.find().count()
1000
>
```
### compress the dump directory
```bash
cesars-MBP:08-2018 cesarcasas$ tar -zcvf dump.tgz dump
a dump
a dump/cursodb
a dump/cursodb/numbers.metadata.json
a dump/cursodb/numbers.bson
cesars-MBP:08-2018 cesarcasas$ ls -la
total 24
drwxr-xr-x  5 cesarcasas  staff   160 Jul 19 19:50 .
drwxr-xr-x  8 cesarcasas  staff   256 Jul 19 19:16 ..
-rw-r--r--  1 cesarcasas  staff  2230 Jul 19 19:37 README.md
drwxr-xr-x  3 cesarcasas  staff    96 Jul 19 19:26 dump
-rw-r--r--  1 cesarcasas  staff  6683 Jul 19 19:50 dump.tgz
```

### uncompress dump.tgz
```bash
cesars-MBP:08-2018 cesarcasas$ tar -zxvf dump.tgz
```

#### challenge
- Create database 'myowntest';
- Create collection with numbers between 1 - 100000
- Make dump of database 'myowntest'
- Remove database 'myowntest'
- Restore database 'myowntest' from dump


## MongoExport

### example
```bash
cesars-MBP:08-2018 cesarcasas$ mongoexport --db cursodb --collection numbers --out numbers.json
2018-07-19T19:54:39.246-0300	connected to: localhost
2018-07-19T19:54:39.268-0300	exported 1000 records
cesars-MBP:08-2018 cesarcasas$
cesars-MBP:08-2018 cesarcasas$ mongoexport --db cursodb --collection numbers --out numbers.json --type csv --fields _id,x,x2
2018-07-19T19:57:55.140-0300	connected to: localhost
2018-07-19T19:57:55.147-0300	exported 1000 records
cesars-MBP:08-2018 cesarcasas$
cesars-MBP:08-2018 cesarcasas$ mongoexport --db cursodb --collection numbers --out numbers.json --jsonArray
2018-07-19T19:59:41.900-0300	connected to: localhost
2018-07-19T19:59:41.933-0300	exported 1000 records
cesars-MBP:08-2018 cesarcasas$
```

### example for import
```bash
cesars-MBP:08-2018 cesarcasas$ mongoimport --db cursodb --collection numbers2 --file numbers.json --jsonArray
2018-07-19T20:02:45.374-0300	connected to: localhost
2018-07-19T20:02:45.443-0300	imported 1000 documents
cesars-MBP:08-2018 cesarcasas$
```

```javascript
> use cursodb;
switched to db cursodb
> show collections;
numbers
numbers2
> db.numbers2.find().count()
1000
>
```


#### challenge
```bash
cesars-MBP:08-2018 cesarcasas$ wget https://raw.githubusercontent.com/datasets/airport-codes/master/data/airport-codes.csv
--2018-07-19 20:06:54--  https://raw.githubusercontent.com/datasets/airport-codes/master/data/airport-codes.csv
Resolving raw.githubusercontent.com (raw.githubusercontent.com)... 151.101.216.133
Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|151.101.216.133|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 5788577 (5.5M) [text/plain]
Saving to: 'airport-codes.csv'

airport-codes.csv                                           100%[=========================================================================================================================================>]   5.52M  1.30MB/s    in 4.7s    

2018-07-19 20:06:59 (1.18 MB/s) - 'airport-codes.csv' saved [5788577/5788577]

cesars-MBP:08-2018 cesarcasas$ ls -la
total 12456
drwxr-xr-x  6 cesarcasas  staff      192 Jul 19 20:06 .
drwxr-xr-x  8 cesarcasas  staff      256 Jul 19 19:16 ..
-rw-r--r--  1 cesarcasas  staff     4022 Jul 19 20:03 README.md
-rw-r--r--@ 1 cesarcasas  staff  5788577 Jul 19 20:06 airport-codes.csv
drwxr-xr-x  3 cesarcasas  staff       96 Jul 19 19:26 dump
-rw-r--r--  1 cesarcasas  staff    65337 Jul 19 19:59 numbers.json
cesars-MBP:08-2018 cesarcasas$ du -sh airport-codes.csv
6.0M	airport-codes.csv
cesars-MBP:08-2018 cesarcasas$ tar -zcvf airport-codes.csv.tgz airport-codes.csv
a airport-codes.csv
cesars-MBP:08-2018 cesarcasas$ du -sh airport-codes.csv.tgz
1.9M	airport-codes.csv.tgz
cesars-MBP:08-2018 cesarcasas$
```

- Uncompress airport-codes.csv.tgz
- Import from airport-codes.csv : ident,type,name into 'airport' collection, into 'cursodb' database.
- (see mongoimport --help )

```bash
cesars-MBP:08-2018 cesarcasas$ mongoimport --db cursodb --collection airport -f ident,type,name --type csv  --file airport-codes.csv
2018-07-19T20:50:13.508-0300	connected to: localhost
2018-07-19T20:50:14.368-0300	imported 52579 documents
cesars-MBP:08-2018 cesarcasas$

```

```javascript
> use cursodb;
switched to db cursodb
> show collections;
airport
numbers
numbers2
> db.airport.find().count()
52579
```

# Query examples

## get all document, population only some fields
```javascript
> db.airport.find( {} , { _id: -1, ident: 1, type: 1, name: 1, elevation_ft: 1 } );
```

## get all documents, where name have pattern 'Jorge'
```javascript
> db.airport.find( { name: /Jorge/ } , { _id: -1, ident: 1, type: 1, name: 1, elevation_ft: 1 } );
```
## get all documents where elevation_ft gt 15000
```javascript
db.airport.find( { elevation_ft : { $gt: 15000 } } , { _id: -1, ident: 1, type: 1, name: 1, elevation_ft: 1 } )
```

## get all documents where elevation_ft < 0, sorting elevation_ft
```javascript
> db.airport.find( { elevation_ft : { $lt: 0  } } , { _id: -1, ident: 1, type: 1, name: 1, elevation_ft: 1 } ).sort({ elevation_ft: 1 })
{ "_id" : ObjectId("5b51244bbff1e680d9b7b8c9"), "ident" : "LLMZ", "type" : "medium_airport", "name" : "Bar Yehuda Airfield", "elevation_ft" : -1266 }
{ "_id" : ObjectId("5b51244bbff1e680d9b7abe6"), "ident" : "KL06", "type" : "small_airport", "name" : "Furnace Creek Airport", "elevation_ft" : -210 }
{ "_id" : ObjectId("5b51244bbff1e680d9b7a6ac"), "ident" : "KCLR", "type" : "small_airport", "name" : "Cliff Hatfield Memorial Airport", "elevation_ft" : -182 }
{ "_id" : ObjectId("5b51244bbff1e680d9b7b8ba"), "ident" : "LLEY", "type" : "small_airport", "name" : "Ein Yahav Airfield", "elevation_ft" : -164 }
{ "_id" : ObjectId("5b51244bbff1e680d9b7a62f"), "ident" : "KBWC", "type" : "small_airport", "name" : "Brawley Municipal Airport", "elevation_ft" : -128 }
{ "_id" : ObjectId("5b51244bbff1e680d9b7b205"), "ident" : "KTRM", "type" : "medium_airport", "name" : "Jacqueline Cochran Regional Airport", "elevation_ft" : -115 }
{ "_id" : ObjectId("5b51244bbff1e680d9b758de"), "ident" : "59CL", "type" : "small_airport", "name" : "O'Connell Brothers Airport", "elevation_ft" : -99 }
{ "_id" : ObjectId("5b51244bbff1e680d9b76762"), "ident" : "9CA2", "type" : "heliport", "name" : "Pioneers Memorial Hospital Heliport", "elevation_ft" : -99 }
{ "_id" : ObjectId("5b51244cbff1e680d9b7d8e7"), "ident" : "SAS", "type" : "small_airport", "name" : "Salton Sea Airport", "elevation_ft" : -84 }
{ "_id" : ObjectId("5b51244cbff1e680d9b7ccf1"), "ident" : "OINJ", "type" : "small_airport", "name" : "Bishe Kola Air Base", "elevation_ft" : -79 }
{ "_id" : ObjectId("5b51244cbff1e680d9b7d75f"), "ident" : "RU-0381", "type" : "small_airport", "name" : "Osypnoy Bugor Airfield", "elevation_ft" : -72 }
```

## get all documents where elevation_ft between [10000, 12000]
```javascript
> db.airport.find( { $and: [{ elevation_ft: {$gt: 10000} }, { elevation_ft: { $lt: 12000 }  }]  }, { name: 1, elevation_ft: 1} )
```

## create indexes
```javascript
> db.getCollection('airport').createIndex({ elevation_ft: -1 });
> db.getCollection('airport').createIndex({ elevation_ft: 1 });
> db.getCollection('airport').createIndex({ name: -1 })
> db.getCollection('airport').createIndex({ name: 1 })
```

# challenge
- Download & unzip
```bash
cesars-MBP:08-2018 cesarcasas$ wget http://download.maxmind.com/download/worldcities/worldcitiespop.txt.gz  
cesars-MBP:08-2018 cesarcasas$ gunzip worldcitiespop.txt.gz
```

- Import the csv into 'cities' collection (cursodb)
- Create index on props 'City' (-1, 1)
