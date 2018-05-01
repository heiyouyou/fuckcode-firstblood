// pages/licenseTranslate/licenseTranslate.js
let util = require('../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:['../../images/bybus-banner.png','../../images/bybus-banner.png','../../images/bybus-banner.png','../../images/bybus-banner.png'],
    licenseTitle:['驾照正面','驾照反面'],
    cindex:0,
    previewUrls:['',''],
    ctype:0,
    chide:true,
    hidePay:true,
  },
  // 上传驾照
  uploadImg(e){
    const that = this;
    let index = e.currentTarget.dataset.type
    util.updImg({
      chooseImgCb(paths){
        console.log(paths)
        that.setData({
          [`previewUrls[${index-1}]`]:paths[0],
          ['ctype']:index,
          ['chide']:false
        })
      }
    })
  },
  // 确认支付
  paySure(e){
    console.log(e)
    let title = e.detail.payWay==0?'确认余额支付':'确认微信支付';
    let amout = e.detail.payAmout;
    wx.showModal({
      title: title,
      content: `立即支付${amout}元\n让skycar安全准时的为您保驾护航`,
      confirmColor:'#F1604F',
      cancelColor:'#8F8E94',
      success: function(res) {
        if (res.confirm) {

        } else if (res.cancel) {
          
        }
      }
    })
  },
  commitPay(){
    this.setData({
      hidePay:false
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