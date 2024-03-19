const Department = require('../models/department');
const router = require('express').Router();

router.post('/add_department', (request, response) => {
  Department.create({
    DepartmentName: request.body.department_name
  }).then((result) => {
    return response.status(200).send(result);
  }).catch( (error) => {
    return response.status(500).send(error);
  });
});

//to do
//create get_department
router.get('/get_department', (request, response) => {

  Department.findAll().then((result) => {
    return response.status(200).send(result);
  }).catch( (error) => {
    return response.status(500).send(error);
  });
});


// create get a specific department
router.get('/get_department/:id', (request, response) => {

  Department.findAll(
    {where : {id: request.params.id}}
  ).then((result) => {
    return response.status(200).send(result);
  }).catch( (error) => {
    return response.status(500).send(error);
  });
});

// update a department
router.patch('/update_department/:id', (request, response) => {

  const id = request.params.id;

  Department.findByPk(id).then( (department) => {
    if(department){
      for(let i in request.body){
        department[i] = request.body[i];
      }
      department.save().then( (result) => {
        return response.status(200).send(result);
      })
    } else {
      return response.status(404).send('Department not found!');
    }
  }).catch( (error) => {
    return response.status(500).send(error);
  });
})

//delete a department
router.delete('/delete/:id', (request, response) => {

  const id = request.params.id;

  Department.findByPk(id).then( (department) => {
    if(department){
      department.destroy().then( (result) => {
        response.status(200).send('Department deleted!!');
      })
    } else {
      return response.status(404).send('Department not found!');
    }
  }).catch( (error) => {
    return response.status(500).send(error);
  });
})


module.exports = router;
