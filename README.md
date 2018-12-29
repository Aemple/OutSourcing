# 微云众包--在线接单外包系统

## 技术栈和主要框架

📦 React 全家桶：react + redux + react-router (4.3)

📌 ES6 + ES7 + Babel 7

📡 网络请求：axios + socket.io 

🎈 页面相应式框架：antd mobile(2.2.6)

✏️ 后台：express + mongoDB

## 项目运行（nodejs 8.9+）
``` bash
# 克隆到本地
git clone https://github.com/KieSun/Chat-Buy-React.git
cd chat-buy-react

# Mac 安装MongoDb (如果命令行因为网络问题安装不了，可以直接去 https://www.mongodb.com/download-center#community 下载
brew install mongodb

# Windows 安装MongoDb 直接官网下载安装

# 启动MongoDb（安装成功后命令行有提示 下面演示windows）
mongod --dbpath=xxx

# 安装依赖
npm install

# 全局安装 nodemon 
npm i nodemon -g

# 开启后端 (进入server目录)
nodemon server.js


# 开启本地服务器
npm start

# 发布环境
npm run build
```

## 项目预览
~~https://money.aemple.top~~ (服务器到期，无法预览了)
### 预览图
![注册界面](Read/zc.gif)
![登录界面](Read/dl.gif)
![聊天界面](Read/lt.gif)
![退出界面](Read/tc.gif)

## 项目目录

        ├── README.md
        ├── config               // 开发环境的配置
        ├── public
        │   ├── index.html       // 项目页面入口文件
        ├── package.json         // 项目配置文件
        ├── scripts              // npm scrips 命令配置
        ├── server               // 后端配置
        │   ├── server.js        // 服务启动文件
        │   ├── model.js         // 数据库配置
        │   ├── userRoute.js     // 接口配置    
        ├── src
        │   ├── components       // 所有组件
        │   ├── container        // 所有页面
        │   ├── redux            // redux管理
        │   ├── config.js	     // axios拦截
        │   ├── index.js         // 入口文件
        │   ├── index.css        // 页面样式
        │   ├── util.js          // 功能函数封装
        │   └── reducer.js       // 所有reducer合并

## 实现的功能
- [√] 项目按路由模块加载
- [√] 登录注册，以及登录权限控制
- [√] 信息完善页面
- [√] 外包项目页面
- [√] 我的页面
- [√] 聊天功能
- [√] 项目部署
- [√] Https加密访问链接

**未来计划**
- [] TypeScript 替换 JS
- [] 后端实现 GraphQL

## 项目部署
在部署项目这块使用了pm2来管理我们的node应用,使用nginx进行反向代理，将默认80端口指向了node项目端口，然后node服务端添加中间件进行路由拦截.

Https加密链接使用了

## 个人总结



## ❗️ 勘误

如果在项目中发现了有什么不解或者发现了 bug，欢迎提交 PR 或者 issue.

## ♥️ 感谢

如果喜欢这个项目，欢迎 Star！