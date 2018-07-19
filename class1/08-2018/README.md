
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


#### challenge
- Create database 'myowntest';
- Create collection with numbers between 1 - 100000
- Make dump of database 'myowntest'
- Remove database 'myowntest'
- Restore database 'myowntest'
