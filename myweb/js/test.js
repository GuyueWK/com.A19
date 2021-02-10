var productList = new Vue({
    el:"#...",
    data:{
        wantQuery:GetRequest().query,
        productList:[]
    },
    created(){
        let that = this;
        axios.get("http://www.honest_a19.com/query?type=" + that.wantQuery).then
        (function (response) {
            that.productList = response.data;
        },function (err) {
            console.log("失败");
        })
    }
})