---
sidebar: auto
---

## 列表/折叠面板

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


### mui-table-view

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

### mui-table-view-cell

mui-table-view子项，在li节点上添加.mui-table-view-cell类
```html
<ul class="mui-table-view">
	<li class="mui-table-view-cell">Item 1</li>
	<li class="mui-table-view-cell">Item 2</li>
	<li class="mui-table-view-cell">Item 3</li>
</ul>
```

### mui-collapse-content
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
2427
.mui-table-view-cell.mui-collapse.mui-active .mui-table-view, .mui-table-view-cell.mui-collapse.mui-active .mui-collapse-content
{
display: block;
}
2440
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
2456
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



###mui-navigate-right
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
1956
.mui-table-view-icon .mui-table-view-cell .mui-navigate-right .mui-icon
{
font-size: 20px;

margin-top: -1px;
margin-right: 5px;
margin-left: -5px;
}
1986
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
2144
.mui-table-view-cell > .mui-slider-handle.mui-navigate-right:after, .mui-table-view-cell > .mui-slider-handle .mui-navigate-right:after
{
right: 0;
}
2384
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

2419行
.mui-table-view-cell.mui-collapse > .mui-navigate-right:after, .mui-table-view-cell.mui-collapse > .mui-push-right:after
{
content: '\e581';
}
2431行
.mui-table-view-cell.mui-collapse.mui-active > .mui-navigate-right:after, .mui-table-view-cell.mui-collapse.mui-active > .mui-push-right:after
{
content: '\e580';
}
4567行
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

### mui-collapse
```css
2346
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
2411

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

### mui-media
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
//2271行
.mui-table-view .mui-media,
.mui-table-view .mui-media-body
{
    overflow: hidden;
}
//2608行
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

### mui-media-object
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
2277
.mui-table-view .mui-media-large .mui-media-object
{
    line-height: 80px;

    max-width: 80px;
    height: 80px;
}
2288
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
2528
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object
{
    width: 100%;
    max-width: 100%;
    height: auto;
}
```
### mui-media-body

图文列表标题

---
**Mui.css （*v3.0.0*）部分源码：**
```css
2271
.mui-table-view .mui-media,
.mui-table-view .mui-media-body
{
    overflow: hidden;
}
2326
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
2354
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
2542
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
### mui-ellipsis


文字多出部分添加...

---

**Mui.css （*v3.0.0*）部分源码：**
```css
393
.mui-ellipsis
{
  overflow: hidden;
  
  white-space: nowrap; /*文本不会换行，文本会在在同一行上继续*/
  text-overflow: ellipsis;
}
```

### mui-table-view-chevron

### mui-table-view-striped

### mui-table-view-condensed


##弹出菜单

[source code](https://jsfiddle.net/badfl/xfjLc33y/)

mui框架内置了弹出菜单插件，弹出菜单显示内容不限，但必须包裹在一个含.mui-popover类的div中，如下即为一个弹出菜单内容：

```html
<div id="popover" class="mui-popover">
<ul class="mui-table-view">
    <li class="mui-table-view-cell"><a href="#">Item1</a></li>
    <li class="mui-table-view-cell"><a href="#">Item2</a></li>
    <li class="mui-table-view-cell"><a href="#">Item3</a></li>
    <li class="mui-table-view-cell"><a href="#">Item4</a></li>
    <li class="mui-table-view-cell"><a href="#">Item5</a></li>
  </ul>
</div>
```

要显示、隐藏如上菜单，mui推荐使用锚点方式，例如：

```html
<a href="#popover" id="openPopover" class="mui-btn mui-btn-primary mui-btn-block">打开弹出菜单</a>

```

点击如上定义的按钮，即可显示弹出菜单，再次点击弹出菜单之外的其他区域，均可关闭弹出菜单；这种使用方式最为简洁。

若希望通过js的方式控制弹出菜单，则通过如下一个方法即可：

```js
mui('.bottomPopover').popover(status,[anchor]);
```

```js
mui('.bottomPopover').popover(status,[anchor]);```
```
'show'
显示popover
'hide'
隐藏popover
'toggle'
自动识别处理显示隐藏状态
```js
`mui('.bottomPopover').popover('toggle');//show hide toggle`
`[anchor]
anchorElement ` `锚点元素` `
`
//传入toggle参数，用户也无需关心当前是显示还是隐藏状态，mui会自动识别处理；
`mui('.mui-popover').popover('toggle',document.getElementById("openPopover"));`

