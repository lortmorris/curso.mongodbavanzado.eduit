const getRandomData = data => data[Math.floor(Math.random()* data.length)];
const paymenMethods = ['cc', 'cash'];
const getRandomFloat = (min, max) => Math.random() * (max - min) + min;

const getRandomString = (lenght) => {
  let text = "";
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < lenght; i += 1)
    text += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  return text;
};

getMicroSaleRandom = () => ({
  added: new Date(),
  product: {
    name: getRandomString(10),
    price: getRandomFloat(0,100)
  },
  paymenMethod: getRandomData(paymenMethods),
});

for(let x=0;x<10000; x =+ 1) db.microsales.insert(getMicroSaleRandom());
