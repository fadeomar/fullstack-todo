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

## 3- User Authentication with JWT. Sign up and Sign In 2020:
1- fix eslint errors in models folder (user , index) that generate from sequelize .
2- create utils folder and index inside of it and create (and install JWT & bcrypt)
   *before create the function we need to add secret in env file to hash things*
  - `crateToken` function : take id and email , use jwt.sign to return token;
  - `verifyToken` function : take Token and use jwt.verify to return decoded token;
  - `hashPassword` function : take the password using bcrypt.hashSync to return hashed password;
  - `comparePassword` function : take the password and the hash using bcrypt.compareSync to return bool;

3- create controller folder and inside of it create authController file 
  * export the utile functions and the modles and 
  * create signUp route take req, res and next 
  * destructure from req body the (name , email , password);
  * using hashPassword function to hash the password;
  * register the user in the DB using User from models and pass to it the user credentials but the password as hashed;
  * create token using createToken func passing to it the user returned from registration;
  * send the token and the user without the password with status 201;
  * use try and catch in case of errors comes;

4- create route folder in the app and inside of it create index for routes 
  * import the signup route and using the app with method post;
  * import the route in the app file ind using with app as parameter;

5- to ensure that each user sign within a single email and for validate the data
  * create middleware to check that and add it to signup route;

6- create sign in route;