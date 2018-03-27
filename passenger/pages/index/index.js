//index.js
//获取应用实例
const app = getApp(),
  util = require('../../utils/util.js')

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    list: [{
      avatar: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '张女士',
      creTime: '1小时前',
      txt: '挺好的，方便快捷，直接送到酒店门口',
      star: 5
    }, {
      avatar: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '张女士',
      creTime: '1小时前',
      txt: '挺好的，方便快捷，直接送到酒店门口',
      star: 5
    }, {
      avatar: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '张女士',
      creTime: '1小时前',
      txt: '挺好的，方便快捷，直接送到酒店门口',
      star: 5
    }]
  },
  go(e) {
    let url = e.currentTarget.dataset.url
    util.go(url)
  },
  lower() {
    console.log('onLower')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
