// pages/my/index/index.js
let util = require('../../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    starNum:2,
  },
  // 获取用户信息
  getUserInfo(){
    const that = this;
    util._ajax_({
      url:'/user/my',
      success(res){
        let starNum = Math.round(res.data.comment);
        wx.setStorageSync('userInfo', res.data.data);
        that.setData({
          userInfo:res.data.data,
          starNum
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
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
    this.getUserInfo();
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