// pages/order/order.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderlist: [],
    isShow:false
  },
  //获取订单列表
  getOrderList() {
    var that=this
    wx.request({
      url: app.globalData.url + '/order/findByUserId',
      method: 'GET',
      data: {
        userId: wx.getStorageSync("openid")
      },
      success:function(res) {
        if(res.data.data!=''){
          that.setData({
            orderlist: res.data.data,
            isShow: true
          })
        }else{
          that.setData({
            isShow: false
          })
        }
       

      }
      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getOrderList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})