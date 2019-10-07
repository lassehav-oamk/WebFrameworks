
# Express Basic Passport

> Express example application with API secured with HTTP Basic Authentication 


## Installation

- Clone and install dependencies `npm install` 
- Additionally you need to have a MySQL service running and configure with a database + user to access it. See db.js for example username, password and database names. Change or adapt as needed. The application will create the necessary tables into the database.


### Startup

> Start the application 

```shell
$ node index.js
```

---

## Features

> Application offers the following API routes
- /users [GET, POST]
  * GET will retrieve the usernames and id's of the uses.
  * POST will create a new user with the provided username and password.
```javascript
{
  "username": "SomeUserName",
  "password": "PasswordForTheUser"
}
```

- /hello-protected [GET]
  * Will return "Hello Protected World!" text, but requires authentication headers be sent according to HTTP Basic scheme

- /hello-unprotected [GET]
  * Will return simple "Hello World!" text.
