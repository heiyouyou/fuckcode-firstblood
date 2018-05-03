// pages/my/info/info.js
let app = getApp()
let util = require('../../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hide:true,
    cityIndex:0,
    cSex:0,
    cityArray:['墨尔本','深圳','洛杉矶','上海市']
  },
  // 弹出层的显示与隐藏
  maskToggle(){
    app.maskToggle(this)
  },
  stopBubble(){
    console.log(22)
  },
  bindCityChange(e){
    this.setData({
      'cityIndex':e.detail.value
    })
  },
  chooseSex(e){
    let type = e.currentTarget.dataset.sex;
    this.setData({
      cSex:type
    })
  },
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
      title:'我的主页'
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