# Curso MongoDB


## Exa

- Mock de ventas (collection: microsales )
```js
{
  added: (datetime),
  product: {
    name: String,
    price: float
  },
  paymentMethod: ['cc', 'cash']
}
```

- 10.000 sales

### Stats:
- total operations: cc
- total operations: cash
- amount: cc
- amount: cash


```js
var cursor = db.microsales.find();
while(cursor.hasNext()) {
  const item = cursor.next();
}
```
