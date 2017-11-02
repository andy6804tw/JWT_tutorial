# JWT 教學
JSON Web Token (JWT)取代傳統token驗證使用者身份

## Usage
1. clone the repository
```
$ git clone https://github.com/andy6804tw/JWT_tutorial.git
$ cd JWT_tutorial
```
2. install package
```
$ yarn install
```
3. run script
```
$ yarn start
```

## Tutorial
1. inital package
```
$ yarn init -y
$ yarn add express jsonwebtoken passport-jwt passport passport-local
```
## API Router

### 1. 
path: http://localhost:8000/api/   

method: GET

return:
```
{
    "text": "my api"
}
```

### 2. 
path: http://localhost:8000/api/login

method: POST

Parameters (body) :
```
email: andy@mail.com
password: 0000
```

Reponse:
```
{
    "token": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozfSwiaWF0IjoxNTA5NjEyNDgxfQ.n5UivhRudFB9NIAyJ6kgRmNiLUvlmDwr8OHtVI_CoQs"
}
```

### 3.
path: http://localhost:8000/api/product  

method: GET

Parameters (headers) :
```
Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozfSwiaWF0IjoxNTA5NjEyNDgxfQ.n5UivhRudFB9NIAyJ6kgRmNiLUvlmDwr8OHtVI_CoQs
```

Reponse:
```
{
    "text": "this is product",
    "data": {
        "user": {
            "id": 3
        },
        "iat": 1509612481
    }
}
```