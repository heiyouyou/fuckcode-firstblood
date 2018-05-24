// pages/my/CarOwnerCertification/index/index.js
let util = require('../../../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    country:'中国',
    country_code:'+86',
    countryArray: [
      {
        code: '+86',
        name: '中国'
      },
      {
        code: '+63',
        name: '澳大利亚'
      }
    ],
    index: 0,
    mobile:'',
    codeText:'获取验证码',
    verification: '',
    sendFlag:true,
  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value,
      country:this.data.countryArray[e.detail.value].name,
      country_code:this.data.countryArray[e.detail.value].code
    })
  },
  getCode(e) {
    this.setData({
      verification: e.detail.value
    });
  },
  getPhone(e){
    this.setData({
      mobile:e.detail.value
    });
  },
  // 发送验证码
  sendCode(){
    const that = this;
    let areaCode = this.data.country_code;
    let mobile = this.data.mobile*1;
    let timer = null;
    if (this.data.sendFlag){
      this.setData({
        sendFlag:false
      });
      util._ajax_({
        loadingShow:false,
        method:'POST',
        data: {
          mobile,
          areaCode,
          type: 2//车主认证发送验证码
        },
        url: '/system/send-code',
        success(res){
          let seconds = 60;
          that.setData({
            codeText: `${seconds}s后重新发送`
          })
          timer = setInterval(() => {
            that.setData({
              codeText:`${seconds}s后重新发送`
            })
            if (seconds==0){
              clearInterval(timer);
              that.setData({
                codeText: `获取验证码`,
                sendFlag: true
              })
            };
            seconds--;
          },1000)
        }
      }).catch((res)=>{
        that.setData({
          sendFlag: true
        });
      })
    }
  },
  // 提交信息
  commit(){
    let areaCode = this.data.country_code;
    let mobile = this.data.mobile*1;
    let verification = this.data.verification * 1;
    util._ajax_({
      loadingText:'提交中',
      method:'POST',
      data:{
        areaCode,
        mobile,
        verification,
      },
      url: '/apply/validate-phone',
      success(res){
        util.go('../info/info')
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