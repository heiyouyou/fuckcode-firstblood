// pages/my/addressAndContact/addAddress/addAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityIndex:0,
    cityArray:['墨尔本','北京','洛杉矶'],
    c_city:'墨尔本',
    continentIndex:0,
    continentArray:['亚洲','北美洲','维多利亚洲'],
    c_continent:'亚洲'
  },
  // 城市选择
  bindPickerCityChange: function(e) {
    this.setData({
      cityIndex: e.detail.value,
      c_city:this.data.cityArray[e.detail.value]
    })
  },
  // 洲选择
  bindPickerContinentChange: function(e) {
    this.setData({
      continentIndex: e.detail.value,
      c_continent:this.data.continentArray[e.detail.value]
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