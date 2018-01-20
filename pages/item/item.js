// pages/item/item.js
Page({
  goBack:function(){
    wx.navigateBack();
  },

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  addToCart: function(){
    wx.getStorage({
      key: 'cart',
      success: function(res){
        console.log(res.data)
        var cart = JSON.parse(res.data)
        cart.push(this.data.objectId);
        this.setCartStorage(JSON.stringify(cart));
        console.log(cart)
      }.bind(this),
      fail: function () {
        this.setCartStorage('["' + this.data.objectId + '"]');
      }.bind(this)
    })
  },
  setCartStorage: function(data){
    wx.setStorage({
      key: "cart",
      data
    })
    wx.showToast({
      title: this.getCount(data) + this.data.name,
      duration: 2000
    })
  },
  getCount(data){
    var length = JSON.parse(data).filter(o => o == this.data.objectId).length;
    if(length == 1) return '';
    else return length+'x '
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var lc = require('../../utils/leancloud.js');
    lc.getById("Product",option.id,this.showProduct)
  },

  showProduct: function(product){
    this.setData(product)
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