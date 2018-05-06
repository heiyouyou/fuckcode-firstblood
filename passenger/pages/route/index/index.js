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
    searchFlag:true,
    // 1:结伴班车 2:预约用车 3:机场接送 4:包车旅游
    current:1,
    currentTypeArr: ['结伴班车', '预约用车', '机场接送','包车旅游'],
    currentUrl: '/shuttle-bus/my-shuttle',
    // 结伴班车列表数据
    shuttle:[],
    shuttleNextPage:'',
    shuttleFlag:false,
    // 预约用车
    appointCar:[],
    appointCarFlag:true,
    appointCarNextPage:'',
    // 机场接送
    mission: [],
    missionFlag: true,
    missionNextPage: ''
  },
  chooseWay(e){
    let type = e.currentTarget.dataset.type;
    let url = '';
    if(type==1){
      url = '/shuttle-bus/my-shuttle';
      // 点击不同类型行程，进行切换回最后是否有行程数据或者下一页数据
      this.setData({
        hideRoute: !(this.data.shuttle.length == 0),
        noMore: !(this.data.shuttle.length != 0 && !this.data.shuttleNextPage),
      })
    } else if (type == 2){
      url = '/appoint-car/my';
      this.setData({
        hideRoute: !(this.data.appointCar.length == 0),
        noMore: !(this.data.appointCar.length != 0 && !this.data.appointCarNextPage),
      })
    } else if (type == 3){
      url = '/mission/lists';
      this.setData({
        hideRoute: !(this.data.mission.length == 0),
        noMore: !(this.data.mission.length != 0 && !this.data.missionNextPage),
      })
    }
    this.setData({
      'current': type,
      'currentUrl': url
    })
    if ((type == 1 && !this.data.shuttleFlag) || (type == 2 && !this.data.appointCarFlag) || (type == 3 && !this.data.missionFlag)){
      return
    }
    this.getListData(this.data.currentUrl);
    if(type==1){
      this.setData({
        shuttleFlag: false
      })
    } else if (type == 2){
      this.setData({
        appointCarFlag: false
      })
    } else if (type == 3) {
      this.setData({
        missionFlag: false
      })
    }
  },
  // 订单详情页面
  detail(e){
    let id = e.currentTarget.dataset['id'];
    util.go(`../orderDetail/orderDetail?id=${id}&type=${this.data.current}`);
  },
  // 包车旅游订单详情页面
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
  getListData(url, params = {}, clearListFlag=false){
    const that = this;
    wx.showNavigationBarLoading();
    util._ajax_({
      url: util.server +url,
      data:params,
      success(res){
        that.setData({
          searchFlag:true
        });
        let setDataObj = {};
        if (that.data.current == 1) { //结伴班车
          // 是否清除之前数据
          let shuttleList = clearListFlag ? res.data.data.list : [...that.data.shuttle,...res.data.data.list];
          setDataObj = {
            shuttle: shuttleList,
            hideRoute: !(shuttleList.length == 0),
            shuttleNextPage: res.data.data.next_page || '',
            noMore: !(shuttleList.length != 0 && !res.data.data.next_page)
          }
        } else if (that.data.current == 2){ //预约用车
          let appointCar = clearListFlag ? res.data.data.list : [...that.data.appointCar, ...res.data.data.list];
          setDataObj = {
            appointCar: appointCar,
            hideRoute: !(appointCar.length == 0),
            appointCarNextPage: res.data.data.next_page || '',
            noMore: !(appointCar.length != 0 && !res.data.data.next_page)
          }
        } else if (that.data.current == 3) { //机场接送
          let mission = clearListFlag ? res.data.data.list : [...that.data.mission, ...res.data.data.list];
          setDataObj = {
            mission: mission,
            hideRoute: !(mission.length == 0),
            missionNextPage: res.data.data.next_page || '',
            noMore: !(mission.length != 0 && !res.data.data.next_page)
          }
        }
        that.setData(setDataObj);
      }
    })
  },
  // 搜索过滤接口
  searchRoute(e){
    let keyword = e.detail.value;
    if (this.data.searchFlag){
      this.setData({
        searchFlag: false
      });
      this.getListData(this.data.currentUrl, { keyword},true);
    }
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
    this.getListData(this.data.currentUrl, {}, true);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
    if (this.data.shuttleNextPage&&this.data.current==1){
      this.getListData(this.data.shuttleNextPage);
    } else if (this.data.appointCarNextPage && this.data.current == 2){
      this.getListData(this.data.appointCarNextPage);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})