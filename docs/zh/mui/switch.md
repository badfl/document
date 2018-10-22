# 开关
[source code](https://jsfiddle.net/badfl/dd97mzkL/)

mui提供了开关控件，点击滑动两种手势都可以对开关控件进行操作

默认开关控件,带on\/off文字提示，打开时为绿色背景，基本class类为`.mui-switch`、`.mui-switch-handle`，DOM结构如下：

```html
<div class="mui-switch">
  <div class="mui-switch-handle"></div>
</div>
```

若希望开关默认为打开状态，只需要在`.mui-switch`节点上增加`.mui-active`类即可，如下：

```html
<!-- 开关打开状态，多了一个.mui-active类 -->
<div class="mui-switch mui-active">
  <div class="mui-switch-handle"></div>
</div>
```

若希望隐藏on\/off文字提示，变成简洁模式，需要在`.mui-switch`节点上增加`.mui-switch-mini`类，如下：

```html
<!-- 简洁模式开关关闭状态 -->
<div class="mui-switch mui-switch-mini">
  <div class="mui-switch-handle"></div>
  </div>
  <!-- 简洁模式开关打开状态 -->
  <div class="mui-switch mui-switch-mini mui-active">
  <div class="mui-switch-handle"></div>
</div>
```

mui默认还提供了蓝色开关控件，只需在`.mui-switch`节点上增加`.mui-switch-blue`类即可，如下：

```html
<!-- 蓝色开关关闭状态 -->
<div class="mui-switch mui-switch-blue">
  <div class="mui-switch-handle"></div>
  </div>
  <!-- 蓝色开关打开状态 -->
  <div class="mui-switch mui-switch-blue mui-active">
  <div class="mui-switch-handle"></div>
</div>
```

蓝色开关上增加`.mui-switch-mini`即可变成无文字的简洁模式

**方法**

若要获得当前开关状态，可通过判断当前开关控件是否包含`.mui-active`类来实现，若包含，则为打开状态，否则即为关闭状态；如下为代码示例：

```js
var isActive = document.getElementById("mySwitch").classList.contains("mui-active");
if (isActive) {
  console.log("打开状态");
}else{
  console.log("关闭状态");
}
```

若使用js打开、关闭开关控件，可使用switch插件的`toggle()`方法，如下为示例代码：

```js
mui("#mySwitch").switch().toggle();
```

**事件**

开关控件在打开\/关闭两种状态之间进行切换时，会触发toggle事件,通过事件的detail.isActive属性可以判断当前开关状态。可通过监听toggle事件，可以在开关切换时执行特定业务逻辑。如下为使用示例：

```js
document.getElementById("mySwitch").addEventListener("toggle",function(event){
  if (event.detail.isActive) {
    console.log("你启动了开关");
  }else{
    console.log("你关闭了开关");
  }
})
```
## mui-switch-handle
开关上的滑块



**Mui.css （*v3.0.0*）部分源码：**
```
<!--4440-->
.mui-switch .mui-switch-handle
{
position: absolute;
z-index: 1;
top: -1px;
left: -1px;

width: 28px;
height: 28px;

-webkit-transition: .2s ease-in-out;
transition: .2s ease-in-out;
-webkit-transition-property: -webkit-transform, width,left;
transition-property: transform, width,left;

border-radius: 16px;
background-color: #fff;
background-clip: padding-box;
-webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .4);
box-shadow: 0 2px 5px rgba(0, 0, 0, .4);
}
<!--4479-->
.mui-switch.mui-dragging .mui-switch-handle
{
width: 38px;
}
.mui-switch.mui-dragging.mui-active .mui-switch-handle
{
left: -11px;

width: 38px;
}
.mui-switch.mui-active
{
border-color: #4cd964;
background-color: #4cd964;
}
.mui-switch.mui-active .mui-switch-handle
{
-webkit-transform: translate(43px, 0);
transform: translate(43px, 0);
}
<!--4521-->
.mui-switch-mini.mui-active .mui-switch-handle
{
-webkit-transform: translate(16px, 0);
transform: translate(16px, 0);
}
```

## mui-switch

定义开关背景与文字（on\/off）

默认开关控件,带on\/off文字提示，打开时为绿色背景，基本class类为`.mui-switch`、`.mui-switch-handle`，DOM结构如下：

```html
<div class="mui-switch">
  <div class="mui-switch-handle"></div>
</div>
```

若希望开关默认为打开状态，只需要在`.mui-switch`节点上增加`.mui-active`类即可，如下：

```html
<!-- 开关打开状态，多了一个.mui-active类 -->
<div class="mui-switch mui-active">
  <div class="mui-switch-handle"></div>
</div>
```

重新定义背景文字与颜色：

```css
.mui-switch:before{
color: #8A6DE9;
content: '关';
}
.mui-switch.mui-active:before{
color: #FFFF00;
content: '开';
}
```


**Mui.css （_v3.0.0_）部分源码：**

```
<!--4415-->
.mui-switch
{
  position: relative;

  display: block;

  width: 74px;
  height: 30px;

  -webkit-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
  -webkit-transition-duration: .2s;
  transition-duration: .2s;
  -webkit-transition-property: background-color, border;
  transition-property: background-color, border;

  border: 2px solid #ddd;
  border-radius: 20px;
  background-color: #fff;
  background-clip: padding-box;
}
.mui-switch.mui-disabled
{
  opacity: .3;
}
<!--4461-->
.mui-switch:before
{
  font-size: 13px;

  position: absolute;
  top: 3px;
  right: 11px;

  content: 'Off';
  text-transform: uppercase;

  color: #999;
}
<!--4489-->
.mui-switch.mui-active
{
  border-color: #4cd964;
  background-color: #4cd964;
}
<!--4499-->
.mui-switch.mui-active:before
{
  right: auto;
  left: 15px;

  content: 'On';

  color: #fff;
}
```

## mui-switch-mini

隐藏开关on\/off文字提示，变成简洁模式

若希望隐藏on\/off文字提示，变成简洁模式，需要在`.mui-switch`节点上增加`.mui-switch-mini`类，如下：

```html
<!-- 简洁模式开关关闭状态 -->
<div class="mui-switch mui-switch-mini">
  <div class="mui-switch-handle"></div>
  </div>
  <!-- 简洁模式开关打开状态 -->
  <div class="mui-switch mui-switch-mini mui-active">
  <div class="mui-switch-handle"></div>
</div>
```


**Mui.css （_v3.0.0_）部分源码：**

```
<!--4513-->
.mui-switch-mini
{
  width: 47px;
}
.mui-switch-mini:before
{
  display: none;
}
.mui-switch-mini.mui-active .mui-switch-handle
{
  -webkit-transform: translate(16px, 0);
  transform: translate(16px, 0);
}

```
## mui-switch-blue

蓝色开关控件

mui默认还提供了蓝色开关控件，只需在`.mui-switch`节点上增加`.mui-switch-blue`类即可，如下：

```html
<!-- 蓝色开关关闭状态 -->
<div class="mui-switch mui-switch-blue">
  <div class="mui-switch-handle"></div>
  </div>
  <!-- 蓝色开关打开状态 -->
  <div class="mui-switch mui-switch-blue mui-active">
  <div class="mui-switch-handle"></div>
</div>
```

**Mui.css （_v3.0.0_）部分源码：**

```css
<!--4527-->
.mui-switch-blue.mui-active
{
border: 2px solid #007aff;
background-color: #007aff;
}
```
