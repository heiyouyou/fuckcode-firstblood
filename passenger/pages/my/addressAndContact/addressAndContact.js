// pages/my/addressAndContact/addressAndContact.js 
let util = require('../../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1,
    addressList:[],
    addressNextPage: '',
    contactsList:[],
    contactsNextPage: '',
    noData:false,
    initAddress:true,
    noMore:false,
  },
  updateAddress(e){
    let id = e.currentTarget.dataset.id;
    util.go('./updateAddress/updateAddress?id='+id);
  },
  updateContact(e){
    let id = e.currentTarget.dataset.id;
    util.go('./updateContact/updateContact?id='+id);
  },
  // 选择查看类型
  chooseWay(e){
    const that = this;
    let type = e.currentTarget.dataset.type
    if (type == 1){
      this.setData({
        noData: that.data.contactsList.length == 0,
        noMore: (that.data.contactsList != 0 && !that.data.contactsNextPage)
      })
    }else{
      this.setData({
        noData: that.data.addressList.length == 0,
        noMore: (that.data.addressList != 0 && !that.data.addressNextPage)
      })
    }
    if (type == 2 && this.data.initAddress) {
      this.getAddressList();
    }
    this.setData({
      ['current']:type,
      initAddress:false
    })
  },
  // 获取地址列表
  getAddressList(clear=false){
    const that = this;
    util._ajax_({
      host:false,
      url: that.data.addressNextPage ? that.data.addressNextPage:util.server + '/address/lists',
      success(res){
        let list = clear ? res.data.data : [...that.data.addressList, ...res.data.data];
        that.setData({
          addressList:list,
          addressNextPage: res.data.next_page || '',
          noData: list.length == 0,
          noMore: (list.length != 0 && !res.data.next_page)
        })
      }
    })
  },
  // 获取联系人列表
  getContactsList(clear=false) {
    const that = this;
    util._ajax_({
      host:false,
      url: that.data.contactsNextPage ? that.data.contactsNextPage : util.server + '/contacts/lists',
      success(res) {
        let list = clear ? res.data.data : [...that.data.contactsList, ...res.data.data];
        that.setData({
          contactsList: list,
          contactsNextPage: res.data.next_page||'',
          noData: list.length == 0,
          noMore: (list.length != 0 && !res.data.next_page)
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getContactsList();
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
    if(this.data.current==1){
      this.getContactsList(true);
    }else{
      this.getAddressList(true);
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.current == 1 && this.data.contactsNextPage) {
      this.getContactsList();
    } else if (this.data.current == 2 && this.data.addressNextPage) {
      this.getAddressList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})