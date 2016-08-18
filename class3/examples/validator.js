db.createCollection( “users”,
{ validator: { $and:
    [
        { phone: { $type: "string" } },
        { email: { $regex: /@gmail\.com$/ } },
        { status: { $in: [ “Complete”, "Incomplete" ] } }
]
}
});

db.contacts.insert({phone: "123123", email:"some@mongodb.com", status: "Complete"});
db.contacts.insert({phone: "123123", email:"some@mongodb.com", status: "Incomplete"});
db.contacts.find();
