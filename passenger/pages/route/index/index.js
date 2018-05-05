import { goLogin } from "../../../common";
let util = require('../../../utils/util')
const app = getApp();
// pages/route/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 无行程数据模板显示标示
    hideRoute:true,
    noMore:true,
    // 1:结伴班车 2:预约用车 3:机场接送 4:包车旅游
    current:1,
    currentUrl: '/shuttle-bus/my-shuttle',
    // 结伴班车列表数据
    shuttle:[],
    shuttleNextPage:'',
  },
  chooseWay(e){
    let type = e.currentTarget.dataset.type
    this.setData({
      ['current']:type
    })
  },
  // 订单详情页面
  detail(e){
    util.go('../orderDetail/orderDetail')
  },
  packDetail(e){
    util.go('../packOrderDetail/packOrderDetail')
  },
  // 支付页面
  nextPay(){
    util.go('../payment/payment')
  },
  // 阻止冒泡函数
  bubble(){
    console.log(2)
  },
  // 删除订单
  deleteOrder(){
    wx.showModal({
      title: '确认删除',
      content: '确定要删除订单吗？\r\n删除后无法找回哦！',
      cancelText:'再想想',
      cancelColor:'#999999',
      confirmColor:'#F1604F',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 获取行程列表数据接口
  getListData(url,params){
    const that = this;
    util._ajax_({
      url: util.server +url,
      data:params,
      header:{
        token:app.globalData.token
      },
      success(res){
        if(res.data.status==1){ 
          let setDataObj = {};
          if (that.data.current==1){
            let shuttleList = [...that.data.shuttle,...res.data.data.list]
            setDataObj = {
              shuttle: shuttleList,
              hideRoute: !(shuttleList == 0),
              shuttleNextPage: res.data.data.next_page || '',
              noMore: !(shuttleList != 0 && !res.data.data.next_page)
            }
          }
          that.setData(setDataObj);
        } else if (res.data.status==-90){
          goLogin();
        } else{
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getListData(this.data.currentUrl);
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
    wx.showNavigationBarLoading()
    setTimeout(function () {
      wx.hideNavigationBarLoading()
    }, 2000)
    console.log('onPullDownRefresh')
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
    if (this.data.shuttleNextPage&this.data.current==1){
      this.getListData(this.data.shuttleNextPage);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})