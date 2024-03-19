const pool = require('./connection');
const express = require('express');

const app = express();

app.use(express.json());

// get all employees
app.get('/employees/', async (request, response) => {
  // get the connection
  const connection = await pool.getConnection();

  try {
    // return the query result
    const result = await connection.query('SELECT * FROM robogarden.employees');
    response.status(200).json({
      employees: result,
    });
  } catch (error) {
    response.send(500).send(error);
  }
});

// get employees base on their id
app.get('/employees/:id', async (request, response) => {
  const connection = await pool.getConnection();
  const id = request.params.id;
  try {
    const result = await connection.query(`
    SELECT * 
    FROM robogarden.employees
    WHERE employee_id = ?`, id);
    response.status(200).json({
      employees: result,
    });
  } catch (error) {
    response.send(500).send(error);
  }
});

// post employee and department
app.post('/employees/', async (request, response) => {
  const connection = await pool.getConnection();
  // const name = request.body.name;
  // const department_id = request.body.department_id;
  const { name, department_id} = request.body;

  if(!name || !department_id) return response.status(500).send('Please provide both name and department_id');
 
  try {
      const result = await connection.query(`
      INSERT INTO robogarden.employees (name, department_id)
      VALUES( ?, ?)`, [name, department_id]);
      console.log(result);
      response.status(200).send(`Rows instered ${result.affectedRows}`);
  } catch (error) {
      console.log(error);
      response.send(500).send(error);
  }
 
});

// Update Employees
app.put('/employees/:id', async (request, response) => {
  const connection = await pool.getConnection();
  const id = request.params.id;
  const name = request.body.name;

  if(!name) return response.status(500).send('Please provide a name to update');
  
try{
  const result = await connection.query(`
    UPDATE robogarden.employees
    SET name = ?
    WHERE employee_id = ?`, [name, id]);
    response.status(200).send(`Number of rows updated = ${result.affectedRows}`);

} catch (error) {
  response.send(500).send(error.toString());
}

});

// Delete
//WHERE employee_id = 15
app.delete('/employees/:id', async (request, response) => {
  const connection = await pool.getConnection();
  const id = request.params.id;
  
try{
  const result = await connection.query(`
    DELETE FROM robogarden.employees
    WHERE employee_id = ?`, id);
    response.status(200).send(`Number of records deleted = ${result.affectedRows}`);

} catch (error) {
  console.log(error);
  response.send(500).send(error.toString());
}

});

//to do 
//API request to return all Departments
app.get('/department/', async (request, response) => {
  const connection = await pool.getConnection();

  try {
    const result = await connection.query('SELECT * FROM robogarden.department');
    response.status(200).json({
      department: result,
    });
  } catch (error) {
    response.send(500).send(error);
  }
});


//API request to insert Departments
app.post('/department/', async (request, response) => {
  const connection = await pool.getConnection();
  // const name = request.body.name;
   const department_name = request.body.department_name;
  //const { name, department_id} = request.body;

  if(!department_name) return response.status(500).send('Please provide department_name');
 
  try {
      const result = await connection.query(`
      INSERT INTO robogarden.department
      VALUES ?`, department_name);
      console.log(result);
      response.status(200).send(`Rows instered ${result.affectedRows}`);
  } catch (error) {
      console.log(error);
      response.send(500).send(error);
  }
 
});

//API request to update Departments
app.put('/department/:id', async (request, response) => {
  const connection = await pool.getConnection();
  const id = request.params.id;
  const department_id = request.body.department_id;

  if(!department_id) return response.status(500).send('Please provide department_id to update');
  
try{
  const result = await connection.query(`
    UPDATE robogarden.department
    SET name = ?
    WHERE department_id = ?`, id);
    response.status(200).send(`Number of rows updated = ${result.affectedRows}`);

} catch (error) {
  response.send(500).send(error.toString());
}

});


//API request to return a department base on id
app.get('/department/:id', async (request, response) => {
  const connection = await pool.getConnection();

  try {
    const result = await connection.query('SELECT * FROM robogarden.department');
    response.status(200).json({
      department: result,
    });
  } catch (error) {
    response.send(500).send(error);
  }
});

//API request to delete a Departments base on id
app.get('/department/:id', async (request, response) => {
  const connection = await pool.getConnection();
  const id = request.params.id;
  try {
    const result = await connection.query(`
    SELECT * 
    FROM robogarden.department
    WHERE department_id = ?`, id);
    response.status(200).json({
      department: result,
    });
  } catch (error) {
    response.send(500).send(error);
  }
});


app.listen(3000, () => {
  console.log('Application is running');
})


