//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    categories: [
      'https://cdn.dribbble.com/users/23569/screenshots/333411/tokyobicycles_logo.png',
      'https://cdn.dribbble.com/users/25514/screenshots/3174369/running_santa_animation_ramotion.gif',
      'https://previews.123rf.com/images/cienpies/cienpies1308/cienpies130800032/21279829-vintage-coffee-shop-text-with-flat-icons-background--Stock-Vector.jpg',
      'https://cdn.dribbble.com/users/60166/screenshots/931826/the_land_contour.jpg',
      'https://cdn.dribbble.com/users/4931/screenshots/2484903/designplus-dribbble-new-fnl.gif',     
      'https://thumb7.shutterstock.com/display_pic_with_logo/1367965/450559084/stock-vector-pizza-flat-icons-isolated-on-white-background-pizza-food-silhouette-pizza-piece-pizza-slice-450559084.jpg','https://cdn.dribbble.com/users/22325/screenshots/918590/beer_brothers.jpg',
      'https://cdn.dribbble.com/users/78594/screenshots/699847/monogram-stamp.png',
'https://cdn.dribbble.com/users/22679/screenshots/2037569/pbishot.png',
    ],
    products: [
      {url:'https://cdn.dribbble.com/users/3460/screenshots/1089675/mcfly_gear_2013.png',name:'CLOTHES'},
      {url:'https://cdn.dribbble.com/users/39185/screenshots/2523093/flower.jpg',name:'PLANT'},
      {url:'https://cdn.dribbble.com/users/99875/screenshots/2755634/01nike.gif',name:'BALLS'},
      {url:'https://cdn.dribbble.com/users/80158/screenshots/782582/dodgers_ios_icon.png',name:'CAP'},
      {url:'https://cdn.dribbble.com/users/398490/screenshots/2848209/pullups.gif',name:'GYM'},
      {url:'https://cdn.dribbble.com/users/25514/screenshots/2016747/flat-news-app-icon-design-ramotion.gif',name:'NEWS'},
      {url:'https://cdn.dribbble.com/users/29591/screenshots/906704/fan.png',name:'FAN'},
       {url:'https://cdn.dribbble.com/users/14268/screenshots/824210/waffle.png',name:'WAFFLES'},
       {url:'https://cdn.dribbble.com/users/469578/screenshots/2376205/dancing_turkey.gif',name:'CHICKEN'}
    ],
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
  }
})
