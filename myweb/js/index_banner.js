var myswiper = new Vue({
    el:"#swiper",
    data:{
        bannerArr:[
            {url:"img/index/banner1.png",productId:"001"},
            {url:"img/index/banner2.png",productId:"002"},
            {url:"img/index/banner3.png",productId:"003"},
        ]
    },
    created(){
      let that = this;
      axios.get("http://www.honest_a19.com/banner").then
      (function (response) {
          console("申请轮播图成功" + response);
          that.bannerArr = response.data;
      },function (err) {
          console.log("申请轮播图失败" + err);
      })
    },
    mounted(){
        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    },
    methods:{
        gotoProduct:function (Id) {
            console.log("跳转至"+Id);
            window.location.href = "./product-info?productId=" + Id;
        }
    }
})