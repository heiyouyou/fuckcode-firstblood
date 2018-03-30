// pages/my/CarOwnerCertification/index/index.js
let util = require('../../../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    country:'中国',
    country_code:'+86',
    countryArray: [
      {
        code: '+86',
        name: '中国'
      },
      {
        code: 0,
        name: '美国'
      },
      {
        code: 2,
        name: '巴西'
      },
      {
        code: 3,
        name: '日本'
      }
    ],
    index: 0,
  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value,
      country:this.data.countryArray[e.detail.value].name,
      country_code:this.data.countryArray[e.detail.value].code
    })
  },
  next(){
    util.go('../info/info')
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