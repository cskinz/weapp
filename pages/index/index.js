var app = getApp();
 Page({
  data: {
    img_data: [
      {
        "title": "1",
        "img_url": "../../images/b1.jpg",
      },
      {
        "title": "2",
        "img_url": "../../images/b2.jpg"
      },
      {
        "title": "3",
        "img_url": "../../images/b3.jpg"
      },
      {
        "title": "4",
        "img_url": "../../images/b4.jpg"
      },
      {
        "title": "5",
        "img_url": "../../images/b5.jpg"
      }     
    ],
    nav: [
      {
        "imgurl": "../../images/web.png",
        "navigator": "../about/about",
        "title": "企业网站制作"
      },
      {
        "imgurl": "../../images/weapp.png",
        "navigator": "../about/about",
        "title": "小程序开发"
      },
      {
        "imgurl": "../../images/mb.png",
        "navigator": "../contact/contact",
        "title": "模板网站制作"
      },
      {
        "imgurl": "../../images/seo.png",
        "navigator": "../about/about",
        "title": "网站SEO优化"
      } 
    ],
    caselist:[
      {
        "imgurl": "../../images/t1.png",
        "navigator": "../about/about/",
        "mode": 'aspectFit',
        "title": "企业网站制作"
      },
      {
        "imgurl": "../../images/t1.png",
        "navigator": "../pages/about",
        "mode": 'aspectFit',
        "title": "小程序开发"
      }
      ,
      {
        "imgurl": "../../images/t1.png",
        "navigator": "../pages/about",
        "mode": 'aspectFit',
        "title": "小程序开发"
      }
      ,
      {
        "imgurl": "../../images/t1.png",
        "navigator": "../about/about/",
        "mode": 'aspectFit',
        "title": "小程序开发"
      }
   
    ],
      suggests: [
      {
        "name": "高端集团网站",
        "avatar": "https://www.appcs.cn/images/t1.png",
        "tags": [
          "PC版",
          "手机版",
          "微信公众号"
        ],
        "text": "适合大型集团公司品牌推广"
      }
    ],
    is_dots: true,
    swiper_data_num: 0,
    swiperCurrent: 0,
    swiper_style: 1
  },

  onLoad: function () {
    this.setData({ swiper_data_num: this.data.img_data.length });
  },
  swiperChange: function (e) {
    this.setData({ swiperCurrent: e.detail.current });
  },
  //改变轮播图样式
  onShareAppMessage: function () {
    return {
      title: '专业互联网服务商',
      desc: '我们提供专业网站设计,网站开发,小程序开发,网络营销,Vi设计,影视拍摄等一站式服务.',
      path: '/'
    }
  }
})
