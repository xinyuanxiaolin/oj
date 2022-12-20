# oj

## Project setup 步骤一

```
npm install
```

### Compiles and hot-reloads for development 步骤二

```
npm run serve
```

# 具体

## 前言 
```
每个人提交时记得只提交你负责的部分,不要动其他部分!!!
下载到本地按上面的步骤测试下是否能正常打开运行,
有自己的静态资源要引用要放在assets里面,不要放错位置(@可以定位到src文件夹,@/src/assets/... 地址引用定位到静态资源)
```

## 路由方面:(有缺失记得在群里提出)

目前路由组件:
```
登录: /login
```

```
oj主界面: /home                 对应组件路径:/pages/homePage/index.vue
oj主界面子级路由:

    首页:/home/index            对应组件:firstPage

    题库:/home/question         对应组件:questionPage

    比赛:/home/game             对应组件:gamePage

    状态:/home/status           对应组件:statusPage

    排名:/home/rank             对应组件:rankPage

    讨论:/home/discuss          对应组件:discussPage

    关于:/home/about            对应组件:aboutUs

    答题:/home/answer           对应组件:answerPage

    学生登录后,
    收藏:/home/collection      路径:/pages/homePage/Student/collectionPage

    我的主页:/home/own              /pages/homePage/Student/ownPage

```

```
oj后台:/oj                      对应组件路径:/pages/BMS/index.vue
oj后台子级路由:

    统计图:/oj/count            对应组件:countPage

    创建比赛:/oj/create         对应组件:createGame

    导入学生信息:/oj/import     对应组件:importStudentInfo

    查看信息:/oj/view           对应组件:viewInfo

    修改信息:/oj/info           对应组件:changeInfo

    删除信息:/oj/del            对应组件:delInfo

    修改密码:/oj/pwd            对应组件:changePwd

    高级设置:/oj/setting        对应组件:advancedSetting

    新增管理员:/oj/add          对应组件:addAdmin
    

```