```

### mui-popover

---


**Mui.css （*v3.0.0*）部分源码：**
```css
3422
.mui-popover
{
    position: absolute;
    z-index: 999;

    display: none;

    width: 280px;

    -webkit-transition: opacity .3s;
            transition: opacity .3s;
    -webkit-transition-property: opacity;
            transition-property: opacity;
    -webkit-transform: none;
            transform: none;

    opacity: 0;
    border-radius: 7px;
    background-color: #f7f7f7;
    -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, .1);
            box-shadow: 0 0 15px rgba(0, 0, 0, .1);
}
.mui-popover .mui-popover-arrow
{
    position: absolute;
    z-index: 1000;
    top: -25px;
    left: 0;

    overflow: hidden;

    width: 26px;
    height: 26px;
}
.mui-popover .mui-popover-arrow:after
{
    position: absolute;
    top: 19px;
    left: 0;

    width: 26px;
    height: 26px;

    content: ' ';
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);

    border-radius: 3px;
    background: #f7f7f7;
}
.mui-popover .mui-popover-arrow.mui-bottom
{
    top: 100%;
    left: -26px;

    margin-top: -1px;
}
.mui-popover .mui-popover-arrow.mui-bottom:after
{
    top: -19px;
    left: 0;
}
.mui-popover.mui-popover-action
{
    bottom: 0;

    width: 100%;

    -webkit-transition: -webkit-transform .3s, opacity .3s;
            transition:         transform .3s, opacity .3s;
    -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);

    border-radius: 0;
    background: none;
    -webkit-box-shadow: none;
            box-shadow: none;
}
.mui-popover.mui-popover-action .mui-popover-arrow
{
    display: none;
}
.mui-popover.mui-popover-action.mui-popover-bottom
{
    position: fixed;
}
.mui-popover.mui-popover-action.mui-active
{
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}
.mui-popover.mui-popover-action .mui-table-view
{
    margin: 8px;

    text-align: center;

    color: #007aff;
    border-radius: 4px;
}
.mui-popover.mui-popover-action .mui-table-view .mui-table-view-cell:after
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
.mui-popover.mui-popover-action .mui-table-view small
{
    font-weight: 400;
    line-height: 1.3;

    display: block;
}
.mui-popover.mui-active
{
    display: block;

    opacity: 1;
}
.mui-popover .mui-bar ~ .mui-table-view
{
    padding-top: 44px;
}

3591
.mui-popover .mui-btn-block
{
    margin-bottom: 5px;
}
.mui-popover .mui-btn-block:last-child
{
    margin-bottom: 0;
}

.mui-popover .mui-bar
{
    -webkit-box-shadow: none;
            box-shadow: none;
}

.mui-popover .mui-bar-nav
{
    border-bottom: 1px solid rgba(0, 0, 0, .15);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    -webkit-box-shadow: none;
            box-shadow: none;
}

.mui-popover .mui-scroll-wrapper
{
    margin: 7px 0;

    border-radius: 7px;
    background-clip: padding-box;
}

.mui-popover .mui-scroll .mui-table-view
{
    max-height: none;
}

