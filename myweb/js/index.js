var index = new Vue({
    el:"#index",
    methods:{
        gotoType:function(type) {
            console.log("跳转分类");
            window.location.href = "./product-list.html?type=" + type;
        }
    }
})