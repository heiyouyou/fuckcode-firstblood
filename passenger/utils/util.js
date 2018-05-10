import { goLogin } from "../common";

// 服务器地址
const server = 'https://api.dddyp.cn';

String.prototype.toDate = function ( /*format*/) {
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

Date.prototype.format = function ( /*format*/) {
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

const formatNoToCn = n => {
  const cnNo = ['日', '一', '二', '三', '四', '五', '六']
  return cnNo[n]
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
      duration: 1000
    })
  } else {
    wx.showToast({
      title: msg || '失败',
      duration: 1000
    })
  }
}

const modal = ({
    title,
    content,
    cancelText,
    cancelColor,
    confirmColor,
    success
  }) => {
   wx.showModal({
     title: '确认删除',
     content: '确定要删除订单吗？\r\n删除后无法找回哦！',
     cancelText: '再想想',
     cancelColor: '#999999',
     confirmColor: '#F1604F',
     success: function (res) {
       if (res.confirm) {
        confirm&&confirm();
       } else if (res.cancel) {
        cancel&&cancel();
       }
     }
   })
}

const ajax = (url, param, cb, cbf) => {
  let token = getStorageSync('user') ? getStorageSync('user').token : ''
  wx.request({
    url: `${server}${url}?token=${token}`,
    data: param,
    success: function (res) {
      console.log(res.data)
      if (res.status == '1') {
        cb && cb(res)
      } else if (res.status -= '-90') {
        go('/pages/login/login?code=' + code, 4)
      } else {
        cbf && cbf(res)
        console.error(res.data.msg)
      }
    },
    fail: function (res) { },
    complete: function (res) { },
  })
}
const _ajax_ = ({ url = '', method = 'GET', header = { 'Content-Type': 'application/json', 'token': wx.getStorageSync('skycar') }, success, data, fail,loadingText,loadingShow=true}={}) => {
  loadingShow&&wx.showLoading({
    title: loadingText || '加载中',
  })
  return wx.request({
    url: url,
    data:data,
    header: header,
    method:method,
    success: function(res) {
      wx.hideLoading();
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
      if (res.data.status == 1) {
        success && success(res);
      } else if(res.data.status == -90) {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          success: function() {
            setTimeout(() => {
              goLogin();
            }, 1000);
          }
        })
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none'
        })
      }
    },
    fail: function() {
      fail && fail();
    }
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

const updImg = ({ count = 1, sizeType = ['original', 'compressed'], sourceType = ['album', 'camera'], cb, url = server + '/upload' } = {}) => {
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
  formatTime,
  formatNumber,
  formatNoToCn,
  go,
  ajax,
  _ajax_,
  getUserInfo,
  updImg,
  toast,
  isEmptyObj,
  delEmptyKey,
  getStorageSync,
  server,
  modal
}