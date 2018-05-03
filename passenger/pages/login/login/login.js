// pages/login/login/login.js
let util = require('../../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  getLoginData(e){
    let mobile = e.detail.value.phone;
    let password = e.detail.value.pwd;
    wx.request({
      url: `${util.server}/account/login-phone`,
      method:'POST',
      data: { mobile,password},
      success: function(res) {
        console.log(res)
        if(res.data == 1){
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
  wechatLogin(){
    let token = '27754a6b596ad524357f1ff9745499d6';
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        let code = '';
        let iv = res.iv;
        let encrypteData = res.encrypteData;
        let sign = '';
        wx.request({
          url: `${util.server}/account/bind`,
          method: 'POST',
          header:{token},
          data: { code, iv, encrypteData, sign},
          success: function (res) {
            console.log(res)
            if (res.data == 1) {
              util.go('../../index/index', 5)
            } else {
              wx.showToast({
                title: `${res.data.msg}`,
                icon: 'none',
              })
            }
          }
        })
      }
    })
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