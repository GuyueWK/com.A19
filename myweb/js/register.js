var register = new Vue({
    el:"#register-warp",
    data:{
        userId:"",
        password:"",
        password_2:"",
        nickname:"",
        mail:""
    },
    methods:{
        register:function () {
            console.log("注册检查");
            if(this.password != this.password_2){
                console.log("密码不一致");
                return;
            }
            let that = this;
            axios.get("http://www.honest_a19.com/register?userId="
                + that.userId + "&password=" + that.password + "&nickname="
                + that.mail + "&mail=").then
            (function (response) {
                console.log("注册成功");
                window.location.href = "./regist-success.html";
            },function (err) {
                console.log("注册失败" + err);
            })
        }
    }
})