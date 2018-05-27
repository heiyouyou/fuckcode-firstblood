// 服务器地址
const server = ''

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

module.exports = {
  go: go,
  ajax: ajax,
  toast: toast,
}