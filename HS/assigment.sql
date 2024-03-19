CREATE TABLE `robogarden`.`employees` (
  `employee_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `department_name` VARCHAR(45) NULL,
  PRIMARY KEY (`employee_id`));
  
  
  CREATE TABLE `robogarden`.`department` (
  `department_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `department_name` VARCHAR(45) NULL,
  PRIMARY KEY (`department_id`));
 
  
  SELECT * FROM employees;

  INSERT INTO `robogarden`.`employees` 
  (`name`, `department_name`) 
  VALUES ('Sam', 'IT');
  INSERT INTO `robogarden`.`employees` 
  (`name`, `department_name`) 
  VALUES ('Nora', 'HR');
  INSERT INTO `robogarden`.`employees` 
  (`name`, `department_name`) 
  VALUES ('David', 'IT');
  INSERT INTO `robogarden`.`employees` 
  (`name`, `department_name`) 
  VALUES ('Queen', 'HR');
  
  INSERT INTO `robogarden`.`employees`  
  VALUES ('18', 'test', 'Teaching');
  
  SELECT * FROM employees
  WHERE employee_id = 17;
  
  
  INSERT INTO `robogarden`.`department` 
  (`name`, `department_name`) 
  VALUES ('Sam', 'IT');
  INSERT INTO `robogarden`.`department` 
  (`name`, `department_name`) 
  VALUES ('Susan', 'HR');
  
UPDATE robogarden.employees
SET NAME = 'Renan', department_name = 'Teaching'
WHERE employee_id = 17;

SELECT * FROM employees;

-- UPDATE the name of the employee 18 to be Sukhi
UPDATE robogarden.employees
SET NAME = 'Sukhi', department_name = 'Teaching'
WHERE employee_id = 18;

-- Deleting the hole row (employee id 13)
DELETE FROM robogarden.employees
WHERE employee_id = 13;


SELECT * FROM robogarden.orders;

-- Deleting all the data from the table
TRUNCATE TABLE orders;

-- To delete a table
DROP TABLE orders;

-- To see the structure of a table
DESCRIBE robogarden.customers;

DESC robogarden.employees;

-- To drop a column table structure
ALTER TABLE robogarden.employees
DROP COLUMN department_name;


-- To add a column name city to customers table
ALTER TABLE robogarden.customers
ADD COLUMN city varchar(45) NULL;

-- To add a column to employee table name department_id
ALTER TABLE robogarden.employees
ADD COLUMN department_id varchar(45) NULL;

-- fixing the mistake FOR the line before (department_id = numbers and need to be with INT not Varchar)
ALTER TABLE robogarden.employees
MODIFY COLUMN department_id INT(11) NULL;

-- To add department_id as foreigh key in employees table
ALTER TABLE robogarden.employees
ADD CONSTRAINT FOREIGN KEY (department_id) REFERENCES department(department_id);

-- query to get the query of table creation
SHOW CREATE TABLE employees;

-- if you have to add the foreign key on table creation
CREATE TABLE `employees` (
  `employee_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `department_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  KEY `department_id` (`department_id`),
  CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=UTF8MB4_GENERAL_CI

ALTER TABLE robogarden.employees
ADD COLUMN salary INT(11) ;


SELECT * FROM employees;
SELECT * FROM department;
SELECT * FROM robogarden.employees
  