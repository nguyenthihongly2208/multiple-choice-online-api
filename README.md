# Multiple Choice Online API
Backend using RESTful JSON api using Nodejs, Express and MongoDB

![Npm version](https://img.shields.io/badge/npm-v5.6.0-blue.svg)
![Note version](https://img.shields.io/badge/node-v10.1.0-blue.svg)
![Document version](https://img.shields.io/badge/docs%20version-v0.2.0-blue.svg)
![Project version](https://img.shields.io/badge/project%20version-v0.1.0-blue.svg)
![Build passing](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Goal progress](https://img.shields.io/badge/goal%20progress%3A-22%25-red.svg)

## API Document vs swagger
Project use swagger to write document API. 

URL API document : [https://app.swaggerhub.com/apis/huynhduckhoan/multiple-choice-online/0.2.3](https://app.swaggerhub.com/apis/huynhduckhoan/multiple-choice-online/0.2.3)

## Using Nodejs, Express and MongoDB


```
npm install express --save
npm install mongoose --save
npm install body-parser --save
```
<!-- npm install cookie-parser --save
npm install multer --save -->
* body-parser - This a class body-parser, json handler....
* mongoose - mongodb connect, save...
* express - Http support and... 
<!-- * cookie-parser- Chuyển đổi header của Cookie và phân bố đến các req.cookies -->
<!-- * multer - Đây là một thành phần trung gian trong node.js để xử lí phần multipart/form-data. -->

Use https://mlab.com make MongoDB hosting

URL data: [https://mlab.com/databases/multiple-choice-online](https://mlab.com/databases/multiple-choice-online)

## Changle log:
### [0.0.1] - 2018-05-10
- Add framwork to project.
- Connect to mlap hosting.
- Create user models and user route.
- Add 'de-cuong.docx'
### [0.0.2] - 2018-05-11
- Test save success.
- Get/post user route. 
- Get/put user/{userID} route. 
- Update API document.
### [0.1.0] - 2018-05-14
- Update bank, group, question CRUD
- Update API document.
- Update ID from integer to string
- Update main js name