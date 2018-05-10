//index.js
//获取应用实例
const app = getApp(),
  util = require('../../utils/util.js')

Page({
  data: {
    query: {
      page: 1
    },
    imgUrls: [],
    list: []
  },
  go(e) {
    let url = e.currentTarget.dataset.url
    util.go(url)
  },
  lower() {
    console.log('onLower')
    let page = this.data.query.page, qp = 'query.page'
    this.setData({
      [qp]: ++page
    })
    this.getComments()
  },
  getImgs() {
    let self = this
    util.ajax('/index', {}, res => {
      let _res = res.data
      self.setData({
        imgUrls: _res.adsList
      })
    })
  },
  getComments() {
    let self = this, list = this.data.list
    util.ajax('/index/comment', this.data.query, res => {
      let _res = res.data
      list = [...list, ..._res.commentList]
      console.log(list)
      self.setData({
        list: list
      })
    })
  },
  onLoad: function () {
    this.getImgs()
    this.getComments()
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
