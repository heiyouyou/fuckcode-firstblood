// pages/air/oneWayBill/contact/index/index.js
const util = require('../../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: '',
    opn: false,
    list: [{
      name: '小红',
      tel: '+86 18335295207'
    }, {
      name: '海蓝',
      tel: '+86 18335295207'
    }, {
      name: '岳东明',
      tel: '+86 18335295207'
    }]
  },
  go(e) {
    let url = e.currentTarget.dataset.url
    util.go(url)
  },
  onItem(e) {
    let i = e.currentTarget.dataset.i
    this.setData({
      opn: true,
      flag: i
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