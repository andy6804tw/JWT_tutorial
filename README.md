# JWT 教學
JSON Web Token (JWT)取代傳統token驗證使用者身份

流程：
使用者登入 -> 產生API token -> 進行API路徑存取時先JWT認證 -> 驗證成功才允許訪問該API

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
    "user": {
        "id": 3,
        "email": "andy@mail.com",
        "password": "0000"
    },
    "token": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhbmR5QG1haWwuY29tIiwicGFzc3dvcmQiOiIwMDAwIiwiaWF0IjoxNTA5NjA5NzY3fQ.ORgKKRRQ5qF1P_sB5MMzLLVrUSxjWHZijjlZXW4A__4"
}
```

### 3. 
path: http://localhost:8000/api/product  

method: GET

Parameters (headers) :
```
Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhbmR5QG1haWwuY29tIiwicGFzc3dvcmQiOiIwMDAwIiwiaWF0IjoxNTA5NjA5NzY3fQ.ORgKKRRQ5qF1P_sB5MMzLLVrUSxjWHZijjlZXW4A__4
```

Reponse:
```
{
    "text": "this is product",
    "user": {
        "id": 3,
        "email": "andy@mail.com",
        "password": "0000"
    }
}
```