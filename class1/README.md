# Curso MongoDB


## Exa

- Mock de ventas (collection: microsales )
```js
{
  added: (datetime),
  products: [{ // one or more
    name: String,
    price: float,
    cant: Integer
  }],
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
