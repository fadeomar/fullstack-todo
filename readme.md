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

## 3- User Authentication with JWT. Sign up and Sign In:
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


## 4- Create Sequelize Migrations & Associations:

1- create table for todo's : 
`sequelize model:generate --name Todo --attributes title:string,userId:integer`;

2- create table for todo items : 
`sequelize model:generate --name TodoItem --attributes text:string,todoId:integer,isCompleted:boolean`;

3- add associations for each model:
  - for user model : 
    each user has many todos : 
  ```
    User.hasMany(models.Todo, {
      as: 'todos',
      foreignKey: 'userId',
    });
  };
  ```

  - for todo modle: 
  each todo belongs to one user and has many todoItems :

```
Todo.belongsTo(models.User, {
    as: 'user',
    foreignKey: 'userId'
  });
  Todo.hasMany(models.TodoItem, {
    as: 'todoItems',
    foreignKey: 'todoId'
  });
};

```
- for todoItem : 
each todoItem belongs to one todo :
```
  TodoItem.belongsTo(models.Todo, {
    as: 'todo',
    foreignKey: 'todoId'
  });
```

4- add to the megration files in reference for the id's ;
5- `sequelize db:migrate`;


## 5- CRUD operations for To Do List:

1- create middleware to authorize the user : 
  * check the req header contain authorization.
  * if so, it'll be like "Bearer token"
  * spilt the text to get the token text 
  * decoded the token using jwt and the secret 
  * add decoded to the req as req.decoded 
  * check if the user exist by using findByPk method form the user model and return the result; 

2- create post todo route :
  * all routes take req, res, next ;
  * destructure the body and decoded from the req; (also the title from the body)
  * use `create` method from Todo model to post new todo and pass to it object contain title and user id.
  * return the res with status 201 if there is no error and send the new todo;
  * use try and catch in case of errors;

3- create get todo's route : 
  * we want to get all todo' for the user and its items so we will use `findAll` method from todo modle and take an object with `where` key to add condetion and key `include` to get data from another table;
  * the same steps to identify the user;

4- create get one todo route : 
  * using `findOne` with `where` to get a spacific todo and we need to pass the id as params and receive it from the req;

5- create updata todo route : 
  * we need the id from params and we need to find it by the id so we will use `findByPk` method from Todo model
  * then if its exist we can use `update` method from todo model and pass it object with all key to ubdate and onther key as `where` to add conditon for the one that updata (by id);

6- create delete todo route : 
  * after finding it ;
  * use `destroy` method on the todo that returned from `findOne`;

## 6 : CRUD operations for To Do item:

1- create a script to migrate the database when making change in the megration files.
(this command will lose all the data in the DB)
2- edit the todo-item megration file : isCompleted with default value false and the text cant be null;
3- create todoItemController for the todo item routes;
4- create post todo item route : 
  * destructure the text and the todoId from the req.body;
  * validate the text and todoId and if err, send it;
  * use `create` method from todoItem model to create todoItem;
  * use try and catch in case of errors;

5- create get all todoItem :
  * destructure the todoId from the req.body;
  * use `findAll` method with `where` key to pass condetion (by id) and `include`;
  
6- create get one todoItem : 
  * destructure the todoItemId from the req.params;
  * use `fineOne` method from TodoItem model and `where` by id `include` model Todo, as 'todo';

7- create update todoItem : 
  * destructure the text and isCompleted from the req.body;
  * destructure the todoItemId from the req.params;
  * use `fineOne` method from TodoItem model and `where` by id;
  * use `update` method from TodoItem model and pass the data with `where` by id;
  
8- create delete todoItem :
  * destructure the todoItemId from the req.params;
  * use `destroy` method on the todo that rreturned from `findOne`;



## 7 : Password Reset using SendGrid :
  1- create an account in sendgrid.com website;
  2- generate API key in integration guide and add the key in env file;
  3- install sandgrid module `npm install --save @sendgrid/mail`;
  4- create utile function to handle email sending;
  5- create route to handle sending emails;
  6- create route to handle rest password;
