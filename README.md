## Prerequisites

- [Node.js](https://nodejs.org/en) v20

## Scenario
Let's imagine you are working on an application that will allow its users to access a list of music festivals.

### Structure of the application
This repository is made of two separate projects. They need to be installed and run separately.
#### `api`
It contains an API for the Festivals Application. It's using [express](https://expressjs.com/) package along
with [Apollo GraphQL server](https://www.apollographql.com/docs/).

#### `web`
It's the front-end part of the application built using [Next.js](https://nextjs.org/docs).

### What is currently implemented
#### `api`
- Working express server with a REST and GraphQL routes
    - REST
        - An authentication controller
          - allows users to log in
    - GraphQL
        - A resolver providing access to festival data

#### `web`
- A list of festivals fetched from the api
- A login form for the user
- A header with navigation

### Your tasks
#### Task 1:
Please make a code review of the currently implemented solution.
#### Task 2:
Allow the user to login into the application and secure the festivals list to make it accessible only to authenticated users:
- Use existing login form to handle the login on the client side by finishing it
- Authenticate the user, returning a security token (for simplicity, you may use the user id as a token),
- Handle the token on the client side
- Secure the `festivals` resolver to only return the data for authenticated users,


## Installing the app
To install the API:
```shell
cd api
npm install
```

To install the web application:
```shell
cd web
cd web npm install
```

## Running the app
To run the API
```shell
npm run start:api
```
or
```shell
cd api
npm run start
```

To run the web application:
```shell
npm run start:web
```
or
```shell
cd api
npm run dev
```

## Running the tests
To run the API tests:
```shell
npm run test:api
```
or
```shell
cd api
npm run test
```

To run the web application tests:
```shell
npm run test:web
```
or
```shell
cd api
npm run test
```