.mui-popover .mui-table-view
{
    overflow: auto;

    max-height: 300px;
    margin-bottom: 0;

    border-radius: 7px;
    background-color: #f7f7f7;
    background-image: none;

    -webkit-overflow-scrolling: touch;
}
.mui-popover .mui-table-view:before, .mui-popover .mui-table-view:after
{
    height: 0;
}
.mui-popover .mui-table-view .mui-table-view-cell:first-child,
.mui-popover .mui-table-view .mui-table-view-cell:first-child > a:not(.mui-btn)
{
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
.mui-popover .mui-table-view .mui-table-view-cell:last-child,
.mui-popover .mui-table-view .mui-table-view-cell:last-child > a:not(.mui-btn)
{
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
}

.mui-popover.mui-bar-popover .mui-table-view
{
    width: 106px;
}
.mui-popover.mui-bar-popover .mui-table-view .mui-table-view-cell
{
    padding: 11px 15px 11px 15px;

    background-position: 0 100%;
}
.mui-popover.mui-bar-popover .mui-table-view .mui-table-view-cell > a:not(.mui-btn)
{
    margin: -11px -15px -11px -15px;
}
```

### mui-popover-action


---


**Mui.css （*v3.0.0*）部分源码：**
```css
3484
.mui-popover.mui-popover-action
{
    bottom: 0;

    width: 100%;

    -webkit-transition: -webkit-transform .3s, opacity .3s;
            transition:         transform .3s, opacity .3s;
    -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);

    border-radius: 0;
    background: none;
    -webkit-box-shadow: none;
            box-shadow: none;
}
.mui-popover.mui-popover-action .mui-popover-arrow
{
    display: none;
}
.mui-popover.mui-popover-action.mui-popover-bottom
{
    position: fixed;
}
.mui-popover.mui-popover-action.mui-active
{
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}
.mui-popover.mui-popover-action .mui-table-view
{
    margin: 8px;

    text-align: center;

    color: #007aff;
    border-radius: 4px;
}
.mui-popover.mui-popover-action .mui-table-view .mui-table-view-cell:after
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
.mui-popover.mui-popover-action .mui-table-view small
{
    font-weight: 400;
    line-height: 1.3;

    display: block;
}
```

### mui-popover-bottom


---


**Mui.css （*v3.0.0*）部分源码：**
```css
3504
.mui-popover.mui-popover-action.mui-popover-bottom
{
  position: fixed;
}
```

### mui-popover-arrow
弹出菜单定位箭头
```css
3444
.mui-popover .mui-popover-arrow
{
    position: absolute;
    z-index: 1000;
    top: -25px;
    left: 0;

    overflow: hidden;

    width: 26px;
    height: 26px;
}
.mui-popover .mui-popover-arrow:after
{
    position: absolute;
    top: 19px;
    left: 0;

    width: 26px;
    height: 26px;

    content: ' ';
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);

    border-radius: 3px;
    background: #f7f7f7;
}
.mui-popover .mui-popover-arrow.mui-bottom
{
    top: 100%;
    left: -26px;

    margin-top: -1px;
}
.mui-popover .mui-popover-arrow.mui-bottom:after
{
    top: -19px;
    left: 0;
}
3500
.mui-popover.mui-popover-action .mui-popover-arrow
{
    display: none;
}

```

### mui-bar-popover


### 按钮



mui默认按钮为灰色，另外还提供了蓝色（blue）、绿色\(green\)、黄色\(yellow\)、红色\(red\)、紫色\(purple\)五种色系的按钮，五种色系对应五种场景，分别为primary、success、warning、danger、royal；使用.mui-btn类即可生成一个默认按钮，继续添加.mui-btn-颜色值或.mui-btn-场景可生成对应色系的按钮，例如：通过.mui-btn-blue或.mui-btn-primary均可生成蓝色按钮；

普通按钮

在button节点上增加.mui-btn类，即可生成默认按钮；若需要其他颜色的按钮，则继续增加对应class即可，比如.mui-btn-blue即可变成蓝色按钮

```html
<button type="button" class="mui-btn">默认</button>
<button type="button" class="mui-btn mui-btn-primary">蓝色</button>
<button type="button" class="mui-btn mui-btn-success">绿色</button>
<button type="button" class="mui-btn mui-btn-warning">黄色</button>
<button type="button" class="mui-btn mui-btn-danger">红色</button>
<button type="button" class="mui-btn mui-btn-royal">紫色</button>
```
[source code](https://jsfiddle.net/badfl/wxr4x0dm/)


若希望无底色、有边框的按钮，仅需增加.mui-btn-outlined类即可，代码如下：

```html
<button type="button" class="mui-btn mui-btn-outlined">默认</button>
<button type="button" class="mui-btn mui-btn-primary mui-btn-outlined">蓝色</button>
<button type="button" class="mui-btn mui-btn-success mui-btn-outlined">绿色</button>
<button type="button" class="mui-btn mui-btn-warning mui-btn-outlined">黄色</button>
<button type="button" class="mui-btn mui-btn-danger mui-btn-outlined">红色</button>
<button type="button" class="mui-btn mui-btn-royal mui-btn-outlined">紫色</button>
```
[source code](https://jsfiddle.net/badfl/enc8t49v/)

### mui-btn


---


**Mui.css （*v3.0.0*）部分源码：**
```css
1172
input[type='button'],
input[type='submit'],
input[type='reset'],
button,
.mui-btn
{
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;

    position: relative;

    display: inline-block;

    margin-bottom: 0;
    padding: 6px 12px;

    cursor: pointer;
    -webkit-transition: all;
            transition: all;
    -webkit-transition-timing-function: linear;
            transition-timing-function: linear;
    -webkit-transition-duration: .2s;
            transition-duration: .2s;
    text-align: center;
    vertical-align: top;
    white-space: nowrap;

    color: #333;
    border: 1px solid #ccc;
    border-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #fff;
    background-clip: padding-box;
}
input[type='button']:enabled:active, input[type='button'].mui-active:enabled,
input[type='submit']:enabled:active,
input[type='submit'].mui-active:enabled,
input[type='reset']:enabled:active,
input[type='reset'].mui-active:enabled,
button:enabled:active,
button.mui-active:enabled,
.mui-btn:enabled:active,
.mui-btn.mui-active:enabled
{
    color: #fff;
    background-color: #929292;
}
input[type='button']:disabled, input[type='button'].mui-disabled,
input[type='submit']:disabled,
input[type='submit'].mui-disabled,
input[type='reset']:disabled,
input[type='reset'].mui-disabled,
button:disabled,
button.mui-disabled,
.mui-btn:disabled,
.mui-btn.mui-disabled
{
    opacity: .6;
}

