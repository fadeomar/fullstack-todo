## 1- eslint configration :- 

## 2- configure Sequelize with PostgreSQL : -
  1- install sequelize cli globally
  2- install sequelize and dotenv
  
  3- create database using postgress : 
    - in the terminal :
      * create database todo_test;
      * create database todo_dev;
      * create user todo WITH SUPERUSER PASSWORD 'todo';
      * ALTER DATABASE todo_dev OWNER TO todo;
      * alter database todo_test owner to todo; 

  4- create `.sequelizerc` file to create configrations files 

  5- in the config file that generate from sequelize add the configration for the database and user information

  6- run command to generate table users : 

    `sequelize model:generate --name User --attributes name:string,email:string,password:string`

  7- run command to migrated the db with the tables 
  
    `sequelize db:migrate`
