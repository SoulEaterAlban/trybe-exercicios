const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const customerValue = (order) => Object.values(order);
  const message =`Olá Ana Silveira, entrega para: ${customerValue(order)[0]}, Telefone: ${customerValue(order)[1]}, ${customerValue(order)[2].street}, Nº: ${customerValue(order)[2].number}, AP: ${customerValue(order)[2].apartment}`;
  return console.log(message);
}

customerInfo(order);

const orderModifier = (order) => {
  const customerValue = (order) => Object.values(order);
  order.name = 'Luiz Silva';
  order.payment.total = '50,00';

  const marguerita =  Object.keys(customerValue(order)[3].pizza)[0];
  const pepperoni =  Object.keys(customerValue(order)[3].pizza)[1];
  const coca = customerValue(order)[3].drinks.coke.type;
  
  const message =`Olá ${customerValue(order)[0]}, o total do seu pedido de ${marguerita}, ${pepperoni} e ${coca} é R$ ${customerValue(order)[4].total}.`;
  return console.log(message);
}

orderModifier(order);