// pages/air/check/check.js
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMask: false,
    query: {
      flightNo: 'MU212',
      date: ''
    },
    list: [{
      num: '3U601',
      date: '9月28日  周四',
      planCo: '四川航空',
      start: '12:30',
      startPlan: '双流机场',
      end: '15:30',
      endPlan: '墨尔本机场'
    }, {
      num: '3U601',
      date: '9月28日  周四',
      planCo: '四川航空',
      start: '12:30',
      startPlan: '双流机场',
      end: '15:30',
      endPlan: '墨尔本机场'
    }, {
      num: '3U601',
      date: '9月28日  周四',
      planCo: '四川航空',
      start: '12:30',
      startPlan: '双流机场',
      end: '15:30',
      endPlan: '墨尔本机场'
    }, {
      num: '3U601',
      date: '9月28日  周四',
      planCo: '四川航空',
      start: '12:30',
      startPlan: '双流机场',
      end: '15:30',
      endPlan: '墨尔本机场'
    }, {
      num: '3U601',
      date: '9月28日  周四',
      planCo: '四川航空',
      start: '12:30',
      startPlan: '双流机场',
      end: '15:30',
      endPlan: '墨尔本机场'
    }]
  },
  lower() {
    console.log('onLower')
  },
  show(e) {
    let id = e.currentTarget.dataset.id
    this[id].show()
  },
  bindKeyInput(e) {
    let that = this, value = e.detail.value, param = e.currentTarget.dataset.p
    that.setData({
      [param]: value
    })
  },
  _onDatePickcfm() {
    let qd = 'query.date'
    this.setData({
      [qd]: this.datePick.getDateVal().dates
    })
  },
  toggle(e) {
    let elem = e.currentTarget.dataset.elem
    let selem = this.data[elem]
    this.setData({
      [elem]: !selem
    })
  },
  onCheck() {
    let sm = this.data.showMask
    this.setData({
      showMask: !sm
    })
    this.getFlight()
  },
  getFlight() {
    util.ajax('/tool/flight', this.query, res => {
      console.log(res)
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
    this.datePick = this.selectComponent('#datePick')
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