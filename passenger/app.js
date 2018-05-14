//app.js
let util = require('./utils/util');
App({
  onLaunch: function (options) {
    this.globalData.scene = options.scene; 
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    let token = wx.getStorageSync('skycar');
    this.globalData.token = token;
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 获取用户信息
    wx.getSetting({
      success: res => {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            withCredentials:true,
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              this.globalData.iv = res.iv;
              this.globalData.encryptedData = res.encryptedData;
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // token还存在，直接跳转到主页
    if (token){
      console.log('index...')
      util.go('pages/index/index',5)
    }
  },
  globalData: {
    userInfo: null,
    iv:'',
    encryptedData:'',
    scene:'',
    setting:true,
    token:''
  },
  // 弹出层的显示与隐藏
  maskToggle(obj){
    obj.setData({
      ['hide']:!obj.data.hide
    })
  },
})