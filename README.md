<h1 align="center">RESTful-API</h1>
<h2 align="center">Express.js | Mongoose | JWT</h2>

&nbsp; &nbsp; &nbsp;This is my **Dynamic Content Server**. The **Data** between the **Frontend** and my **RESTful API** is **transmitted** by means of a **JSON** files. The **Server** stores all the **Data** for the **Users** and **Created Items** in **MongoDB**. It supports all **CRUD** operations, needed by a **Modern Web Application**.

&nbsp; &nbsp; &nbsp;All **Actions** of the **Users** in the **DB Collections** are **Strictly Reviewed** under **Authentication and Authorization**. The **Authentication** is implemented with two fields: **email** and **password**. To make an **Authorized request**, add **X-Authorization: {token}** **Header**, where **{token}** is the **access token**, returned by the **Service** upon **successful** Login or Registration.

## Details

- created with Node.js + Express.js + MongoDB
- used libraries like: bcrypt, jsonwebtoken, express-validator, mongoose
- email: kalin@abv.bg, password: 123

## All CRUD operations

- GET
- POST
- PUT
- DELETE

## Support following endpoints

- `POST /users/register` - register
- `POST /users/login` - login
- `GET /users/logout` - logout

- `GET /data/catalog` - get all items
- `POST /data/catalog` - create item

- `GET /data/catalog/:id` - get item
- `PUT /data/catalog/:id` - edit item
- `DELETE /data/catalog/:id` - delete item

### Before you start the Application you need to install MongoDB.

### After successful installation of MongoDB you can start the REST Api.

To run this RESTful-API locally, follow these steps:

1.  Clone the repository:

- `git clone https://github.com/kalinsky-dev/RESTful-API`

2.  Navigate to the project directory:

- `cd RESTful-API & npm i`

3.  Start the application with npm start.

- `npm start`

That's it! You can now start my Small-Fullstack-App Application on your local machine at http://localhost:3030/.
