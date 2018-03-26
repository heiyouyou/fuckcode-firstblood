// pages/my/editInfo/editInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:'男',
    sexArry:['男','女'],
    sexIndex:0,
    city:'墨尔本',
    cityArry:['墨尔本','深圳市','广州市','东京'],
    cityIndex:0
  },
  bindPickerChangeCity(e){
    this.setData({
      cityIndex: e.detail.value,
      city:this.data.cityArry[e.detail.value]
    })
  },
  bindPickerChangeSex(e){
    this.setData({
      sexIndex: e.detail.value,
      sex:this.data.sexArry[e.detail.value]
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