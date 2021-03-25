### `yarn add`

### `yarn start`

### `yarn build`

### 脚手架搭建

`npx create-react-app my-app`

### 安装 less

`yarn add --dev less less-loader`

### 根路径下新增 config-overrides.js 修改默认配置

```
const {
  override,
  addLessLoader
} = require('customize-cra');

module.exports = override(
  addLessLoader(),
);
```

### 安装 antd-mobile

`yarn add antd-mobile`

### 使用按需加载

`yarn add babel-plugin-import --dev`

### 按需加载修改 config-overrides.js

```
const {
  override,
  addLessLoader,
  fixBabelImports,
} = require('customize-cra');

module.exports = override(
  addLessLoader(),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  })
);

```

### 安装 router

`yarn add react-router-dom `

### config-overrides.js 添加别名配置

```
const path = require('path');
const {
  override,
  addLessLoader,
  fixBabelImports,
  addWebpackAlias,
} = require('customize-cra');

module.exports = override(
  addLessLoader(),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  //   引入别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
);

```

### 根路径下新增route文件，并引入至App.js
```
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '@/pages/login';
import PageNotFount from '@/pages/404';
import Home from '@/pages/home';
import Details from '@/pages/details';

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/404',
    component: PageNotFount,
    exact: true,
  },
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/details',
    component: Details,
    exact: true,
  },
];

export default function RoutesList() {
  return (
    <HashRouter>
      <Switch>
        {routes.map((route, index) => {
          return route && route.Redirect ? (
            <Redirect key={index} to={route.Redirect} />
          ) : (
            <Route key={route.path} {...route} />
          );
        })}
        <Redirect to="/404" />
      </Switch>
    </HashRouter>
  );
}

```