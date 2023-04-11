let order = {
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
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };

function customerInfo(order) {
  // Adicione abaixo as informações necessárias.
  // 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'

  let comprador = order.order.delivery.deliveryPerson;
  let nome = order.name;
  let telefone = order.phoneNumber;
  let rua = order.address.street;
  let numero = order.address.number;
  let apartamento = order.address.apartment;

  let mensagem = `Olá, ${comprador}, entrega para: ${nome}, Telefone: ${telefone}, R. ${rua}, Nº: ${numero}, AP: ${apartamento}`;
    
  return mensagem;
}

function orderModifier(order) {
    // Adicione abaixo as informações necessárias.
    // 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'

    let pizzas = Object.keys(order.order.pizza)
    let novoComprador = order.name = "Luiz Silva"
    let novoTotal = order.payment.total = 50;

    let mensagem = `Olá, ${novoComprador} o valor total de seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$ ${novoTotal}`

    return mensagem;
}

console.log(customerInfo(order));

console.log(orderModifier(order));