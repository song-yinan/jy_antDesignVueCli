const path = require("path");


const URLConfig = require("./projectConfig/devConfig.json");
// debug=== true 开发环境
const debug = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
// 定义压缩文件类型
const productionGzipExtensions = ["js", "css"];
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  pages: {
    index: {
      entry: "src/pages/index/index.js",
      template: "public/index.html",
      filename: "index.html",
      title: "antDesign",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  publicPath: "./",
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: debug ? false : true, // 运行时版本是否需要编译
  productionSourceMap: debug ? false : false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  configureWebpack: config => {
    // webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (debug) {
      // 开发环境配置
      config.devtool = "source-map";
    } else {
      // 生产环境配置
      // config.plugins.push(
      //   new webpack.ProvidePlugin({
      //     jQuery: "jquery",
      //     $: "jquery"
      //   })
      // );
      // config.plugins.push(
      //     new BundleAnalyzerPlugin()
      // );
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("./src/assets"))
      .set("@components", resolve("./src/components"))
      .set("@api", resolve("./src/api"))
      .set("@view", resolve("./src/view"))
      .set("@root", resolve("./"))
      .set("@utils", resolve("./src/utils"))
      .set("@mixins", resolve("./src/mixins"));
    if (debug) {
      // 本地开发配置
    } else {
      // 生产开发配置
     
    }
  },
  css: {
    // 配置高于chainWebpack中关于css loader的配置
    // modules: true, // 是否开启支持‘foo.module.css’样式
    extract: debug ? false : true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
    sourceMap: debug ? false : false, // 是否在构建样式地图，false将提高构建速度
    loaderOptions: {
      // css预设器配置项
      css: {
        localIdentName: "[name]-[hash]",
        camelCase: "only"
      },
      less: {
        modifyVars: {
          "primary-color": "#0586fd",
          "link-color": "#0586fd",
          "border-radius-base": "2px"
        },
        javascriptEnabled: true,
        stylus: {}
      }
    }
  },
  parallel: require("os").cpus().length > 1, // 构建时开启多进程处理babel编译
  pwa: {
    // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  },
  devServer: {
    open: false,
    host: "0.0.0.0",
    // port: 9999,
    hot: true,
    inline: false,
    // https: true,
    proxy: {
      "/api": {
        target: URLConfig["baseUrl"],
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/css/common.less")]
    }
  }
};
