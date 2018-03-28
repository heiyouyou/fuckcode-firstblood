// 服务器地址
const server = ''

String.prototype.toDate = function ( /*format*/ ) {
  var str = this,
    len = str.length,
    arg = (arguments.length ? arguments[0] || "" : ""),
    format = arg || (len == 6 && (str = str + '01') && "yyyyMMdd") || (len == 7 && "yyyy-MM") || (len == 8 && "yyyyMMdd") || (len == 10 && "yyyy-MM-dd") || "yyyy-MM-dd hh:mm:ss"
  var val = function (f) {
    var from = format.indexOf(f),
      to = from == -1 ? -1 : format.lastIndexOf(f);
    return from != -1 ? parseInt(str.substring(from, to + 1), 10) : 0;
  }
  return new Date(val('y'), val('M') - 1, val('d'), val('h'), val('m'), val('s'), val('S'));
}

Date.prototype.format = function ( /*format*/ ) {
  var fmt = arguments.length ? arguments[0] : "yyyy-MM-dd hh:mm:ss";
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  }
  return fmt;
}

/**
 * 日期格式化(默认)
 */
Date.prototype.yyyyMMdd = function () {
  return this.format('yyyy-MM-dd')
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const go = (url, t) => {
  let type = t ? t : 1
  if (type == 1) {
    wx.navigateTo({
      url: url
    })
  } else if (type == 2) {
    wx.redirectTo({
      url: url
    })
  } else if (type == 3) {
    wx.navigateBack({
      delta: url
    })
  } else if (type == 4) {
    wx.reLaunch({
      url: url
    })
  } else if (type == 5) {
    wx.switchTab({
      url: url
    })
  }
}

const getStorageSync = (key) => {
  try {
    var value = wx.getStorageSync(key)
    if (value) {
      return value
    }
  } catch (e) {
    // Do something when catch error
  }
}

const toast = (msg, type) => {
  if (type == 1) {
    wx.showToast({
      title: msg || '成功',
      icon: 'success',
      duration: 2000
    })
  } else {
    wx.showToast({
      title: msg || '失败',
      image: '/pages/imgs/warn.png',
      duration: 2000
    })
  }
}

const ajax = (url, param, cb, cbf) => {
  let uid = getStorageSync('user') ? getStorageSync('user').UID : ''
  wx.request({
    url: `${server}${url}?UID=${uid}`,
    data: param,
    success: function (res) {
      console.log(res.data)
      let code = res.data.code
      if (res.data.result == 'success') {
        if (!code) {
          cb && cb(res)
        }
      } else if (res.data.result == 'fail') {
        if (code == 'E000') {
          goto('/pages/login/login?code=' + code, 4)
        } else {
          console.error(res.data.msg)
          cbf && cbf(res)
        }
      }
    },
    fail: function (res) {},
    complete: function (res) {},
  })
}

const getUserInfo = (cb) => {
  let uid = getStorageSync('user') ? getStorageSync('user').UID : ''
  ajax('/ccuser/getLoginUser', {
    UID: uid
  }, res => {
    if (res.data.result == 'success') {
      let _res = res.data.data
      wx.setStorageSync('user_info', _res)
    }
  })
}

const updImg = ({count=1,sizeType=['original', 'compressed'],sourceType=['album', 'camera'],cb,url=server + '/upload'}={}) => {
  let that = this
  wx.chooseImage({
    count: count, // 默认9
    sizeType: sizeType, // 可以指定是原图还是压缩图，默认二者都有
    sourceType: sourceType, // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，imgPath可以作为img标签的src属性显示图片
      let ips = res.tempFilePaths

      wx.uploadFile({
        url: url,
        filePath: ips[0],
        name: 'file',
        success: function (res) {
          cb && cb(res)
        }
      })
    }
  })
}

const isEmptyObj = (key, cb) => {
  let val
  for (val in key) {
    if (!key[val]) {
      cb && cb()
      return false
    }
  }
  return true
}

const delEmptyKey = obj => {
  let i
  for (i in obj) {
    if (!obj[i]) {
      delete obj[i]
    }
  }
}

module.exports = {
  formatTime: formatTime,
  formatNumber: formatNumber,
  go: go,
  ajax: ajax,
  getUserInfo: getUserInfo,
  updImg: updImg,
  toast: toast,
  isEmptyObj: isEmptyObj,
  delEmptyKey: delEmptyKey,
  getStorageSync: getStorageSync
}