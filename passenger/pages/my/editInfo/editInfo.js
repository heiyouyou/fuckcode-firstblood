// pages/my/editInfo/editInfo.js
let util = require('../../../utils/util')
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname:'',
    mobile:'',
    avatorUrl:'',
    avatorId:0,
    sex:'男',
    sexArry:['男','女'],
    sexIndex:0,
    city:'',
    cityArry:[],
    cityIndex:0,
    cityId:0,
  },
  bindPickerChangeCity(e){
    this.setData({
      cityIndex: e.detail.value,
      cityId: this.data.cityArry[e.detail.value]['id'],
      city:this.data.cityArry[e.detail.value]['name']
    })
  },
  bindPickerChangeSex(e){
    this.setData({
      sexIndex: e.detail.value,
      sex:this.data.sexArry[e.detail.value]
    })
  },
  // 获取昵称
  getNick(e){
    this.setData({
      nickName: e.detail.value
    })
  },
  // 获取手机号
  getPhone(e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  // 信息更新
  updateInfo(){
    const that = this;
    let sex = this.data.sex=='男'?1:2;
    let nickname = this.data.nickname;
    let mobile = this.data.mobile;
    let img_id = this.data.avatorId;
    let city_id = this.data.cityId;
    util._ajax_({
      url: '/user/info',
      method:'POST',
      data:{
        mobile,
        sex,
        nickname,
        img_id,
        city_id
      },
      success(res){
        util.toast('修改成功',1);
      }
    })
  },
  // 头像修改
  editAvator(){ 
    const that = this;
    util.updImg({
      cb(res){
        let data = JSON.parse(res.data);
        that.setData({
          avatorId: data.data.id,
          avatorUrl: data.data.link
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = wx.getStorageSync('userInfo');
    let cityId = userInfo.info.city_id;
    let city = '';
    let countIndex = 0;
    for (let o of app.globalData.cityList){
      if (o['id'] == cityId){
        city = o['name'];
        this.setData({
          cityIndex: countIndex,
          cityId
        })
        break;
      }
      countIndex++;
    }
    this.setData({
      sex: userInfo.info.sex_name,
      cityArry:app.globalData.cityList,
      avatorUrl: userInfo.info.headimgurl,
      nickname: userInfo.info.nickname,
      mobile: userInfo.info.mobile,
      city
    });
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