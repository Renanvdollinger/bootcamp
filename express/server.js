const express = require('express');
const app = express();

app.use(express.json());

app.use((request, response, next) => {
  console.log('Running for every request');
  next();
});

const customers = [
  {id:1, name: "Renan"},
  {id:2, name: "Test"},
  {id:3, name: "Sam"},
];
const user = [
  {name: "Renan", email: "test@gmail.com", password: "password" },
  {name: "joao", email: "joao@gmail.com", password: "jao" },
]

app.get('/', (request, response) => {
  response.send('This is another message');
});

app.get('/customers', (request, response) => {

  if(!customers) response.status(404).send('Customer not found');
  response.send(customers);
});

app.get('/customers/:id', (request, response) => {

  // response.send(request.params.id);
  // Try to find the customer using find fuction
  var customer = customers.find(c => c.id == request.params.id);
  if(!customer) response.status(404).send('Customer not found');
  response.send(customer);
});

app.post('/customers', (request, response) => {
 if(!request.body.name) response.status(404).send('Please provide a customer name');

 var customer = {
  id: customers.length + 1,
  name: request.body.name
 }
 customers.push(customer);
 response.send(customer);
});

// Update request
app.put('/customers/:id', (request, response) => {

  // validate if the customer exist
  var customer = customers.find(x => x.id == request.params.id);
  if(!customer) response.status(404).send('Customer not found');

  //validate if we got a named to update
  if(!request.body.name) response.status(404).send('Please provide a customer name');

    //update logic
    customer.name = request.body.name;
    response.send(customer);
});

app.delete('/customers/:id', (request, response) => {
  //validate if customer exist
  var customer = customers.find(x => x.id == request.params.id);
  if(!customer) response.status(404).send('Customer not found');

  var index = customers.indexOf(customer);
  customers.splice(index,1);

  response.send(customers);

})

app.post('/resgister', (request, response) => {
  //email
  //name
  //pasword
  app.get('/users', (request, response) => {

    if(!users) response.status(404).send('User not found');
    response.send(users);
  });
  
  app.get('/customers/:email', (request, response) => {
  
    var user = users.find(c => c.id == request.params.email);
    if(!user) response.status(404).send('Email not found');
    response.send(User);
  });

  app.get('/customers/:password', (request, response) => {
  
    var user = users.find(c => c.id == request.params.email);
    if(!user) response.status(404).send('Password not found');
    response.send(User);
  });

  
  app.post('/customers', (request, response) => {
   if(!request.body.name) response.status(404).send('Please provide a customer name');
  
   var customer = {
    id: customers.length + 1,
    name: request.body.name
   }
   customers.push(customer);
   response.send(customer);
  });
  


  //validate if we have all 3 value 
  //use this example and modify it
  if(!request.body.name.email.password) response.status(404).send('Please provide a customer name');

  //use this code as 

  response.send({name: resquest.body.name}, {email: resquest.body.email}, {password: resquest.body.password});
 response.send(request.body);
})

app.all('*', (resquest, response) => {
  response.send("404 Page not Found");
});

app.listen(3000, () => {
  console.log('Application is running');
})