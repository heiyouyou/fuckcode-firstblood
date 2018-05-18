// pages/my/wallet/withdraw/withdraw.js
let util = require('../../../../utils/util');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moneyData:null,
    hide:true,
    way:1,
    withdrawText: 'RMB',
    withdrawWay:'人民币（RMB）',
    withdrawWayCount:'',
    ABN:'',
  },
  // 弹出层的显示与隐藏
  maskToggle(){
    app.maskToggle(this)
  },
  // 选择提现方式
  chooseWay(e){
    this.maskToggle()
    let way = e.currentTarget.dataset.way;
    let withdrawWay = way==1?"人民币（RMB）":"澳币（AUD）";
    let withdrawText = way == 1 ? 'RMB' : 'AUD';
    this.setData({
      ['way']:way,
      ['withdrawWay']:withdrawWay,
      ['withdrawText']: withdrawText
    })
  },
  getCount(e){
    this.setData({
      withdrawWayCount:e.detail.value
    })
  },
  getABN(e) {
    this.setData({
      ABN: e.detail.value
    })
  },
  // 全部提现
  getAllOverage(e){
    let overage = e.currentTarget.dataset[(this.data.way==1?'rmb':'aud')];
    this.setData({
      withdrawWayCount: overage
    })
  },
  // 获取账户余额
  getOverage(){
    const that = this;
    util._ajax_({
      host:true,
      url: '/user/withdraw',
      success: function(res) {
        that.setData({
          moneyData: res.data.data,
          ABN: res.data.data.ABN
        })
      }
    })
  },
  // 提现
  withdraw(){
    let money = this.data.withdrawWayCount;
    let currency = this.data.way;
    let ABN = this.data.ABN;
    util._ajax_({
      loadingText:'提交中',
      data:{
        money,
        currency,
        ABN
      },
      method:'POST',
      host: true,
      url: '/user/withdraw',
      success(res){
        util.toast(res.data.msg,1);
      }
    }).catch((res)=>{
      // if(res.data.status==-3){
      //   setTimeout(() => {
      //     util.go('../binding/binding');
      //   }, 1000);
      // }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOverage();
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