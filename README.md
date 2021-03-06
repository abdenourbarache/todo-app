# todo-app 

## Made with : React, Redux, Webpack, NodeJS and MongoDB also using JWT mechanism for the authentication.

The project is separated into:
- Frontend application : React, Redux, Webpack
- Backend application (api) : NodeJS, express, MongoDB

### How to run

1. Install node (this app was made with the v14.2.0)
2. Install yarn
3. Install mongodb and start it


Go to todo-app-backend folder, open the terminal then run

```sh
$ yarn install
$ node server/server.js

```
The api should run in localhost:3000 

Than go to todo-app-frontend,open the terminal and run
```sh
$ yarn install

```
Then you choose one of these ways to run the app:

```sh
A. Build the app and run it on express server :  
  $ yarn run build:dev
  $ yarn start
 ```
 
The app should be ready to use in localhost:4000

 ```sh
B. Run webpack dev-server :  
  $ yarn run dev-server
```

The app should be ready to use in localhost:8080 

### Demo application:
https://todo-app-frontend-react.herokuapp.com/
