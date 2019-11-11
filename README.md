# myProjectVueAntDesing

## 初始版本antDesignVue cli

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### 项目

```
    |-- jy_antDesignVueCli
    |-- .gitignore
    |-- babel.config.js  // babel配置项
    |-- package-lock.json 
    |-- package.json
    |-- project_config.js // 切换项目环境配置项
    |-- README.md  // 项目说明文档
    |-- vue.config.js  // webpack自定义配置项
    |-- yarn.lock
    |-- projectConfig  // 项目配置目录(可以自定义增加配置)
    |   |-- devConfig.json  // 测试环境
    |   |-- prodConfig.json // 生产环境
    |-- public // 公共目录
    |   |-- favicon.ico // 网站icon
    |   |-- index.html // 主体页面
    |-- src // 项目构建目录
        |-- main.js // 公共引用
        |-- api // 请求接口配置目录
        |   |-- axiosConfig.js // axios配置项
        |   |-- index // 接口引用目录
        |       |-- config.js
        |       |-- index.js
        |-- assets // 本地引用文件放置目录
        |   |-- logo.png
        |   |-- css // 本地css
        |   |   |-- common.less
        |   |   |-- reset.css
        |   |   |-- swiper
        |   |       |-- swiper.css
        |   |-- font // 本地字体库
        |       |-- font.css
        |-- bus // 集成全局方法 $bus
        |   |-- busConfig.js // $bus配置项
        |   |-- index // $bus 
        |-- components // 组件
        |   |-- business // 业务组件放置目录
        |   |-- layout // 布局组件放置目录
        |   |-- public // 公共组件放置目录
        |-- mixins // mixins目录
        |   |-- utils.js
        |-- pages // 配置多页面引用
        |   |-- index
        |       |-- App.vue
        |       |-- index.js
        |-- plugins // 放置插件目录
        |   |-- ant-design-vue.js  // ant-design-vue配置目录
        |-- router // vue路由配置目录
        |   |-- router.js  
        |   |-- base // 路由管理目录
        |       |-- baseRouter.js
        |-- store // vuex配置目录
        |   |-- actions.js
        |   |-- getters.js
        |   |-- index.js
        |   |-- mutation-types.js
        |   |-- mutations.js
        |   |-- state.js
        |-- until
        |   |-- index.js
        |-- view // view配置目录
            |-- index
                |-- index.vue
```
