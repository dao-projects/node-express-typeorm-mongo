# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

```
use orm
db.createUser({ user: 'test' , pwd: '123456' , roles:[ {role: 'sysadmin' ,db: 'admin' } ]})
db.user.insertOne({id:2,username:"wj",password:"123456",mobile:"17812345678"})
db.user.find()
```


```shell
//全局安装TypeORM:
npm install typeorm -g

//创建新项目的目录并运行命令：
#database => mysql, mariadb, postgres, sqlite, mssql, oracle, mongodb, cordova, react-native, expo, nativescript
typeorm init --name node-express-typeorm-mongo --database mongo

//安装项目依赖项：
cd node-express-typeorm-mongo
npm install

//编辑ormconfig.json文件并在其中放置您自己的数据库连接配置选项
{
   "type": "mongodb",
    "host": "192.168.3.6",
    "port": 27017,
    "username": "test",
    "password": "123456",
    "database": "orm",
    "useNewUrlParser": true,
    "useUnifiedTopology": true,
    "synchronize": true,
    "logging": false,
   "synchronize": true,
   "logging": false,
   ...
}



//运行应用程序：
npm start

//项目结构
node-express-typeorm-mongo
├── src              // TypeScript 代码
│   ├── entity       // 存储实体（数据库模型）的位置
│   │   └── User.ts  // 示例 entity
│   ├── migration    // 存储迁移的目录
│   └── index.ts     // 程序执行主文件
├── .gitignore       // gitignore文件
├── ormconfig.json   // ORM和数据库连接配置
├── package.json     // node module 依赖
├── README.md        // 简单的 readme 文件
└── tsconfig.json    // TypeScript 编译选项
```
