var neworder_container = new Vue({
    el:"#container",
    data:{
        receiverName:"",
        receiverTel:"",
        receiverMail:"",
        receiverAddr:"",
        buyWay:"",
        wantNum:GetRequest().wantNum,
        wantDay:"1",
        productId:GetRequest().productId,
        totalPrice:"",

        productPic:"pic",
        productName:"name",
        productIntro:"intro",
        productDeposit:"deposit",
        productRent:"rent",
        productPrice:"price",
        productStock:"stock",
    },
    created(){
        let that = this;
        console.log("获取商品信息");
        axios.get("http://www.honest_a19.com/item?productId=" + that.productId).then
        (function (response) {
            console.log("获取商品信息成功" + response);
            that.productPic = response.data.productPic;
            that.productName = response.data.productName;
            that.productIntro = response.data.productIntro;
            that.productDeposit = response.data.productDeposit;
            that.productRent = response.data.productRent;
            that.productPrice = response.data.productPrice;
            that.productStock = response.data.productStock;
        },function (err) {
            console.log("获取商品信息失败" + err);
        })
    },
    watch: {
        wantNum:function () {
            this.totalPrice = this.wantNum * this.productDeposit + this.wantDay * this.productRent * this.productDeposit;
            console.log(this.totalPrice);
        },
        wantDay:function () {
            this.totalPrice = this.wantNum * this.productDeposit + this.wantDay * this.productRent * this.productDeposit;
            console.log(this.totalPrice);
        }
    },
    methods:{
        submitIt:function () {
            console.log("提交订单");
            let data = {receiverName:this.receiverName, receiverTel:this.receiverTel, receiverMail:this.receiverMail,
                receiverAddr:this.receiverAddr, buyWay:this.buyWay, wantNum:this.wantNum, buyWay:this.buyWay,
                wantDay:this.wantDay, productId:this.productId, totalPrice:this.totalPrice,};
            let that = this;
            axios.post("http://www.honest_a19.com/orders",data).then
            (function (response) {
                console.log("提交成功");
                window.location.href = ".buy-success.html";
            },function (err) {
                console.log("提交错误");
            })
        },
        sub:function () {
            console.log("减少");
            if(this.wantNum <= 1){
                this.wantNum = 1;
                return;
            }
            this.wantNum--;
        },
        add:function () {
            console.log("增加");
            if(this.wantNum >= this.productStock){
                this.wantNum = this.productStock;
                return;
            }
            this.wantNum++;
        },
        sub2:function () {
            console.log("减少");
            if(this.wantDay <= 1){
                this.wantDay = 1;
                return;
            }
            this.wantDay--;
        },
        add2:function () {
            console.log("增加");
            this.wantDay++;
        }
    }
})