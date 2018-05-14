// pages/register/code/code.js
let util = require('../../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaCode: '',
    phone:'',
  },
  register(data) {
    const that = this;
    let areaCode = this.data.areaCode;
    let mobile = this.data.phone;
    let code = data.detail.value.code;
    util._ajax_({
      loadingText: '提交中',
      method: 'POST',
      url: util.server + '/user/register-validate',
      data: {
        areaCode,
        mobile,
        code
      },
      success(res) {
        if (res.data.status == 1) {
          util.go(`../info/info`, 1)
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      areaCode: options.areaCode,
      phone: options.phone,
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