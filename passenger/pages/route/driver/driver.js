// pages/route/driver/driver.js
let util = require('../../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    driverInfo:{},
    shuttleBus:[]
  },
  callDriver(e){
    let phoneNumber = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber,
      fail(){
        util.toast('调用拨打电话功能失败！')
      }
    })
  },
  // 加入班车
  joinBus(e){
    let id = e.currentTarget.dataset.id;
    util._ajax_({
      loadingShow:false,
      url: '/appoint-car/driver-info',
      data:{
        id
      },
      method:'POST',
      success(res){
        util.toast(res.data.msg,1);
      }
    })
  },
  // 获取司机信息
  getDriverInfo(id){
    const that = this;
    util._ajax_({
      url:'/appoint-car/driver-info?id='+id,
      success(res){
        let driverInfo = res.data.data.info;
        let shuttleBus = res.data.data.shuttle-bus;
        that.setData({
          driverInfo,
          shuttleBus
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    this.getDriverInfo(id);
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