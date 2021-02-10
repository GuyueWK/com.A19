var login = new Vue({
    el:"#login-warp",
    data:{
        userId:getCookie("username"),
        password:getCookie("password"),
        checkId:"  ",
        checkPassword:"  "
    },
    methods:{
        login:function () {
            // console.log(this.userId);
            // if(this.userId == null){
            //     console.log("check");
            //     this.checkId = "空";
            // }
            // if(this.password == null){
            //     console.log("check");
            //     this.checkPassword = "空";
            // }
            console.log(this.userId + "登录检查");
            let that = this;
            axios.get("http://www.honest_a19.com/user?username=" + that.userId + "&password=" + that.password).then
            (function (response) {
                window.location.href = "./index.html";
            },function (err) {
                console("登录失败");
                console.log(err);
            })
        }
    }
})