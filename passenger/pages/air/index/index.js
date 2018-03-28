// pages/air/index/index.js
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBack: false,
    banner: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    flag: 0,
    nav: [{
      t: 'to',
      src: '/pages/imgs/home_nav/air.png',
      activeSrc: '',
      name: '接机'
    }, {
      t: 'back',
      src: '/pages/imgs/home_nav/air.png',
      activeSrc: '',
      name: '送机'
    }, {
      t: 'toBack',
      src: '/pages/imgs/home_nav/air.png',
      activeSrc: '',
      name: '往返'
    }],
    airplan: [{
      name: '墨尔本',
      id: 1212
    }, {
      name: '悉尼',
      id: 1213
    }],
    index: 0
  },
  go(e) {
    let url = e.currentTarget.dataset.url
    util.go(url)
  },
  onNav(e) {
    let i = e.currentTarget.dataset.i
    this.setData({
      flag: i
    })
  },
  toggle(e) {
    let elem = e.currentTarget.dataset.elem
    let selem = this.data[elem]
    this.setData({
      [elem]: !selem
    })
  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
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