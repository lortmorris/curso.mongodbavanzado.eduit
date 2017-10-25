
var stats = {
  cc: {
    total: 0,
    amount: 0,
  },
  cash: {
    total: 0,
    amount: 0
  }
};

var cursor = db.microsales.find();
while(cursor.hasNext()) {
  const item = cursor.next();
  if (item.paymentMethod === 'cc' ) {
    stats.cc.total++;
    stats.cc.amount += item.product.price;
  }

  if (item.paymentMethod === 'cash' ) {
    stats.cash.total++;
    stats.cash.amount += item.product.price;
  }
}

db.salesstats.insert(stats);
