/**
 *  按照长度分割数组
 *  subGroupLength ： 长度
 * */ 
export const groupArr = (array, subGroupLength) => {
  var index = 0;
  var newArray = [];
  if (array && array.length) {
    while (index < array.length) {
      newArray.push(array.slice(index, index += subGroupLength));
    }
  }
  return newArray;
};

/**
 * 拼接图片地址
 * */ 
const baseUrl = '//fuss10.elemecdn.com';
export const getImageUrl = (hash) => {
  if (!hash) {
    return null;
  }
  const suffixArray = ['png', 'bmp', 'jpg', 'gif', 'jpeg', 'svg'];
  const suffix = suffixArray.find(v => hash.indexOf(v) !== -1);
  if (!suffix) {
    return null;
  } else {
    return `${baseUrl}/${hash.substring(0, 1)}/${hash.substring(1,3)}/${hash.substring(3)}.${suffix}`;
  }
};

/**
 * 格式化手机号
*/
export const formatPhone = (phone) => {
  return phone.substr(0, 3) + '****' + phone.substr(7, 11);
}

/** 
 * 检验手机号
*/
export const checkMobile = (mobile) => {
  if (/^[1][34578][0-9]{9}$/.test(mobile)) {
    return true;
  }
  return false;
}
