该项目是基于 react 全家桶模仿简书首页，数据为 mock 的静态数据。

## 技术栈

```json
"dependencies": {
  "axios": "^0.19.0",
  "immutable": "^4.0.0-rc.12", // 数据的安全管理和性能优化
  "react": "^16.9.0",
  "react-dom": "^16.9.0",
  "react-loadable": "^5.5.0", // 异步组件加载
  "react-redux": "^7.1.1",
  "react-router-dom": "^5.0.1", // 路由
  "react-scripts": "3.1.1",
  "react-transition-group": "^4.3.0", // 动画组件
  "redux": "^4.0.4",
  "redux-immutable": "^4.0.0", // 提供combineReducers,全局状态的imumu
  "redux-thunk": "^2.3.0",  // 可处理异步函数的action
  "styled-components": "^4.3.2"   // 样式组件，实现样式的模块化
}

```

## 预览

<img src="http://blog.inoob.xyz/github/jianshu/1.jpg" >

## 运行

```bash
git clone https://github.com/wozien/react-jianshu jianshu
cd jianshu
npm run start
```
