# CRUD (Mongo, Express, JWT & Node.js)

A RESTful API using Node.js + Express.js + Mongoose + JWT to serve data about Madonna and Adele's Discography.

`API Version: 1.0.0`



## Basic Information

User's information are:

- name: String
- email: String
- password: String, 8

Adele's and Madonna information are:

- albumName: String
- albumGenre: String
- albumYear: Number
- albumCover: String
- albumProducer: String

Adele's and Madonna awards information are:

- awardCategory: String
- awardYear: Number



## Login endpoint - execution

1. Clone this repository
   - `git clone https://github.com/chanelym/understanding-NodeJS-JWT.git`
2. Go to `understanding-NodeJS-JWT\backend`folder
3. Install dependencies
   - `npm install`

4. Setup .env_bkp to connect into your MongoDB. Don't forget to rename it to .env
5. If everything is in order `nodemon` should work

6. Open your Thunder/Insomnia/Postman and create an user for you:

   - `http://localhost:3000/v1/api/register`

   - Body goes as:

     ```
     {
       "name": "Leonardo Lindo",
       "email": "leonardo@email.com",
       "password": "leoLindo",
     }
     ```

7. Copy your token and go to

   - `http://localhost:3000/v1/api/login`

   - Body goes as:

     ```
     {
       "email": "leonardo@email.com",
       "password": "leoLindo"
     }
     ```

   - Put your Token under `Headers -> (type) Authorization -> (paste your token in value field` and press Send. 

     If everything is in order you can explore Madonna's endpoints

     

## Madonna's endpoint - execution

Under Construction...

