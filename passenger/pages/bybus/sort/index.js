// pages/bybus/index/index.js
const app = getApp(),
  util = require('../../../utils/util.js')
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      message: '默认排序',
    },
    {
      message: '按行程开始时间排序'
    },
    {
      message: '按发布时间排序'
    },
    {
      message: '按价格排序'
    }]
  },
  go(e) {
    let url = e.currentTarget.dataset.url
    util.go(url)
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