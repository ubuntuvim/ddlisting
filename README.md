# 使用到的资源、插件

1. [jquery-flextext](https://github.com/alexdunphy/flexText)  div点击可编辑
2. [My97DatePicker](http://www.my97.net/)  日期控件
3. [bootstrap-sass](https://github.com/twbs/bootstrap-sass)
4. [ember-bootstrap-sass](https://github.com/MiracleBlue/ember-bootstrap-sass)
5. [emberfire](https://www.firebase.com/docs/web/libraries/ember/guide.html)
6. [jsonapi-serializer](https://github.com/SeyZ/jsonapi-serializer) 自定义返回jsonapi，使用自定义后端适配器的时候使用
7. [jquery-validation](https://github.com/ikajou/jquery-validation.git) 表单校验
8. [ember-profile-upload](https://github.com/rtablada/ember-profile-upload) 图片上传
9. [Cloudinary](https://cloudinary.com/)  图片后端存储库
10. [intro](https://github.com/usablica/intro.js) 用户使用引导
11. [ember-cli-showdown](https://github.com/ubuntuvim/ember-cli-showdown) ember.js的Markdown组件


## 界面原型

### PC版界面原型

#### 首页

![首页](http://blog.ddlisting.com/content/images/2016/05/index.png)

#### 编辑页面

![编辑页面](http://blog.ddlisting.com/content/images/2016/05/index-edit.png)


### 手机版界面原型

#### 分类列表页面

![分类列表页面](http://blog.ddlisting.com/content/images/2016/05/m-category.png)

#### 任务列表页面

![任务列表页面](http://blog.ddlisting.com/content/images/2016/05/m-todos.png)

#### 任务详细页面

![任务详细页面](http://blog.ddlisting.com/content/images/2016/05/m-todoitem.png)


## 项目文件结构

#### 模型结构

![models](http://blog.ddlisting.com/content/images/2016/05/model.png)

#### 路由结构

![routes](http://blog.ddlisting.com/content/images/2016/05/route.png)

#### 模板结构

![templates](http://blog.ddlisting.com/content/images/2016/05/template.png)

## 版本历史

根据发布版本编写。




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


## 项目配置

请参考[https://git.oschina.net/chendequan/wildember#安装wildember](https://git.oschina.net/chendequan/wildember#安装wildember)配置项目。如有疑问给我留言或者QQ联系。


## 运行项目

* `ember server`  在项目目录下执行运行命令
* 等待启动完毕，在浏览器打开[http://localhost:4200](http://localhost:4200).

有关命令介绍请看[Ember CLI命令介绍](http://ember-cli.com/user-guide/#using-ember-cli)。

## 运行环境

由于项目使用比较新的JS特性，所以需要运行在最新的浏览器上已获得最好的支持。支持的浏览器包括chrome、Firefox、IE10以上，以及这些浏览器的衍生版。

### 编译、打包项目

* `ember build` (开发模式，包括测试代码)
* `ember build --environment production` (生成模式，最大压缩，不包括测试代码)

### 项目发布

编译、打包后把项目的`dist`下的文件复制到服务器上运行，比如复制到tomcat服务器的`webapp`目录下。或者是复制到apache的`www`目录下运行。

详细请参考[发布项目，加入CRUD功能](http://blog.ddlisting.com/2016/04/16/fa-bu-xiang-mu-jia-ru-crudgong-neng/)

## 调试工具

* [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
* [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
