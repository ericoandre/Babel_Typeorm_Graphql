# Babel Typeorm  Graphql

```bash
git clone https://github.com/ericoandre/Babel_Typeorm_Graphql.git
cd Babel_Typeorm_Graphql

yarn

yarn dev
yarn build 
yarn start
```

## Consultas Simples GraphQl  

```json
{
  users{
    id
    firstname
  }
}
```

```json
mutation{
  createUser(data:{
    firstname:"erico"
    lastname:"andre"
    nickname:"ericoandre"
    email:"erico@mail.com"
    password:"12345"
  }){
    id
    firstname
  }
}
```
