# MongoDB 4.x

##  Mongo Charts

(https://docs.mongodb.com/charts/master/installation/?_ga=2.63868459.546444014.1534377105-721038861.1531274992)

Required docker.

- Easy charts from collection

## Migration to 4.x

- mongodump
- data into 3.6
- install mongodb 4.0
- mongorestore


## Free monitoring
```javascript
db.enableFreeMonitoring();
{
	"state" : "enabled",
	"message" : "To see your monitoring data, navigate to the unique URL below. Anyone you share the URL with will also be able to view this page. You can disable monitoring at any time by running db.disableFreeMonitoring().",
	"url" : "https://cloud.mongodb.com/freemonitoring/cluster/CLN2CNBW3FZNEFQW5FY2SVORR3NKKZPL",
	"userReminder" : "",
}
```
## MongoTop

Show the actual consume into collection

```bash
$ mongotop
                    ns    total    read    write    2018-08-16T19:40:37-03:00
          cursodb.test    113ms     0ms    113ms                             
        admin.products      0ms     0ms      0ms                             
       admin.providers      0ms     0ms      0ms                             
    admin.system.roles      0ms     0ms      0ms                             
  admin.system.version      0ms     0ms      0ms                             
           admin.users      0ms     0ms      0ms                             
       blogtest.tokens      0ms     0ms      0ms                             
        blogtest.users      0ms     0ms      0ms                             
config.system.sessions      0ms     0ms      0ms                             
       cursodb.airport      0ms     0ms      0ms                             

                    ns    total    read    write    2018-08-16T19:40:38-03:00
          cursodb.test    112ms     0ms    112ms                             
        admin.products      0ms     0ms      0ms                             
       admin.providers      0ms     0ms      0ms                             
    admin.system.roles      0ms     0ms      0ms                             
  admin.system.version      0ms     0ms      0ms                             
           admin.users      0ms     0ms      0ms                             
       blogtest.tokens      0ms     0ms      0ms                             
        blogtest.users      0ms     0ms      0ms                             
config.system.sessions      0ms     0ms      0ms                             
       cursodb.airport      0ms     0ms      0ms        
```

## mongostat

show the current proecess consume and details.

```bash
$ mongostat
insert query update delete getmore command dirty used flushes vsize  res qrw arw net_in net_out conn                time
  4011    *0     *0     *0       0     2|0  0.2% 2.7%       0 5.09G 243M 0|0 1|0   578k    238k    2 Aug 16 19:40:46.780
  3992    *0     *0     *0       0     1|0  0.2% 2.7%       0 5.09G 244M 0|0 1|0   575k    237k    2 Aug 16 19:40:47.780
  4024    *0     *0     *0       0     2|0  0.2% 2.7%       0 5.09G 245M 0|0 1|0   580k    239k    2 Aug 16 19:40:48.778
  4009    *0     *0     *0       0     1|0  0.2% 2.7%       0 5.09G 245M 0|0 1|0   578k    238k    2 Aug 16 19:40:49.778
  4060    *0     *0     *0       0     1|0  0.2% 2.7%       0 5.09G 246M 0|1 1|0   585k    240k    2 Aug 16 19:40:50.780
  3987    *0     *0     *0       0     2|0  0.2% 2.7%       0 5.09G 247M 0|0 1|0   574k    237k    2 Aug 16 19:40:51.777
  4068    *0     *0     *0       0     1|0  0.3% 2.8%       0 5.09G 248M 0|0 1|0   586k    240k    2 Aug 16 19:40:52.779
  4046    *0     *0     *0       0     2|0  0.3% 2.8%       0 5.09G 249M 0|0 1|0   583k    239k    2 Aug 16 19:40:53.778
  4004    *0     *0     *0       0     1|0  0.3% 2.8%       0 5.09G 250M 0|0 1|1   577k    238k    2 Aug 16 19:40:54.779
  4063    *0     *0     *0       0     1|0  0.3% 2.8%       0 5.09G 251M 0|0 1|0   585k    240k    2 Aug 16 19:40:55.779
```
