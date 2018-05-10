function getStats() {
 var result = db.sales.find({});
 const stats = {};
 while(result.hasNext()) {
   const item = result.next();
   if (typeof stats[`${item.vendor.fname} ${item.vendor.lname}`] === 'undefined') {
    stats[`${item.vendor.fname} ${item.vendor.lname}`] = 0;
   }

   stats[`${item.vendor.fname} ${item.vendor.lname}`] += item.totalAmount;
 }

 db.statsSales.insert({ stats, datetime: new Date() });
}

getStats();
