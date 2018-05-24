// pages/results/licenseCertified/licenseCertified.js
let util = require('../../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{
      result_content:'非常感谢您的耐心填写\n您的认证资料已经提交成功\n亲您在此后的7个工作日内手机尽量保持畅通\n我们工作人员会与您联系'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(()=>{
      util.go('../../index/index',5)
    },3000);
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