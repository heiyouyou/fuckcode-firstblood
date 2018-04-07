// pages/route/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_url:'../../imgs/common/stop@2x.png',
    show:true,
    add_height:0,
    markers: [{
      iconPath: "../../imgs/common/starting@2x.png",
      id: 0,
      longitude: 113.3245211,
      latitude: 23.10229,
      width: 22,
      height: 36
    },{
      iconPath: "../../imgs/common/end@2x.png",
      id: 1,
      longitude: 113.324520,
      latitude: 23.21229,
      width: 22,
      height: 36
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#F1604F",
      width: 4,
      borderColor:'#000',
      borderWidth:1,
    }],
    // controls: [{
    //   id: 1,
    //   iconPath: '../../imgs/common/noaddress@2x.png',
    //   position: {
    //     left: 0,
    //     top: 300 - 50,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }]
  },
  // 收缩隐藏订单部分内容
  toggle(){
    this.getRect()
    console.log(this.data.show)
    let url = !this.data.show?'../../imgs/common/stop@2x.png':'../../imgs/common/open@2x.png'
    let show = !this.data.show
    this.setData({
      'show_url':url,
      'show':show
    })
  },
  // 获取隐藏部分高度
  getRect(){
    wx.createSelectorQuery().select("#toggle-block").boundingClientRect((rect)=>{
      let height = rect.height
      this.setData({
        'add_height':height
      })
    }).exec()
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
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