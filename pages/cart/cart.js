// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'cart',
      success: function (res) {
        this.setData({ productsId: res.data})
        this.fetchCart(JSON.stringify(res.data))
      }.bind(this),
      fail: function () {
        this.setData(new Array());
      }.bind(this)
    })
  },
  fetchCart: function(cartList){
    var lc = require('../../utils/leancloud.js');
    lc.getByCondition("Product", '{"objectId":{"$in":' + cartList.substr(1, cartList.length - 2).split('\\').join('')+'}}', this.showCart)
  },
  showCart: function(cartData){
    cartData.forEach(function(product){
      product.count=this.data.productsId.split(product.objectId).length - 1;
    }.bind(this))
    this.setData({products:cartData});
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