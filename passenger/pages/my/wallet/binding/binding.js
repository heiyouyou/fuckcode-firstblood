// pages/my/wallet/binding/binding.js
let util = require('../../../../utils/util');
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hide:true,
    bindingType: 2, //1 人民币， 2 澳币
    bindingText:'澳币提现账号',
    accountData:{    
      "withdraw_wechat":"",
      "account_name":"",
      "account_number":"",
      "bsb":"",
      "ABN":""  
    }
  },
  // 弹出层的显示与隐藏
  maskToggle(){
    app.maskToggle(this)
  },
  // 选择绑定方式
  chooseWay(e){
    this.maskToggle()
    let bindingType = e.currentTarget.dataset.way
    let bindingText = bindingType==2?"澳币提现账号":"微信提现账号"
    this.setData({
      ['bindingType']:bindingType,
      ['bindingText']:bindingText
    })
  },
  // 获取提现绑定的账号数据
  getBindAccount(){
    const that = this;
    util._ajax_({
      loadingShow:false,
      url: '/user/bind-withdraw',
      success(res){
        console.log(res)
        that.setData({
          accountData:res.data.data
        })
      }
    })
  },
  // 绑定提现账号
  bindAccount(e){
    const that = this;
    let type = this.data.bindingType;
    let wechat = e.detail.value.withdraw_wechat;
    let account_name = e.detail.value.account_name;
    let account_number = e.detail.value.account_number;
    let bsb = e.detail.value.bsb;
    let ABN = e.detail.value.ABN;
    util._ajax_({
      method:'POST',
      url: '/user/bind-withdraw',
      data:type==1?{
        type,
        wechat
      }:{
        type,
        account_name,
        account_number,
        bsb,
        ABN
      },
      success(res){
        util.toast(res.data.msg,1);
        that.getBindAccount();
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBindAccount();
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