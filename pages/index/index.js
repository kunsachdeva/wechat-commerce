//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    searchKeyword:"",
    cities: [
      {url:'https://www.fourseasons.com/content/dam/fourseasons/images/web/BEJ/BEJ_212_1280x486.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',name:'BEIJING'},
      {url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Storm_at_Manhattan.jpg/1024px-Storm_at_Manhattan.jpg',name:'NEW YORK'},
      {url:'https://lonelyplanetwp.imgix.net/2012/05/tokyo-on-cheap-capsule-hotel-fb7bd30a44d7.jpg?fit=min&q=40&sharp=10&vib=20&w=1470',name:'TOKYO'},
      {url:'https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg',name:'LONDON'},
      {url:'https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/destinations/india/delhi/h1-delhi-primary-family-h.jpg',name:'NEW DELHI'},
      {url:'https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/3731/SITours/skip-the-line-eiffel-tower-tour-by-night-in-paris-404583.jpg',name:'PARIS'},
      {url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Johannesburg_From_M2_Highway_Looking_North.jpg/800px-Johannesburg_From_M2_Highway_Looking_North.jpg',name:'JOHANNESBURG'},
       {url:'https://www.travelchinaguide.com/images/photogallery/2009/0601161148.jpg',name:'SHANGHAI'},
       {url:'http://kosublog.com/wp-content/uploads/2016/10/blog12-3-1-800x533.jpg',name:'SINGAPORE CITY'}
    ]
  },
  showProduct: function (e) {
    wx.navigateTo({ url: '../item/item?id=' + e.target.dataset.id });
  },
  doSearch: function (e) {
    var keyword = e.detail.value;
    this.setData({ searchKeyword: keyword })
    if(keyword){
      var lc = require('../../utils/leancloud.js');
      this.stopAllTimeouts();
      setTimeout(
        () => lc.getByCondition("Product", '{"name":{"$regex":"' + keyword + '", "$options": "i" }}', this.showSearchList),
        1000)
    }
  },
  showSearchList:function(products){
    this.setData({ searchResult: products })
  },
  showBrand: function (e) {
    wx.navigateTo({ url: '../brand/brand?id=' + e.target.dataset.id });
  },
  showLocation:function(){
    wx.openLocation({
      latitude: 31.2243489,
      longitude: 121.4767528,
      scale: 28
    })
  },
  loadBrands: function (brands) {
    this.setData({brands});
  },
  loadProducts: function (products) {
    this.setData({products});
  },
  onLoad: function (options) {
    var lc = require('../../utils/leancloud.js');
    lc.getAll('Brand', this.loadBrands);
    lc.getAll('Product', this.loadProducts);
  },
  stopAllTimeouts: function (){
    var id = setTimeout(function(){}, 0);
    while(id--) 
    {
      clearTimeout(id);
    }
  }
})