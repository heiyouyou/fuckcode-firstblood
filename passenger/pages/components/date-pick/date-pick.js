// pages/components/date-pick/date-pick.js
const util = require('../../../utils/util.js')
let date = new Date(),
  year = date.getFullYear(),
  month = date.getMonth() + 1,
  day = date.getDate(),
  hour = date.getHours(),
  min = date.getMinutes(),
  week = util.formatNoToCn(date.getDay()),
  dList = [], hList = [], minList = [], hours, minute
// 分
for (let i = 0; i <= 6; i++) {
  minute = util.formatNumber(i * 10)
  if (minute == 60) {
    minute = minute - 1
  }
  minList.push(minute)
}

// 时
for (let i = 0; i < 24; i++) {
  hours = util.formatNumber(i)
  hList.push(hours)
}

// 日期
for (let i = 1; i <= 7; i++) {
  date.setDate(date.getDate() + 1)
  let d = date.format('MM月dd日'),
    w = '周' + util.formatNoToCn(date.getDay()),
    dStr = d + ' ' + w,
    dObj = {
      date: date,
      dateFormat: date.format('yyyy-MM-dd'),
      dStr: dStr
    }
  dList.push(dObj)
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    cancelTxt: {
      type: String,
      value: '返回'
    },
    confirmTxt: {
      type: String,
      value: '确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    minList: minList,
    hList: hList,
    dList: dList,
    dates: dList[0].dateFormat,
    hours: hList[0],
    mins: minList[0],
  },
  /**
   * 组件的方法列表
   */
  methods: {
    hide() {
      this.cusPick.hide()
    },
    show() {
      this.cusPick.show()
    },
    bindChange (e) {
      const val = e.detail.value
      this.setData({
        dates: this.data.dList[val[0]].dateFormat,
        hours: this.data.hList[val[1]],
        mins: this.data.minList[val[2]]
      })
    },
    getDateVal() {
      let time = {
        dates: this.data.dates,
        hours: this.data.hours,
        mins: this.data.mins
      }
      return time
    },
    _onDatePickcfm() {
      this.triggerEvent('onDatePickcfm')
    }
  },
  ready() {
    this.cusPick = this.selectComponent('#cusPick')
  }
})
