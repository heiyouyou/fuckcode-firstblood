// pages/my/CarOwnerCertification/info/info.js
let util = require('../../../../utils/util')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityArry:[],
    cityIndex:0,
    city_name:'',
    cityId:''
  },
  bindPickerChangeCity(e) {
    this.setData({
      cityIndex: e.detail.value,
      cityId:this.data.cityArry[e.detail.value]['id'],
      city_name: this.data.cityArry[e.detail.value]['name']
    })
  },
  // 提交信息
  commit(e){
    let data = e.detail.value;
    let city_id = this.data.cityId;
    let id_card = data.id_card;
    let email = data.email;
    let mobile = data.mobile;
    let real_name = data.real_name;
    util._ajax_({
      url:'/apply/driver-apply-step1',
      data:{
        id_card,
        real_name,
        email,
        city_id,
        mobile
      },
      method:'POST',
      success(res){
        util.go('../license/license')
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cityArry: app.globalData.cityList
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