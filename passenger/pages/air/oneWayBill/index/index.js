// pages/air/onWayBill/onWayBill.js
const util = require('../../../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    flag: '',
    car: [{
      type: 1,
      src: 'https://pic.lanhuapp.com/FliHx2wk49s_O3Q-Y6SmzeQyRQXH',
      intro: '经济车：卡罗拉、伊兰特、宝莱等同级车。'
    }, {
      type: 2,
      src: 'https://pic.lanhuapp.com/FrJb4yGe1HjIiiUT4AIfjd89R06a',
      intro: '豪华车：卡罗拉、伊兰特、宝莱等同级车。'
    }],
    form: {
      time: '2017年8月1日 08:23',
      start: '墨尔本上海路',
      end: '墨尔本机场（大约18.2km）',
      aduit: 1,
      child: 1,
      bigLuggage: 2,
      smallLuggage: 3
    },
    price: {
      rmb: 28,
      usd: 2.8
    }
  },
  go(e) {
    let url = e.currentTarget.dataset.url
    util.go(url)
  },
  onCar(e) {
    let t = e.currentTarget.dataset.t
    this.setData({
      flag: t
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