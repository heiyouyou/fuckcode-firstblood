// pages/orderManage/orderManage.js
let util = require('../../utils/util');
let tYear = new Date().getFullYear();
let tMonth = new Date().getMonth()+1;
let tDate = new Date().getDate();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curYear:tYear,
    curMonth:tMonth,
    today:tYear+'-'+tMonth+'-'+tDate,
    monthArrs:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    orderItem:['2018-3-1','2018-4-5','2018-5-1','2018-5-2','2018-6-1']
  },
  chooseMonth(e){
    let month = e.currentTarget.dataset.month;
    this.setData({
      'curMonth':month
    })
  },
  changeYear(e){
    let flag = e.currentTarget.dataset.flag;
    let cYear = flag==-1?--this.data.curYear:++this.data.curYear;
    this.setData({
      curYear:cYear
    });
  },
  formatDate(){
    
  },
  chooseDateOrder(e){
    let date = e.currentTarget.dataset.date;
    console.log(date);
    util.go(`../order/index/index?date=${date}`)
    
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
    wx.setNavigationBarTitle({
      title:'订单管理'
    })
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