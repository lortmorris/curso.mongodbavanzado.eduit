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
mongoimport --db cursodb --collection cities -f Country,City,AccentCity,Region,Population,Latitude,Longitude --type csv  --file worldcitiespop.txt

```
