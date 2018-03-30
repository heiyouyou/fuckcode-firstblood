// pages/my/CarOwnerCertification/license/license.js
let util = require('../../../../utils/util')
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hide:true,
    carIndex:0,
    carTypeArray:['舒适型','越野型','宽敞型'],
    c_type:'舒适型',
    seatIndex:0,
    seatArray:['提供','不提供'],
    seat:'提供'
  },
  maskToggle(){
    app.maskToggle(this)
  },
  // 阻止冒泡
  stopBubble(){
    console.log(22)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // 资料提交
  uploadInfo(){
    wx.showModal({
      title: '确认提交',
      cancelColor:"#999999",
      confirmColor:"#F1604F",
      content: '确认提交申请司机吗?\r\n一般审核时间为7个工作日',
      success: function(res) {
        console.log(res)
        if (res.confirm) {
          console.log('用户点击确定')
          util.go('../../../results/licenseCertified/licenseCertified')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 车辆类型选择
  bindPickerCarChange: function(e) {
    this.setData({
      carIndex: e.detail.value,
      c_type:this.data.carTypeArray[e.detail.value]
    })
  },
  // 儿童座椅选择
  bindPickerSeatChange: function(e) {
    this.setData({
      seatIndex: e.detail.value,
      seat:this.data.seatArray[e.detail.value]
    })
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