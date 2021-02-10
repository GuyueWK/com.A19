var header = new Vue({
    el:"#common_head",
    data: {
        personalMsg:'<span id="head_span" ><a href="login.html">登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="regist.html">注册</a></span>',
        query:"",
        loginTit:"用户登录",
        gotoHref:"login.html",
        isLogin:false,
        userId:getCookie("username"),
        password:getCookie("password")
    },
    created:function(){
        this.autoLogin();
    },
    methods:{
        search:function () {
            console.log("搜索");
            window.location.href = "./login?query="+this.query;
        },

        logout:function(){
            window.location.href = "./index.html";
        },
        autoLogin:function () {
            console.log("auto登录");
            let that = this;
            axios.get("http://www.honest_a19.com/user?username=" + that.userId + "&password=" + that.password).then
            (function (response) {
                console.log("登录成功");
                if(response.data.userType == 1){
                    that.isLogin = true;
                    that.LoginTit = "个人中心";
                    that.gotoHref = "./home.html";
                    that._html = that.userId + "欢迎来到共享租赁平台" +
                        "<a href='javascript:void(0)' class='link-logout' @click='logout'>[退出]</a>";
                } else if(response.userType == 2){
                    window.location.href = "./manage.html";
                } else {
                    console.log("用户类型错误");
                }
            },function (err) {
                console.log("登录失败");
            })
        }
    }
})