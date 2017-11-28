var router=new VueRouter({
    routes:[
        {path:"/",component:Home},
        {path:"/info",component:Info,
        children:[{
            path:"list/:id",component:list
        },
            {path:"",component:Infos}],
        },
        {path:"/doc",component:Doc,
        children:[{path:"",components:{left,right}}]},
        {
            path:"/login",
            component:Login
        }
        ]
})