## Description

Minimum implementation of API server with [Nest](https://github.com/nestjs/nest) framework to demonstrate the integration with Auth0.

- main branch: Before Auth0 integration
- sample/auth0-jwt-strategy branch: Auth0 integrated

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing Endpoint

Calling a public endpoint;
```
curl --request GET --url http://127.0.0.1:3000/mysub
```
