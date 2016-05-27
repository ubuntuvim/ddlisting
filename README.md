# Ddlisting

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

# 使用到的资源、插件

1. [jquery-flextext](https://github.com/alexdunphy/flexText)
2. [My97DatePicker](http://www.my97.net/)
3. [bootstrap-sass](https://github.com/twbs/bootstrap-sass)
4. [ember-bootstrap-sass](https://github.com/MiracleBlue/ember-bootstrap-sass)
5. [emberfire](https://www.firebase.com/docs/web/libraries/ember/guide.html)


## 界面原型

### PC版界面原型

#### 首页

![首页](http://blog.ddlisting.com/content/images/2016/05/index.png)

#### 编辑页面

![编辑页面](http://blog.ddlisting.com/content/images/2016/05/index-edit.png)

## 版本历史

#### 2016年5月16日  `0.0.0`

完成PC版的界面设计：主要包括首页布局，编辑页面布局。

##### 晚18时  `0.1.0`

新建分支，备份未使用模板重构主页前的代码。
使用模板重构各个页面的设计，并且引入firebase数据库。

#### 2016年5月17日 晚24时  `0.2.0`

使用模板重新组件PC版界面代码。

#### 2016年5月27日 晚2点  `0.3.0`

拆分为PC版、手机版页面。
PC版的路由、模型、模板都放在`app/pc`目录下；
手机版版的路由、模型、模板都放在`app/m`目录下；


## 软件依赖

为了确保项目能正常运行你需要安装如下软件：

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/) 本项目使用的是`2.3`以及以上版本，如果使用的`1.13`版本请参考[升级教程](https://github.com/ember-cli/ember-cli/releases)升级
* [PhantomJS](http://phantomjs.org/)

或者参考[Ember CLI](http://www.ember-cli.com/user-guide/)官方文档安装所需的软件。

## 下载项目、安装依赖

* `git clone https://github.com/ubuntuvim/ddlisting.git` 下载项目
* `cd ddlisting`  进入项目目录
* `npm install`  安装npm依赖
* `bower install`  安装bower依赖库

## 运行项目

* `ember server`  在项目目录下执行运行命令
* 等待启动完毕，在浏览器打开[http://localhost:4200](http://localhost:4200).

有关命令介绍请看[Ember CLI命令介绍](http://ember-cli.com/user-guide/#using-ember-cli)。


### 编译、打包项目

* `ember build` (开发模式，包括测试代码)
* `ember build --environment production` (生成模式，最大压缩，不包括测试代码)

### 项目发布

编译、打包后把项目的`dist`下的文件复制到服务器上运行，比如复制到tomcat服务器的`webapp`目录下。或者是复制到apache的`www`目录下运行。

详细请参考[发布项目，加入CRUD功能](http://blog.ddlisting.com/2016/04/16/fa-bu-xiang-mu-jia-ru-crudgong-neng/)

## 调试工具

* [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
* [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
