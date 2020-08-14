# ApiREST

**NodeJs** server using **express4** and **mongodb**

### Prerequisites

You must have installed

- nodejs
- mongodb
- nodemon (or install this dependency locally by running: 
```
  npm install --save-dev nodemon
```
)

### Installing

Go to your preferred dir path and clone this repo:

```
$ git clone https://github.com/YOUR-USERNAME/basic-nodejs-api-rest.git
$ git cd basic-nodejs-api-rest
$ git npm install
```

Open a new tab on your terminal and run:
`$ mongo`

Go to _basic-nodejs-api-rest_ folder and open a new tab terminal and run:

`$ npm run develop`
in order to up your server. This will run the server at
`8080` port (You can change this on .env file if you want)

### Working Endpoints (_for this case_)

BASE_URL/measurements

> GET all

> POST

BASE_URL/measurements/:id

> GET one

> PATCH / PUT

> DELETE

### Deployment

Using [Heroku](https://www.heroku.com/) and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

click [here](https://basic-nodejs-api-rest.herokuapp.com/) to test the **ApiREST** and receive some random data
