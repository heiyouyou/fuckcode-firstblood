// pages/travel/calendar/calendar.js
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekData: ['日', '一', '二', '三', '四', '五', '六'],
    dateData: []
  },
  createDay(day, today, m) {
    let date = day.format('yyyy-MM-dd')
    let d = {
      date: date,
      day: date === today ? '今天' : day.getDate(),
      type: m !== 12 && date < (today || (new Date()).format('yyyy-MM-dd')) ? true : '',
      weekend: (day.getDay() === 0 || day.getDay() === 6) ? true : '',
      active: false
    }
    return d
  },
  initDate(len, beginDate) {
    let bg = beginDate ? beginDate.toDate() : new Date()
    let monthList = []
    let day = new Date(bg.getFullYear(), bg.getMonth())
    let today = new Date().format('yyyy-MM-dd')
    let l = len || 12
    day.setDate(1)
    for (let i = 0; i < l; i++) {
      let dayList = []
      // 每月第一天是周几
      let dayOfWeek = day.getDay()
      while (dayOfWeek > 0) {
        dayList.push({})
        dayOfWeek--
      }
      // 月下每天
      let month = day.getMonth()
      let year = day.getFullYear()
      while (true) {
        dayList.push(this.createDay(day, today, l))
        day.setDate(day.getDate() + 1)
        if (day.getMonth() !== month) {
          monthList.push({
            title: `${year}-${month + 1}`,
            dayList: dayList
          })
          break
        }
      }
      this.setData({
        dateData: monthList
      })
    }
  },
  go(e) {
    let url = e.currentTarget.dataset.url
    util.go(url)
  },
  onDay(e) {
    let index = e.currentTarget.dataset.index,
        idx = e.currentTarget.dataset.idx,
        theDay = `dateData[${index}].dayList[${idx}].active`,
        url = e.currentTarget.dataset.url
    this.resetActive()
    this.setData({
      [theDay]: true
    })
    util.go(url)
  },
  // 重置active
  resetActive() {
    let self = this,
        dateData = self.data.dateData
    dateData.forEach(val => {
      let dayList = val.dayList
      dayList.forEach(_val => {   
        _val.active = false
      })
    })
    self.setData({
      dateData: dateData
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initDate()
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