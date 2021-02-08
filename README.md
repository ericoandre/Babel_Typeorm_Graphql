# Babel_Tyorm_Graphql

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