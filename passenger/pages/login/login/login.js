// pages/login/login/login.js
let util = require('../../../utils/util')
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  // 手机号登录
  phoneLogin(e){
    let mobile = e.detail.value.phone;
    let password = e.detail.value.pwd;
    wx.showLoading({
      title: '登录中',
    })
    wx.request({
      url: `${util.server}/account/login-phone`,
      method:'POST',
      data: { mobile,password},
      success: function(res) {
        wx.hideLoading();
        if(res.data.status == 1){
          wx.setStorageSync('skycar', res.data.data.token);
          app.globalData.token = res.data.data.token;
          util.go('../../index/index',5)
        }else{
          wx.showToast({
            title: `${res.data.msg}`,
            icon: 'none',
          })
        }
      }
    })
  },
  // 微信登录
  wechatLogin(){
    const that = this;
    wx.login({
      success: function(res) {
        if(res.code){
          let code = res.code;
          util._getUserInfo_().then((res) => {
            app.globalData.userInfo = res.userInfo;
            let iv = app.globalData.iv = res.iv;
            let encryptedData = app.globalData.encryptedData = res.encryptedData;
            let sign = app.globalData.scene;
            wx.showLoading({
              title: '登录中',
            })
            wx.request({
              url: `${util.server}/account/bind`,
              method: 'POST',
              data: {
                code,
                iv,
                encryptedData,
                sign
              },
              success: function (res) {
                wx.hideLoading();
                if (res.data.status == 1) {
                  wx.setStorageSync('skycar', res.data.data.token);
                  app.globalData.token = res.data.data.token;
                  util.go('../../index/index', 5);
                } else {
                  wx.showToast({
                    title: `${res.data.msg}`,
                    icon: 'none',
                  })
                }
              }
            })
          }).catch(()=>{
            wx.showToast({
              title: `由于您的拒绝，无法使用微信登录，请重新授权获取用户信息！`,
              icon: 'none',
              success(){
                setTimeout(() => {
                  wx.openSetting({
                    success: function (res) {
                      console.log(res.authSetting)
                    }
                  })
                }, 2000);
              }
            })
          })
        }else{
          wx.showToast({
            title: `${res.errMsg}`,
            icon: 'none',
          })
        }
      },
      fail(res) {
        util.toast(res.errMsg)
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})