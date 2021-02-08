# Babel Tyorm Graphql

```bash
git clone https://github.com/ericoandre/Babel_Tyorm_Graphql.git
cd Babel_Tyorm_Graphql
yarn
yarn dev

yarn build 
yarn start
```
<hr>

## Consultas Simples GraphQl  

```
{
  users{
    id
    firstname
  }
}
```

```
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
