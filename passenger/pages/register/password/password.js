// pages/register/password/password.js
let util = require('../../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  register(data) {
    const that = this;
    let password = data.detail.value.password;
    let password_confirmation = data.detail.value.password_confirmation;
    if (password != password_confirmation){
      util.toast('确认密码不正确！')
      return;
    }
    util._ajax_({
      loadingText: '提交中',
      method: 'POST',
      url: '/user/register-validate',
      data: {
        password,
        password_confirmation
      },
      success(res) {
          util.go('../../login/login/login', 4)
      }
    })
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