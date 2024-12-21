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

Calling a private endpoint:
Pass your JWT in authorization header.
You can get test JWT (access_token) from the test tab of your API settings page in Auth0 management site.
```
curl --request GET --url http://127.0.0.1:3000/mysub --header 'authorization: Bearer {your JWT}'
```
