import axios from "axios";
import jsonp from "jsonp";
import { config } from "@root/project_config";
const isDev = process.env.NODE_ENV !== "production";
if (!isDev) {
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
}
const BASEURL = config["baseUrl"];
const TIMEOUT = 15000;
//响应拦截器即异常处理
axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = "错误请求";
          break;
        case 401:
          err.message = "未授权，请重新登录";
          break;
        case 403:
          err.message = "拒绝访问";
          break;
        case 404:
          err.message = "请求错误,未找到该资源";
          break;
        case 405:
          err.message = "请求方法未允许";
          break;
        case 408:
          err.message = "请求超时";
          break;
        case 500:
          err.message = "服务器端出错";
          break;
        case 501:
          err.message = "网络未实现";
          break;
        case 502:
          err.message = "网络错误";
          break;
        case 503:
          err.message = "服务不可用";
          break;
        case 504:
          err.message = "网络超时";
          break;
        case 505:
          err.message = "http版本不支持该请求";
          break;
        default:
          err.message = `连接错误${err.response.status}`;
      }
    } else {
      err.message = "连接到服务器失败";
    }
    this.$message.error(err.message);
    return Promise.resolve(err.response);
  }
);
export const GET = (url, data, contentType) => {
  var str = data ? "?" : "";
  for (const key in data) {
    if (key) {
      str += key + "=" + data[key] + "&";
    }
  }
  str = str.slice(0, str.length - 1);
  const ContentType = { "Content-type": "application/json;charset=UTF-8" };
  if (contentType) {
    Object.assign(contentType, ContentType);
  } else {
    contentType = ContentType;
  }
  let instance = axios.create({
    baseURL: BASEURL,
    // timeout: TIMEOUT,
    headers: contentType
  });
  return instance
    .get(url + str)
    .then(res => Promise.resolve(res))
    .catch(err => {});
};

export const POST = (url, data, contentType) => {
  const ContentType = { "Content-type": "application/json;charset=UTF-8" };
  if (contentType) {
    Object.assign(contentType, ContentType);
  } else {
    contentType = ContentType;
  }
  let instance = axios.create({
    baseURL: BASEURL,
    // timeout: TIMEOUT,
    headers: contentType
  });
  return instance
    .post(url, data)
    .then(res => Promise.resolve(res))
    .catch(err => {});
};

export const JSONP = (url, data) => {
  jsonp(url, data, res => Promise.resolve(res));
};
