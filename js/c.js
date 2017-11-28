var Home=Vue.component("Home",{
    template:`<div  style="position: absolute;top: 0;left: 0;">
                <navs></navs>
                <img src="img/0.jpg" alt="tupian">
            </div>`
})
var Info=Vue.component("Info",{
    template:`<div style="position: absolute;top: 0;left: 0;">
                <navs></navs>
                 
                <transition name="opacity" mode="out-in"><router-view></router-view></transition>
               </div>`
})
var Infos=Vue.component("Infos",{
    template:`<div style="text-align: center;cursor: pointer">
                    <router-link to="/info/list/1" tag="li">公司人员</router-link>
                    <router-link to="/info/list/2" tag="li">公司文化</router-link>
                    <router-link to="/info/list/3" tag="li">公司规模</router-link>
                </div>`
})
var Doc=Vue.component("Doc",{
    template:`<div>
                <navs></navs>
               
                <router-view name="left" class="left"></router-view>
                <router-view name="right" class="right"></router-view>
               </div>`,
    beforeRouteEnter(to,from,next){

        next(function(vm){
            console.log(vm);
            if(!vm.get("login","name")){
                router.push("/login");
            }
        })
    }
})
var list=Vue.component("list",{
    template:`
        <div style="text-align: center;position: absolute;top: 40px;left: 0;right: 0;margin-right: auto;margin-left: auto">
        <div>{{$route.params.id}}</div>
        </div> 
    `
})
Vue.component("navs",{
    template:`<div>
            <ul class="nav">
                <router-link :to="item.url" v-for="(item,key) in NavData" :key="key" exact>{{item.title}}</router-link>
            
             <router-link to="/login" v-if="!islogin">login</router-link> 
       <span v-if="islogin" class="info" @click="show">
       {{name}}
            <span  class="logout" v-show="isshow" @click="logout">退出</span>
       </span>
       </ul>
            </div>`,
    data() {
        return {NavData:[
            {title:"首页",url:"/"},
            {title:"公司简介",url:"/info"},
            {title:"文档说明",url:"/doc"},
            ],
            islogin:false,
            name:"",
            isshow:false
        }

    },
    created(){
        this.name=this.get("login","name");
        this.islogin=this.get("login","name");
    },
    methods:{
        show(){
            this.isshow=!this.isshow
        },
        logout(){
            this.del("login");
            router.push("/")
        }
    }
})
var left=Vue.component("left",{
    template:`<div>
    <ul>
    <li><router-link to="#one">one</router-link></li>
    <li><router-link to="#two">two</router-link></li>
    <li><router-link to="#three">three</router-link></li>
    </ul>
</div>`,
})
var right=Vue.component("right",{
    template:`<div><div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div id="one" style="height: 200px;">a</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div id="two" style="height: 200px;">b</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div id="three" style="height: 200px;">c</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div>
                <div>222</div></div>
`,
    watch:{
        $route(){
            var hash=this.$route.hash.slice(1);
            var vm = this
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningNumber: document.querySelector(".right").scrollTop})
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: (document.querySelector("#"+hash).offsetTop)-40 }, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop = this.tweeningNumber.toFixed(0)
                })
                .start()
            animate()
        }
    },
})
var Login=Vue.component("Login",{
    template:`
<div style="position: absolute;top: 0;">
<header class="mui-bar mui-bar-nav">
     <a class="mui-icon mui-icon-undo" @click="back"></a>
			<h1 class="mui-title">登录</h1>
</header>
<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='name' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
		
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit">登录</button>
			
			</div>
			<div class="mui-content-padded oauth-area">
			</div>
		</div></div>`,
    methods:{
        back(){
            router.push("/");
        },
        submit(){
            var obj={"name":document.querySelector("#name").value}
            this.save("login",obj);
            router.push("/doc")
        }

    }


})