// pages/my/addressAndContact/addAddress/addAddress.js
let util = require('../../../../utils/util');
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityIndex:0,
    cityArray:[],
    c_city:'',
    continentIndex:0,
    continentArray: ['亚洲', '欧洲', '北美洲', '南美洲', '非洲', '大洋洲', '南极洲'],
    c_continent:''
  },
  // 城市选择
  bindPickerCityChange: function(e) {
    this.setData({
      cityIndex: e.detail.value,
      c_city:this.data.cityArray[e.detail.value].name
    })
  },
  // 洲选择
  bindPickerContinentChange: function(e) {
    this.setData({
      continentIndex: e.detail.value,
      c_continent:this.data.continentArray[e.detail.value]
    })
  },
  // 添加
  add(e) {
    let address = e.detail.value.address;
    let zipCode = e.detail.value.zipCode;
    let city = this.data.c_city;
    let continent = this.data.c_continent;
    let c_address = continent + address + city;
    console.log(c_address);
    util._ajax_({
      loadingText:'提交中',
      method: 'POST',
      url: '/address/add',
      data: {
        address
      },
      success(res) {
        util.toast(res.data.msg, 1);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cityArray: app.globalData.cityList
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