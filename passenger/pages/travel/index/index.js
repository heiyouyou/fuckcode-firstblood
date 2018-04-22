// pages/travel/index/index.js
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      name: '墨尔本',
      esl: 'Melbourne',
      width: 250,
      height: 170,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      code: ''
    }, {
      name: '悉尼',
      esl: 'Sydney',
      width: 250,
      height: 350,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      code: ''
    }, {
      name: '布里斯班',
      esl: 'Brisbane',
      width: 200,
      height: 260,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      code: ''
    }, {
      name: '凯恩斯',
      esl: 'Keynes',
      width: 200,
      height: 260,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      code: ''
    }, {
      name: '黄金海岸',
      esl: 'Gold Coast',
      width: 420,
      height: 260,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      code: ''
    }, {
      name: '珀斯',
      esl: 'Perth',
      width: 335,
      height: 180,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      code: ''
    }, {
      name: '堪培拉',
      esl: 'Canberra',
      width: 335,
      height: 330,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      code: ''
    }, {
        name: '阿德莱德',
        esl: 'Adelaide',
      width: 335,
      height: 163,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      code: ''
    }, {
      name: '朗塞斯顿',
      esl: 'Launceston',
      width: 335,
      height: 163,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      code: ''
    }, {
      name: '霍巴特',
      esl: 'Hobart',
      width: 335,
      height: 163,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      code: ''
    }, {
      name: '新西兰-奥克兰',
      esl: 'Oakland, New Zealand',
      width: 690,
      height: 200,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524338756279&di=badb5739139e7f0538e46e68a4c20b19&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Df072192f91504fc2b652b8468db48d64%2Fd4628535e5dde7114fb3d6d1adefce1b9d1661b0.jpg',
      code: ''
    }]
  },
  go(e) {
    let url = e.currentTarget.dataset.url
    util.go(url)
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