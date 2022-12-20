// 整体路由配置
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

// homePage
import homePage from "@/pages/homePage";
import aboutUs from "@/pages/homePage/aboutUs";
import answerPage from "@/pages/homePage/answerPage";
import discussPage from "@/pages/homePage/discussPage";
import firstPage from "@/pages/homePage/firstPage";
import gamePage from "@/pages/homePage/gamePage";
import questionPage from "@/pages/homePage/questionPage";
import rankPage  from "@/pages/homePage/rankPage";
import statusPage from "@/pages/homePage/statusPage";

// Login
import login from "@/pages/Login";

// Student
import collectionPage from "@/pages/homePage/Student/collectionPage";
import ownPage from "@/pages/homePage/Student/ownPage";

//BMS
import BMS from "@/pages/BMS";
import addAdmin from "@/pages/BMS/addAdmin";
import advancedSetting from "@/pages/BMS/advancedSetting";
import changeInfo from "@/pages/BMS/changeInfo";
import changePwd from "@/pages/BMS/changePwd";
import countPage from "@/pages/BMS/countPage";
import createGame from "@/pages/BMS/createGame";
import delInfo from "@/pages/BMS/delInfo";
import importStudentInfo from "@/pages/BMS/importStudentInfo";
import viewInfo from "@/pages/BMS/viewInfo";



const router =new VueRouter({
    routes:[
        {
            // 登录
            path:"/login",
            component:login
        },

        {
            // 前台
            path:'/home',
            component:homePage,
            children:[
                {
                    path:'',
                    redirect:'index',
                },
                {
                    // 首页
                    path:'index',
                    component:firstPage,
                },

                {
                    // 题库
                    path:'question',
                    component:questionPage,

                },

                {
                    // 比赛
                    path:'game',
                    component:gamePage,
                },

                {
                    // 状态
                    path:'status',
                    component:statusPage,
                },
                {
                    // 排名
                    path:'rank',
                    component:rankPage,
                },

                {
                    // 讨论
                    path:'discuss',
                    component:discussPage,
                },

                {
                    // 关于
                    path:'about',
                    component:aboutUs,
                },

                {
                    // 答题
                    path:'answer',
                    component:answerPage,
                },

                {
                    // 收藏
                    path:'collection',
                    component:collectionPage,
                },

                {
                    // 我的主页
                    path:'own',
                    component:ownPage,

                }
            ]

        },
                
                
      

        {
            // 后台管理
            path:'/oj',
            component:BMS,
            children:[

                {
                    path:'',
                    redirect:'count',
                },

                {
                    // 统计图
                    path:'count',
                    component:countPage,
                },
                {
                    // 创建比赛
                    path:'create',
                    component:createGame,
                },
                {
                    // 导入学生信息
                    path:'import',
                    component:importStudentInfo,
                },

                {
                    // 查看信息
                    path:'view',
                    component:viewInfo,
                },

                {
                    // 修改信息
                    path:'info',
                    component:changeInfo,
                },

                {
                    // 删除信息
                    path:'del',
                    component:delInfo,
                },

                {
                    //修改密码
                    path:'pwd',
                    component:changePwd,
                },

                {
                    // 高级设置
                    path:'setting',
                    component:advancedSetting,
                },

                {
                    // 新增管理员
                    path:'add',
                    component:addAdmin,
                }
            ]
        },

        {
            // 重定向
            path:'/',
            redirect:'/home'
        }
    ]


    
});

//路由导航守卫
router.beforeEach((to, from, next) => {
    if (to.path === "/login") return next();


    next();
});

export default router;