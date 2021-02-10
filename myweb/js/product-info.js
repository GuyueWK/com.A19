var info_warp = new Vue({
    el:"#info-container",
    data:{
        productId:GetRequest().productId,
        productPic:"pic",
        productName:"name",
        productIntro:"intro",
        productDeposit:"deposit",
        productRent:"rent",
        productPrice:"price",
        productStock:"stock",
        productDescription:"description",
        wantNum:"1",
        isShow_1:true,
        isShow_2:false,
        isShow_3:false,
    },
    created() {
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
            that.productDescription = response.data.productDescription;
        },function (err) {
            console.log("获取商品信息失败" + err);
        })
    },
    methods:{
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
        doDescription:function () {
            this.isShow_1 = true;
            this.isShow_2 = false;
            this.isShow_3 = false;
        },
        doInfo:function () {
            this.isShow_1 = false;
            this.isShow_2 = true;
            this.isShow_3 = false;
        },
        doStd:function () {
            this.isShow_1 = false;
            this.isShow_2 = false;
            this.isShow_3 = true;
        },
        buyIt:function () {
            if(header.isLogin == false){
                console.log("未登录");
                window.location.href = "./login.html";
                return;
            }
            window.location.href = "./neworder.html?userId="
                + header.userId + "&productId=" + this.productId + "&num=" + this.wantNum;
        }
    }
})




//
//
// function change(n) {
//     let amount = parseInt($("#buyNumInp").val());
//     if(amount<=1 && n<0) {
//         return;
//     }
//     $("#buyNumInp").val(amount + n);
// }
// function tab_one() {
//     console.log("tabclick_ok");
//     $("#prod_desc").css("display","block");
//     $("#process_info").css("display","none");
//     $("#compensation_std").css("display","none");
//     $("#tab_one").css("background-color","#e81d2a");
//     $("#tab_one").css("color","#ffffff");
//     $("#tab_two").css("background-color","#f7f7f7");
//     $("#tab_two").css("color","rgb(102, 102, 102)");
//     $("#tab_three").css("background-color","#f7f7f7");
//     $("#tab_three").css("color","rgb(102, 102, 102)");
// }
// function tab_two() {
//     console.log("tabclick_ok");
//     $("#prod_desc").css("display","none");
//     $("#process_info").css("display","block");
//     $("#compensation_std").css("display","none");
//
//     $("#tab_one").css("background-color","#f7f7f7");
//     $("#tab_one").css("color","rgb(102, 102, 102)");
//     $("#tab_two").css("background-color","#e81d2a");
//     $("#tab_two").css("color","#ffffff");
//     $("#tab_three").css("background-color","#f7f7f7");
//     $("#tab_three").css("color","rgb(102, 102, 102)");
// }
//
// function tab_three() {
//     console.log("tabclick_ok");
//     $("#prod_desc").css("display","none");
//     $("#process_info").css("display","none");
//     $("#compensation_std").css("display","block");
//     $("#tab_one").css("background-color","#f7f7f7");
//     $("#tab_one").css("color","rgb(102, 102, 102)");
//     $("#tab_three").css("background-color","#e81d2a");
//     $("#tab_three").css("color","#ffffff");
//     $("#tab_two").css("background-color","#f7f7f7");
//     $("#tab_two").css("color","rgb(102, 102, 102)");
// }
//





