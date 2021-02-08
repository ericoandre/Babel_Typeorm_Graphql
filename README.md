# Babel Tyorm Graphql

```bash
cd 
yarn
yarn dev

yarn build 
yarn start
```

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
