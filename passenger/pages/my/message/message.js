// pages/my/message/message.js
let util = require('../../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 1,
    orderList: [],
    orderNextPage: '',
    unreadOrderTotal: 0,
    systemList: [],
    systemNextPage: '',
    unreadSystemTotal: 0,
    initSystem: true,
    chatList: [],
    chatNextPage: '',
    unreadChatTotal: 0,
    initChat: true,
    noData: false,
    noMore: false,
  },
  // 选择类型
  chooseWay(e) {
    const that = this;
    let type = e.currentTarget.dataset.type
    if (type == 1) {
      this.setData({
        noData: that.data.orderList.length == 0,
        noMore: (that.data.orderList != 0 && !that.data.orderNextPage)
      })
    } else if (type == 2) {
      this.setData({
        noData: that.data.systemList.length == 0,
        noMore: (that.data.systemList != 0 && !that.data.systemNextPage)
      })
    } else if (type == 3) {
      this.setData({
        noData: that.data.chatList.length == 0,
        noMore: (that.data.chatList != 0 && !that.data.chatNextPage)
      })
    }
    if (type == 2 && this.data.initSystem) {
      this.getSystemList();
      this.setData({
        initSystem: false,
      })
    } else if (type == 3 && this.data.initChat) {
      this.getChatList();
      this.setData({
        initChat: false,
      })
    }
    this.setData({
      ['current']: type
    })
  },
  // 获取订单消息
  getOrderList(clear = false) {
    const that = this;
    util._ajax_({
      url: that.data.orderNextPage ? that.data.orderNextPage : util.server + '/msg/order',
      success(res) {
        let list = clear ? res.data.data.list : [...that.data.orderList, ...res.data.data.list];
        that.setData({
          orderList: list,
          orderNextPage: res.data.data.next_page || '',
          noData: list.length == 0,
          noMore: (list.length != 0 && !res.data.data.next_page),
          unreadOrderTotal: res.data.data.unreadOrderTotal,
          unreadSystemTotal: res.data.data.unreadSystemTotal,
          unreadChatTotal: res.data.data.unreadChatTotal,
        })
      }
    })
  },
  // 获取系统消息
  getSystemList(clear = false) {
    const that = this;
    util._ajax_({
      url: that.data.systemNextPage ? that.data.systemNextPage : util.server + '/msg/system',
      success(res) {
        let list = clear ? res.data.data.list : [...that.data.systemList, ...res.data.data.list];
        that.setData({
          systemList: list,
          systemNextPage: res.data.data.next_page || '',
          noData: list.length == 0,
          noMore: (list.length != 0 && !res.data.data.next_page),
          unreadOrderTotal: res.data.data.unreadOrderTotal,
          unreadSystemTotal: res.data.data.unreadSystemTotal,
          unreadChatTotal: res.data.data.unreadChatTotal,
        })
      }
    })
  },
  // 获取聊天消息
  getChatList(clear = false) {
    const that = this;
    util._ajax_({
      url: that.data.chatNextPage ? that.data.chatNextPage : util.server + '/msg/chat',
      success(res) {
        let list = clear ? res.data.data.list : [...that.data.chatList, ...res.data.data.list];
        that.setData({
          chatList: list,
          chatNextPage: res.data.data.next_page || '',
          noData: list.length == 0,
          noMore: (list.length != 0 && !res.data.data.next_page),
          unreadOrderTotal: res.data.data.unreadOrderTotal || 0,
          unreadSystemTotal: res.data.data.unreadSystemTotal || 0,
          unreadChatTotal: res.data.data.unreadChatTotal || 0,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOrderList();
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
    if (this.data.current == 1) {
      this.getOrderList(true);
    } else if (this.data.current == 2) {
      this.getSystemList(true);
    } else if (this.data.current == 3) {
      this.getChatList(true);
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.current == 1 && this.data.orderNextPage) {
      this.getOrderList();
    } else if (this.data.current == 2 && this.data.systemNextPage) {
      this.getSystemList();
    } else if (this.data.current == 3 && this.data.chatNextPage) {
      this.getChatList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})