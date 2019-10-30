/*
 * @Author: 小钻风.fuzebo
 * @Date: 2019-07-18 10:38:19
 * @Last Modified by: 小钻风.fuzebo
 * @Last Modified time: 2019-07-18 10:38:26
 */

export const formatTime = function() {
  let t = new Date().getTime();
  t = new Date(t);
  let year = t.getFullYear();
  let month = t.getMonth() + 1;
  month = checkAddZone(month);

  let date = t.getDate();
  date = checkAddZone(date);

  let hour = t.getHours();
  hour = checkAddZone(hour);

  let min = t.getMinutes();
  min = checkAddZone(min);

  let se = t.getSeconds();
  se = checkAddZone(se);

  return year + month + date + hour + min + se;
};
