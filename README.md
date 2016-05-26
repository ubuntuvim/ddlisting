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

#### 2016年5月16日

完成PC版的界面设计：主要包括首页布局，编辑页面布局。

##### 晚18时

新建分支，备份未使用模板重构主页前的代码。

#### 2016年5月17日 晚24时

使用模板重构各个页面的设计，并且引入firebase数据库。
其中主要代码目录如下图所示：

![主要代码结构]()


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
