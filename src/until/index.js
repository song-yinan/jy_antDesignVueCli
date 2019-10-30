import JsZip from "jszip";
import saveAs from "file-saver";
import $ from "jquery";
import { localUploadImage } from "@api/imageCenter/index.js";

export const packageImages = (imageArr, reportCode) => {
  if (!Array.isArray(imageArr)) {
    return;
  }
  let imgBase64 = [],
    imageSuffix = [];
  let zip = new JsZip();
  zip.file("readme.txt", "图片资料\n");
  var img = zip.folder("images");
  for (var i = 0; i < imageArr.length; i++) {
    var src = imageArr[i];
    var suffix = src.substring(src.lastIndexOf("."));
    imageSuffix.push(suffix);
    getBase64(imageArr[i]).then(
      res => {
        imgBase64.push(res.substring(22));
      },
      err => {}
    );
  }
  function tt() {
    setTimeout(() => {
      if (imageArr.length == imgBase64.length) {
        for (var i = 0; i < imageArr.length; i++) {
          img.file(
            "报案号" + reportCode + `[${i + 1}]` + imageSuffix[i],
            imgBase64[i],
            {
              base64: true
            }
          );
        }
        zip
          .generateAsync({ type: "blob" })
          .then(res => saveAs(res, `${reportCode}.zip`));
      } else {
        tt();
      }
    }, 100);
  }
  tt();
};

const getBase64 = img => {
  function getBase64Image(img, width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width ? width : img.width;
    canvas.height = height ? height : img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL();
    return dataURL;
  }
  var image = new Image();
  image.crossOrigin = "Anonymous";
  image.src = img;
  var deferred = $.Deferred();
  if (img) {
    image.onload = function() {
      deferred.resolve(getBase64Image(image)); //将base64传给done上传处理
    };
    return deferred.promise(); //问题要让onload完成后再return sessionStorage['imgTest']
  }
};
/**
上传图片的方法:
    params:参数  callback:成功的回调
*/
export const localUploadImageFunc = (params, callback) => {
  const inputElement = document.createElement("input");
  inputElement.type = "file";
  inputElement.accept = "image/*";
  inputElement.addEventListener("change", () => {
    const formData = new FormData();
    formData.append("fileUpload", inputElement.files[0]);
    for (const key in params) {
      formData.append(key, params[key]);
    }
    localUploadImage(formData).then(res => {
      if (res.data.code == "0000") {
        callback && callback();
      } else {
        this.$message.error(res.data.message);
      }
    });
  });
  inputElement.click();
};

// canvas保存成图片
export const downImage = (canvas, fileName) => {
  const saveLink = document.createElementNS(
    "http://www.w3.org/1999/xhtml",
    "a"
  );
  saveLink.href = canvas.toDataURL("image/png");
  saveLink.download = fileName;
  const event = document.createEvent("MouseEvents");
  event.initMouseEvent(
    "click",
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  saveLink.dispatchEvent(event);
};