1372
.mui-btn .mui-badge
{
    font-size: 14px;

    margin: -2px -4px -2px 4px;

    background-color: rgba(0, 0, 0, .15);
}

.mui-btn .mui-badge-inverted,
.mui-btn:enabled:active .mui-badge-inverted
{
    background-color: transparent;
}

1402

.mui-btn .mui-icon
{
    font-size: inherit;
}

.mui-btn.mui-icon
{
    font-size: 14px;
    line-height: 1.42;
}

.mui-btn.mui-fab
{
    width: 56px;
    height: 56px;
    padding: 16px;

    border-radius: 50%;
    outline: none;
}
.mui-btn.mui-fab.mui-btn-mini
{
    width: 40px;
    height: 40px;
    padding: 8px;
}
.mui-btn.mui-fab .mui-icon
{
    font-size: 24px;
    line-height: 24px;

    width: 24px;
    height: 24px;
}

1619
.mui-bar .mui-btn
{
    font-weight: 400;

    position: relative;
    z-index: 20;
    top: 7px;

    margin-top: 0;
    padding: 6px 12px 7px;
}
.mui-bar .mui-btn.mui-pull-right
{
    margin-left: 10px;
}
.mui-bar .mui-btn.mui-pull-left
{
    margin-right: 10px;
}

1701
.mui-bar .mui-btn .mui-icon
{
    top: 1px;

    margin: 0;
    padding: 0;
}
1726
.mui-bar .mui-input-row .mui-btn
{
    padding: 12px 10px;
}

2164

.mui-table-view-cell > .mui-slider-left > .mui-btn, .mui-table-view-cell > .mui-slider-right > .mui-btn
{
    position: relative;
    left: 0;

    display: -webkit-box;
    display: -webkit-flex;
    display:         flex;

    padding: 0 30px;

    color: #fff;
    border: 0;
    border-radius: 0;

    -webkit-box-align: center;
    -webkit-align-items: center;
            align-items: center;
}
.mui-table-view-cell > .mui-slider-left > .mui-btn:after, .mui-table-view-cell > .mui-slider-right > .mui-btn:after
{
    position: absolute;
    z-index: -1;
    top: 0;

    width: 600%;
    height: 100%;

    content: '';

    background: inherit;
}
.mui-table-view-cell > .mui-slider-left > .mui-btn.mui-icon, .mui-table-view-cell > .mui-slider-right > .mui-btn.mui-icon
{
    font-size: 30px;
}
.mui-table-view-cell > .mui-slider-right
{
    right: 0;

    -webkit-transition: -webkit-transform 0ms ease;
            transition:         transform 0ms ease;
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
}
.mui-table-view-cell > .mui-slider-left
{
    left: 0;

    -webkit-transition: -webkit-transform 0ms ease;
            transition:         transform 0ms ease;
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
}
.mui-table-view-cell > .mui-slider-left > .mui-btn:after
{
    right: 100%;

    margin-right: -1px;
}

2370

.mui-table-view-cell > .mui-btn,
.mui-table-view-cell > .mui-badge,
.mui-table-view-cell > .mui-switch,
.mui-table-view-cell > a > .mui-btn,
.mui-table-view-cell > a > .mui-badge,
.mui-table-view-cell > a > .mui-switch
{
    position: absolute;
    top: 50%;
    right: 15px;

    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
}
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

2869

.mui-input-row .mui-btn
{
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
    line-height: 1.1;

    float: right;

    width: 15%;
    padding: 10px 15px;
}

.mui-input-row .mui-btn ~ input, .mui-input-row .mui-btn ~ select, .mui-input-row .mui-btn ~ textarea
{
    float: left;

    width: 85%;
    margin-bottom: 0;
    padding-left: 0;

    border: 0;
}
```



