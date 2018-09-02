# 列表/折叠面板

[source code](https://jsfiddle.net/badfl/h4j4fhzy/)

**普通列表**

列表是常用的UI控件，mui封装的列表组件比较简单，只需要在ul节点上添加.mui-table-view类、在li节点上添加.mui-table-view-cell类即可，如下为示例代码

```html
<ul class="mui-table-view">
    <li class="mui-table-view-cell">Item 1</li>
    <li class="mui-table-view-cell">Item 2</li>
    <li class="mui-table-view-cell">Item 3</li>
</ul>
```

自定义列表高亮颜色
点击列表，对应列表项显示灰色高亮，若想自定义高亮颜色，只需要重写.mui-table-view-cell.mui-active即可，如下：

```css
/*点击变蓝色高亮*/
.mui-table-view-cell .mui-active{
    background-color: #0062CC;
}
```

右侧添加导航箭头
若右侧需要增加导航箭头，变成导航链接，则只需在li节点下增加a子节点，并为该a节点增加.mui-navigate-right类即可，如下：

```html
<ul class="mui-table-view">
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">Item 1</a>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">Item 2</a>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">Item 3</a>
    </li>
</ul>
```

右侧添加数字角标等控件
mui支持将数字角标、按钮、开关等控件放在列表中；mui默认将数字角标放在列表右侧显示，代码如下：

```html
<ul class="mui-table-view">
    <li class="mui-table-view-cell">Item 1 
        <span class="mui-badge mui-badge-primary">11</span>
    </li>
    <li class="mui-table-view-cell">Item 2 
        <span class="mui-badge mui-badge-success">22</span>
    </li>
    <li class="mui-table-view-cell">Item 3 
        <span class="mui-badge">33</span>
    </li>
</ul>
```

media list（图文列表）
图文列表继承自列表组件，主要添加了.mui-media、.mui-media-object、.mui-media-body、.mui-pull-left\/right几个类，如下为示例代码
[source code](https://jsfiddle.net/badfl/t4htb4re/)

```html
<ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../images/shuijiao.jpg">
            <div class="mui-media-body">
                幸福
                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../images/muwu.jpg">
            <div class="mui-media-body">
                木屋
                <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../images/cbd.jpg">
            <div class="mui-media-body">
                CBD
                <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
            </div>
        </a>
    </li>
</ul>
```

折叠面板从二级列表中演化而来，dom结构和二级列表类似
[source code](https://jsfiddle.net/badfl/k4mfLnsx/)

```html
<ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">面板1</a>
            <div class="mui-collapse-content">
                <p>面板1子内容</p>
            </div>
        </li>
    </ul>
```

可以在折叠面板中放置任何内容；折叠面板默认收缩，若希望某个面板默认展开，只需要在包含.mui-collapse类的li节点上，增加.mui-active类即可；mui官网中的方法说明，使用的就是折叠面板控件。


## mui-table-view

---

列表是常用的UI控件，mui封装的列表组件比较简单，只需要在ul节点上添加.mui-table-view类、在li节点上添加.mui-table-view-cell类即可，
**如下为示例代码：**
```html
<ul class="mui-table-view">
	<li class="mui-table-view-cell">Item 1</li>
	<li class="mui-table-view-cell">Item 2</li>
	<li class="mui-table-view-cell">Item 3</li>
</ul>
```
<ul class="mui-table-view">
	<li class="mui-table-view-cell badfl">Item 1</li>
	<li class="mui-table-view-cell">Item 2</li>
	<li class="mui-table-view-cell">Item 3</li>
</ul>
**折叠面板：**
.mui.content下使用.mui-table-view第一个子项距离上外边距15px

```html
<div class="mui-content">
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-collapse">
      <a class="mui-navigate-right" href="#">Item 1</a>
      <div class="mui-collapse-content">
        第1个面板中的内容
      </div>
    </li>
  </ul>
</div>
```

可以在折叠面板中放置任何内容；折叠面板默认收缩，若希望某个面板默认展开，只需要在包含.mui-collapse类的li节点上，增加.mui-active类即可；mui官网中的方法说明，使用的就是折叠面板控件。

---


**Mui.css （*v3.0.0*）部分源码：**


```css
.mui-table-view
{
    position: relative;

    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;

    list-style: none;

    background-color: #fff;
}
.mui-table-view:after
{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    height: 1px;

    content: '';
    -webkit-transform: scaleY(.5);
            transform: scaleY(.5);

    background-color: #c8c7cc;
}
.mui-table-view:before
{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    height: 1px;

    content: '';
    -webkit-transform: scaleY(.5);
            transform: scaleY(.5);

    background-color: #c8c7cc;
}
.mui-table-view:before
{
    top: -1px;
}

```

## mui-table-view-cell

mui-table-view子项，在li节点上添加.mui-table-view-cell类
```html
<ul class="mui-table-view">
	<li class="mui-table-view-cell">Item 1</li>
	<li class="mui-table-view-cell">Item 2</li>
	<li class="mui-table-view-cell">Item 3</li>
</ul>
```

## mui-collapse-content
折叠面板需要展开的内容
例子：
```html
<div class="mui-content">
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-collapse">
      <a class="mui-navigate-right" href="#">Item 1</a>
      <div class="mui-collapse-content">
      第1个面板中的内容
      </div>
    </li>
  </ul>
</div>
```
---

**Mui.css （*v3.0.0*）部分源码：**
```css
/*2427*/
.mui-table-view-cell.mui-collapse.mui-active .mui-table-view, .mui-table-view-cell.mui-collapse.mui-active .mui-collapse-content
{
display: block;
}
/*2440*/
.mui-table-view-cell.mui-collapse .mui-collapse-content
{
position: relative;

display: none;
overflow: hidden;

margin: 11px -15px -11px;
padding: 8px 15px;

-webkit-transition: height .35s ease;
-o-transition: height .35s ease;
transition: height .35s ease;

background: white;
}
/*2456*/
.mui-table-view-cell.mui-collapse .mui-collapse-content > .mui-input-group, .mui-table-view-cell.mui-collapse .mui-collapse-content > .mui-slider
{
width: auto;
height: auto;
margin: -8px -15px;
}
.mui-table-view-cell.mui-collapse .mui-collapse-content > .mui-slider
{
margin: -8px -16px;
}
```



## mui-navigate-right

在折叠面板（mui-collapse）中右侧添加下拉箭头，点击后变成上拉箭头
在列表（mui-table-view-cell）下面，右侧添加右箭头
在单选列表中，选中显示对号
**下箭头例子：**
```html
<div class="mui-content">
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">Item 1</a>
            <div class="mui-collapse-content">
                第1个面板中的内容
            </div>
        </li>
    </ul>
</div>
```
**右箭头例子：**
```html
<ul class="mui-table-view">
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">Item 1</a>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">Item 2</a>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">Item 3</a>
    </li>
</ul>
```
**单选列表：**
```html
<ul class="mui-table-view mui-table-view-radio">
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">Item 1</a>
    </li>
    <li class="mui-table-view-cell mui-selected">
        <a class="mui-navigate-right">Item 2</a>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">Item 3</a>
    </li>
</ul>
```

---

**Mui.css （*v3.0.0*）部分源码：**
```css
/*1956*/
.mui-table-view-icon .mui-table-view-cell .mui-navigate-right .mui-icon
{
font-size: 20px;

margin-top: -1px;
margin-right: 5px;
margin-left: -5px;
}
/*1986*/
.mui-table-view-radio .mui-table-view-cell .mui-navigate-right:after
{
font-size: 30px;
font-weight: 600;

right: 9px;

content: '';

color: #007aff;
}
.mui-table-view-radio .mui-table-view-cell.mui-selected .mui-navigate-right:after
{
content: '\e472';
}
/*2144*/
.mui-table-view-cell > .mui-slider-handle.mui-navigate-right:after, .mui-table-view-cell > .mui-slider-handle .mui-navigate-right:after
{
right: 0;
}
/*2384*/
.mui-table-view-cell .mui-navigate-right > .mui-btn,
.mui-table-view-cell .mui-navigate-right > .mui-badge,
.mui-table-view-cell .mui-navigate-right > .mui-switch,
.mui-table-view-cell .mui-push-left > .mui-btn,
.mui-table-view-cell .mui-push-left > .mui-badge,
.mui-table-view-cell .mui-push-left > .mui-switch,
.mui-table-view-cell .mui-push-right > .mui-btn,
.mui-table-view-cell .mui-push-right > .mui-badge,
.mui-table-view-cell .mui-push-right > .mui-switch,
.mui-table-view-cell > a .mui-navigate-right > .mui-btn,
.mui-table-view-cell > a .mui-navigate-right > .mui-badge,
.mui-table-view-cell > a .mui-navigate-right > .mui-switch,
.mui-table-view-cell > a .mui-push-left > .mui-btn,
.mui-table-view-cell > a .mui-push-left > .mui-badge,
.mui-table-view-cell > a .mui-push-left > .mui-switch,
.mui-table-view-cell > a .mui-push-right > .mui-btn,
.mui-table-view-cell > a .mui-push-right > .mui-badge,
.mui-table-view-cell > a .mui-push-right > .mui-switch
{
right: 35px;
}

/*2419行*/
.mui-table-view-cell.mui-collapse > .mui-navigate-right:after, .mui-table-view-cell.mui-collapse > .mui-push-right:after
{
content: '\e581';
}
/*2431行*/
.mui-table-view-cell.mui-collapse.mui-active > .mui-navigate-right:after, .mui-table-view-cell.mui-collapse.mui-active > .mui-push-right:after
{
content: '\e580';
}
/*4567行*/
.mui-navigate-right:after,
.mui-push-left:after,
.mui-push-right:after
{
font-family: Muiicons;
font-size: inherit;
line-height: 1;

position: absolute;
top: 50%;

display: inline-block;

-webkit-transform: translateY(-50%);
transform: translateY(-50%);
text-decoration: none;

color: #bbb;

-webkit-font-smoothing: antialiased;
}
/*4596行*/
.mui-navigate-right:after,
.mui-push-right:after
{
right: 15px;

content: '\e583';
}

```

## mui-collapse

```css
/*2346*/
.mui-table-view.mui-unfold .mui-table-view-cell.mui-collapse .mui-table-view
{
    display: block;
}
.mui-table-view.mui-unfold .mui-table-view-cell.mui-collapse .mui-table-view:before, .mui-table-view.mui-unfold .mui-table-view-cell.mui-collapse .mui-table-view:after
{
    height: 0 !important;
}
.mui-table-view.mui-unfold .mui-table-view-cell.mui-media-icon.mui-collapse .mui-media-body:after
{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 70px;

    height: 1px;

    content: '';
    -webkit-transform: scaleY(.5);
            transform: scaleY(.5);

    background-color: #c8c7cc;
}
/*2411*/

.mui-table-view-cell.mui-collapse .mui-table-view:before, .mui-table-view-cell.mui-collapse .mui-table-view:after
{
    height: 0;
}
.mui-table-view-cell.mui-collapse .mui-table-view .mui-table-view-cell:last-child:after
{
    height: 0;
}
.mui-table-view-cell.mui-collapse > .mui-navigate-right:after, .mui-table-view-cell.mui-collapse > .mui-push-right:after
{
    content: '\e581';
}
.mui-table-view-cell.mui-collapse.mui-active
{
    margin-top: -1px;
}
.mui-table-view-cell.mui-collapse.mui-active .mui-table-view, .mui-table-view-cell.mui-collapse.mui-active .mui-collapse-content
{
    display: block;
}
.mui-table-view-cell.mui-collapse.mui-active > .mui-navigate-right:after, .mui-table-view-cell.mui-collapse.mui-active > .mui-push-right:after
{
    content: '\e580';
}
.mui-table-view-cell.mui-collapse.mui-active .mui-table-view-cell > a:not(.mui-btn).mui-active
{
    margin-left: -31px;
    padding-left: 47px;
}
.mui-table-view-cell.mui-collapse .mui-collapse-content
{
    position: relative;

    display: none;
    overflow: hidden;

    margin: 11px -15px -11px;
    padding: 8px 15px;

    -webkit-transition: height .35s ease;
         -o-transition: height .35s ease;
            transition: height .35s ease;

    background: white;
}
.mui-table-view-cell.mui-collapse .mui-collapse-content > .mui-input-group, .mui-table-view-cell.mui-collapse .mui-collapse-content > .mui-slider
{
    width: auto;
    height: auto;
    margin: -8px -15px;
}
.mui-table-view-cell.mui-collapse .mui-collapse-content > .mui-slider
{
    margin: -8px -16px;
}
.mui-table-view-cell.mui-collapse .mui-table-view
{
    display: none;

    margin-top: 11px;
    margin-right: -15px;
    margin-bottom: -11px;
    margin-left: -15px;

    border: 0;
}
.mui-table-view-cell.mui-collapse .mui-table-view.mui-table-view-chevron
{
    margin-right: -65px;
}
.mui-table-view-cell.mui-collapse .mui-table-view .mui-table-view-cell
{
    padding-left: 31px;

    background-position: 31px 100%;
}
.mui-table-view-cell.mui-collapse .mui-table-view .mui-table-view-cell:after
{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 30px;

    height: 1px;

    content: '';
    -webkit-transform: scaleY(.5);
            transform: scaleY(.5);

    background-color: #c8c7cc;
}
```

## mui-media

图文列表

```html
<ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../images/shuijiao.jpg">
            <div class="mui-media-body">
                幸福
                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../images/muwu.jpg">
            <div class="mui-media-body">
                木屋
                <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../images/cbd.jpg">
            <div class="mui-media-body">
                CBD
                <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
            </div>
        </a>
    </li>
</ul>

```

---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*2271行*/
.mui-table-view .mui-media,
.mui-table-view .mui-media-body
{
    overflow: hidden;
}
/*2608行*/
.mui-grid-view.mui-grid-9 .mui-media
{
    color: #797979;
}
.mui-grid-view.mui-grid-9 .mui-media .mui-icon
{
    font-size: 2.4em;

    position: relative;
}
```

## mui-media-object

图文列表图片
更改图片大小重写.mui-table-view .mui-media-object
```css
.mui-table-view .mui-media-object
{
    line-height: 42px;

    max-width: 42px;
    height: 42px;
}
```

---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*2277*/
.mui-table-view .mui-media-large .mui-media-object
{
    line-height: 80px;

    max-width: 80px;
    height: 80px;
}
/*2288*/
.mui-table-view .mui-media-object
{
    line-height: 42px;

    max-width: 42px;
    height: 42px;
}
.mui-table-view .mui-media-object.mui-pull-left
{
    margin-right: 10px;
}
.mui-table-view .mui-media-object.mui-pull-right
{
    margin-left: 10px;
}
.mui-table-view .mui-table-view-cell.mui-media-icon .mui-media-object
{
    line-height: 29px;

    max-width: 29px;
    height: 29px;
    margin: -4px 0;
}
.mui-table-view .mui-table-view-cell.mui-media-icon .mui-media-object img
{
    line-height: 29px;

    max-width: 29px;
    height: 29px;
}
.mui-table-view .mui-table-view-cell.mui-media-icon .mui-media-object.mui-pull-left
{
    margin-right: 10px;
}
.mui-table-view .mui-table-view-cell.mui-media-icon .mui-media-object .mui-icon
{
    font-size: 29px;
}
/*2528*/
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object
{
    width: 100%;
    max-width: 100%;
    height: auto;
}
```
## mui-media-body

图文列表标题

---
**Mui.css （*v3.0.0*）部分源码：**
```css
/*2271*/
.mui-table-view .mui-media,
.mui-table-view .mui-media-body
{
    overflow: hidden;
}
/*2326*/
.mui-table-view .mui-table-view-cell.mui-media-icon .mui-media-body:after
{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 55px;

    height: 1px;

    content: '';
    -webkit-transform: scaleY(.5);
            transform: scaleY(.5);

    background-color: #c8c7cc;
}
/*2354*/
.mui-table-view.mui-unfold .mui-table-view-cell.mui-media-icon.mui-collapse .mui-media-body:after
{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 70px;

    height: 1px;

    content: '';
    -webkit-transform: scaleY(.5);
            transform: scaleY(.5);

    background-color: #c8c7cc;
}
/*2542*/
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body
{
    font-size: 15px;
    line-height: 15px;

    display: block;

    width: 100%;
    height: 15px;
    margin-top: 8px;

    text-overflow: ellipsis;

    color: #333;
}
```
## mui-ellipsis


文字多出部分添加...

---

**Mui.css （*v3.0.0*）部分源码：**
```css
/*393*/
.mui-ellipsis
{
  overflow: hidden;
  
  white-space: nowrap; /*文本不会换行，文本会在在同一行上继续*/
  text-overflow: ellipsis;
}
```

## mui-table-view-chevron

## mui-table-view-striped

## mui-table-view-condensed





