// pages/register/driverCar/driverCar.js
let util = require('../../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    previewUrls:['','','','','',''],
    cindex:0,
    ctype:0,
    chide:true
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
  next(){
    util.go('../../commitSuccess/commitSuccess',1)
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