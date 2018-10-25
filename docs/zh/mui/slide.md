# 轮播组件（slide）

轮播组件是mui提供的一个核心组件，在该核心组件基础上，衍生出了图片轮播、可拖动式
图文表格、可拖动式选项卡、左右滑动9宫格等组件，这些组件有较多共同点。首先，Dom构
造基本相同，如下：

```html
<div class="mui-slider">
  <div class="mui-slider-group">
  <!--第一个内容区容器-->
  <div class="mui-slider-item">
  <!-- 具体内容 -->
  </div>
  <!--第二个内容区-->
  <div class="mui-slider-item">
  <!-- 具体内容 -->
  </div>
  </div>
</div>
```
[source code](https://jsfiddle.net/badfl/49up0q4y/)


当拖动切换显示内容时，会触发slide事件，通过该事件的detail.slideNumber参数可以
获得当前显示项的索引（第一项索引为0，第二项为1，以此类推），利用该事件，可在显示
内容切换时，动态处理一些业务逻辑。

如下为一个可拖动式选项卡示例，为提高页面加载速度，页面加载时，仅显示第一个选项卡
的内容，第二、第三选项卡内容为空。

当切换到第二、第三个选项卡时，再动态获取相应内容进行显示：

```js
var item2Show = false,item3Show = false;//子选项卡是否显示标志
document.querySelector('.mui-slider').addEventListener('slide', function(event) {
  if (event.detail.slideNumber === 1&&!item2Show) {
    //切换到第二个选项卡
    //根据具体业务，动态获得第二个选项卡内容；
    var content = ....
    //显示内容
    document.getElementById("item2").innerHTML = content;
    //改变标志位，下次直接显示
    item2Show = true;
    } else if (event.detail.slideNumber === 2&&!item3Show) {
    //切换到第三个选项卡
    //根据具体业务，动态获得第三个选项卡内容；
    var content = ....
    //显示内容
    document.getElementById("item3").innerHTML = content;
    //改变标志位，下次直接显示
    item3Show = true;
  }
});
```

图片轮播、可拖动式图文表格等均可按照同样方式监听内容变化，比如我们可以在图片轮播
界面显示当前正在看的是第几张图片：

```js
document.querySelector('.mui-slider').addEventListener('slide', function(event) {
  //注意slideNumber是从0开始的；
  document.getElementById("info").innerText = "你正在看第"+(event.detail.slideNumber+1)+"张图片";
});
```

## mui-slider

轮播图节点，所有轮播图相关放到子项里面
[source code](https://jsfiddle.net/badfl/49up0q4y/)


**Mui.css （*v3.0.0*）部分源码：**
```css
<!--2456-->
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

<!--4261-->

.mui-slider
{
  position: relative;
  z-index: 1;

  overflow: hidden;

  width: 100%;
}
```

## mui-slider-group

轮播图组
[source code](https://jsfiddle.net/badfl/49up0q4y/)

**Mui.css （_v3.0.0_）部分源码：**

```css
<!--804-->
.mui-plus-pullrefresh .mui-fullscreen .mui-scroll-wrapper .mui-scroll-wrapper, .mui-plus-pullrefresh .mui-fullscreen .mui-slider-group .mui-scroll-wrapper
{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;

  width: 100%;
}
.mui-plus-pullrefresh .mui-fullscreen .mui-scroll-wrapper .mui-scroll, .mui-plus-pullrefresh .mui-fullscreen .mui-slider-group .mui-scroll
{
  position: absolute;

  width: 100%;
}
.mui-plus-pullrefresh .mui-scroll-wrapper, .mui-plus-pullrefresh .mui-slider-group
{
  position: static;
  top: auto;
  bottom: auto;
  left: auto;

  overflow: auto;

  width: auto;
}
.mui-plus-pullrefresh .mui-slider-group
{
  overflow: visible;
}

<!--4274-->

.mui-slider .mui-segmented-control.mui-segmented-control-inverted ~ .mui-slider-group .mui-slider-item
{
  border-top: 1px solid #c8c7cc;
  border-bottom: 1px solid #c8c7cc;
}
.mui-slider .mui-slider-group
{
  font-size: 0;

  position: relative;

  -webkit-transition: all 0s linear;
  transition: all 0s linear;
  white-space: nowrap;
}
.mui-slider .mui-slider-group .mui-slider-item
{
  font-size: 14px;

  position: relative;

  display: inline-block;

  width: 100%;
  height: 100%;

  vertical-align: top;
  white-space: normal;
}
.mui-slider .mui-slider-group .mui-slider-item > a:not(.mui-control-item)
{
  line-height: 0;

  position: relative;

  display: block;
}
.mui-slider .mui-slider-group .mui-slider-item img
{
  width: 100%;
}
.mui-slider .mui-slider-group .mui-slider-item .mui-table-view:before, .mui-slider .mui-slider-group .mui-slider-item .mui-table-view:after
{
  height: 0;
}
.mui-slider .mui-slider-group.mui-slider-loop
{
  -webkit-transform: translate(-100%, 0px);
  transform: translate(-100%, 0px);
}

<!--5303-->
.mui-fullscreen.mui-slider .mui-slider-group
{
  height: 100%;
}
.mui-fullscreen .mui-segmented-control ~ .mui-slider-group
{
  position: absolute;
  top: 40px;
  bottom: 0;

  width: 100%;
  height: auto;
}
<!--5336-->
.mui-bar-tab ~ .mui-content .mui-slider.mui-fullscreen .mui-segmented-control ~ .mui-slider-group
{
  bottom: 50px;
}
```

## mui-slider-item

轮播图子项
[source code](https://jsfiddle.net/badfl/49up0q4y/)

**Mui.css （_v3.0.0_）部分源码：**

```css
<!--4289-->
.mui-slider .mui-slider-group .mui-slider-item
{
  font-size: 14px;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  vertical-align: top;
  white-space: normal;
}
.mui-slider .mui-slider-group .mui-slider-item > a:not(.mui-control-item)
{
  line-height: 0;
  position: relative;
  display: block;
}
.mui-slider .mui-slider-group .mui-slider-item img
{
  width: 100%;
}
.mui-slider .mui-slider-group .mui-slider-item .mui-table-view:before, .mui-slider .mui-slider-group .mui-slider-item .mui-table-view:after
{
  height: 0;
}

```

## mui-slider-loop

[source code](https://jsfiddle.net/badfl/49up0q4y/)
在mui-slider-group节点增加mui-slder-loop样式，实现循环轮播，在子节点第一项与
最后增加带mui-slider-item-duplicate与轮播第一项与最后一项相同的mui-slider-item节点

```html
<p>
循环轮播
</p>
<div id="" class="mui-slider">
  <div class="mui-slider-group mui-slider-loop">
    <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
    <div class="mui-slider-item mui-slider-item-duplicate">
      <div style="background:#ffff00;height:200px;line-height:200px;text-align:center;">
      轮播内容4
      </div>
    </div>
    <!--第一个内容区容器-->
    <div class="mui-slider-item">
      <div style="background:#ff00ff;height:200px;line-height:200px;text-align:center;">
      轮播内容1
      </div>
    </div>
    <!--第二个内容区容器-->
    <div class="mui-slider-item">
      <div style="background:#ffff00;height:200px;line-height:200px;text-align:center;">
      轮播内容2
      </div>
    </div>
    <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
    <div class="mui-slider-item mui-slider-item-duplicate">
      <div style="background:#ff00ff;height:200px;line-height:200px;text-align:center;">
      轮播内容1
      </div>
    </div>
  </div>
</div>
```

## mui-slider-item-duplicate

[source code](https://jsfiddle.net/badfl/49up0q4y/)

在mui-slider-group节点增加mui-slder-loop样式，实现循环轮播，在子节点第一项与
最后增加带mui-slider-item-duplicate与轮播第一项与最后一项相同的mui-slider-item节点

```html
<p>
循环轮播
</p>
<div id="" class="mui-slider">
<div class="mui-slider-group mui-slider-loop">
<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
<div class="mui-slider-item mui-slider-item-duplicate">
<div style="background:#ffff00;height:200px;line-height:200px;text-align:center;">
轮播内容4
</div>
</div>
<!--第一个内容区容器-->
<div class="mui-slider-item">
<div style="background:#ff00ff;height:200px;line-height:200px;text-align:center;">
轮播内容1
</div>
</div>
<!--第二个内容区容器-->
<div class="mui-slider-item">
<div style="background:#ffff00;height:200px;line-height:200px;text-align:center;">
轮播内容2
</div>
</div>
<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
<div class="mui-slider-item mui-slider-item-duplicate">
<div style="background:#ff00ff;height:200px;line-height:200px;text-align:center;">
轮播内容1
</div>
</div>
</div>

</div>
```

## mui-scroll-wrapper

```css
<!--722-->
.mui-scroll-wrapper
{
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;

  width: 100%;
}
```

## mui-slider-indicator

轮播图焦点组

```
<!--4344-->
.mui-slider-indicator
{
  position: absolute;
  bottom: 8px;

  width: 100%;

  text-align: center;

  background: none;
}
.mui-slider-indicator.mui-segmented-control
{
  position: relative;
  bottom: auto;
}
```
## mui-indicator

轮播图焦点子项

## mui-segmented-control
```css
1748
.mui-bar .mui-segmented-control
{
top: 7px;

width: auto;
margin: 0 auto;
}

.mui-bar.mui-bar-header-secondary .mui-segmented-control
{
top: 0;
}
3248
.mui-segmented-control
{
font-size: 15px;
font-weight: 400;

position: relative;

display: table;
overflow: hidden;

width: 100%;

table-layout: fixed;

border: 1px solid #007aff;
border-radius: 3px;
background-color: transparent;

-webkit-touch-callout: none;
}
.mui-segmented-control.mui-segmented-control-vertical
{
border-collapse: collapse;

border-width: 0;
border-radius: 0;
}
3282
.mui-segmented-control.mui-scroll-wrapper
{
height: 38px;
}
4355
.mui-slider-indicator.mui-segmented-control
{
position: relative;
bottom: auto;
}
```

## mui-segmented-control-inverted
文字模式
```
<!--3330-->
.mui-segmented-control.mui-segmented-control-inverted
{
  width: 100%;

  border: 0;
  border-radius: 0;
}
```

## mui-slider-title
增加轮播图标题
[source code](https://jsfiddle.net/badfl/49up0q4y/)

```html
<p>
加下标题循环轮播
</p>
<div id="" class="mui-slider">
  <div class="mui-slider-group mui-slider-loop">
    <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
    <div class="mui-slider-item mui-slider-item-duplicate">
    <div style="background:#ffff00;height:200px;line-height:200px;text-align:center;">
    轮播内容4
    </div>
    <p class="mui-slider-title">标题2</p>
    </div>
    <!--第一个内容区容器-->
    <div class="mui-slider-item">
    <div style="background:#ff00ff;height:200px;line-height:200px;text-align:center;">
    轮播内容1
    </div>
    <p class="mui-slider-title">badfl.com</p>
    </div>
    <!--第二个内容区容器-->
    <div class="mui-slider-item">
    <div style="background:#ffff00;height:200px;line-height:200px;text-align:center;">
    轮播内容2
    </div>
    <p class="mui-slider-title">标题2</p>
    </div>
    <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
    <div class="mui-slider-item mui-slider-item-duplicate">
    <div style="background:#ff00ff;height:200px;line-height:200px;text-align:center;">
    轮播内容1
    </div>
    <p class="mui-slider-title">badfl.com</p>
    </div>
    </div>
    <div class="mui-slider-indicator">
    <div class="mui-indicator mui-active"></div>
    <div class="mui-indicator"></div>
  </div>
</div>
```











