/**
 This example emulate "pokestops", generate dynamic geoPoints and saving into points collection.
 */


db.markers.createIndex( { location : "2dsphere" } );


db.markers.find(
    {
        location: {
            $near: {
                $geometry: {
                    type: "Point" ,
                    coordinates: [ -58.461531, -34.569751]
                },
                $maxDistance: 200
            }
        }
    }
)

