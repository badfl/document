# 栅格（grid）
MUI 提供了非常简单实用的12列响应式栅格系统。使用时只需在外围容器上添加.mui-row，在列上添加 .mui-col-[sm|xs]-[1-12]，即可
[source code](https://jsfiddle.net/badfl/dnpL4pt5/)
实例:
左侧:通过定义.mui-col-sm-6类在大屏(≥400px)设备上会展现为并排的两列,而.mui-col-xs-12在小屏(＜400px)设备上会覆盖之前定义的类展现为水平排列


```html
<div class="mui-content">
<div class="mui-row">
<div class="mui-col-sm-6 mui-col-xs-12">
<li class="mui-table-view-cell">
<a class="mui-navigate-right">
Item 1
</a>
</li>
</div>
<div class="mui-col-sm-6 mui-col-xs-12">
<li class="mui-table-view-cell">
<a class="mui-navigate-right">
Item 1
</a>
</li>
</div>
</div>
</div>
```

实例:多余的列将会另起一行排列
如果在一个.mui-row内包含的列（column）大于12个,包含多余列（column）的元素将作为一个整体单元被另起一行排列。

如果不足12个列将不会撑满整个.mui-row容器



```html
<div class="mui-content">
<div class="mui-row">
<div class="mui-col-sm-8">
<li class="mui-table-view-cell">
<a class="mui-navigate-right">
Item 1
</a>
</li>
</div>
<div class="mui-col-sm-6">
<li class="mui-table-view-cell">
<a class="mui-navigate-right">
Item 1
</a>
</li>
</div>
</div>
</div>
```


实例:通过为列设置padding 属性，从而创建列与列之间的间隔
两列之间白色区域为左侧列的padding



```html
<div class="mui-content">
<div class="mui-row">
<div class="mui-col-sm-6" style="padding-right: 20px;">
<li class="mui-table-view-cell">
<a class="mui-navigate-right">
Item 1
</a>
</li>
</div>
<div class="mui-col-sm-6">
<li class="mui-table-view-cell">
<a class="mui-navigate-right">
Item 1
</a>
</li>
</div>
</div>
</div>
```



九宫格实例：


```html
<ul class="mui-table-view mui-grid-view mui-grid-9">
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
<a href="#">
<span class="mui-icon mui-icon-home"></span>
<div class="mui-media-body">Home</div>
</a>
</li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
<div class="mui-media-body">Email</div></a></li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
<span class="mui-icon mui-icon-chatbubble"></span>
<div class="mui-media-body">Chat</div></a></li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
<span class="mui-icon mui-icon-location"></span>
<div class="mui-media-body">location</div></a></li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
<span class="mui-icon mui-icon-search"></span>
<div class="mui-media-body">Search</div></a></li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
<span class="mui-icon mui-icon-phone"></span>
<div class="mui-media-body">Phone</div></a></li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
<span class="mui-icon mui-icon-gear"></span>
<div class="mui-media-body">Setting</div></a></li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
<span class="mui-icon mui-icon-info"></span>
<div class="mui-media-body">about</div></a></li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
<span class="mui-icon mui-icon-more"></span>
<div class="mui-media-body">more</div></a></li>
</ul>
```
## mui-row
栅格行

## mui-grid-view

```css
<!--2503-->
.mui-table-view.mui-grid-view
{
font-size: 0;

display: block;

width: 100%;
padding: 0 10px 10px 0;

white-space: normal;
}

```

## mui-grid-9

定义九宫格背景、上面边框与左面边框

```
2562
.mui-grid-view.mui-grid-9
{
margin: 0;
padding: 0;

border-top: 1px solid #eee;
border-left: 1px solid #eee;
background-color: #f2f2f2;
}
```

## mui-col-sm-1
屏幕小于400px时候百分比8.33333333%宽度
```css
<!--588-->
.mui-col-xs-1, .mui-col-sm-1, .mui-col-xs-2, .mui-col-sm-2, .mui-col-xs-3, .mui-col-sm-3, .mui-col-xs-4, .mui-col-sm-4, .mui-col-xs-5, .mui-col-sm-5, .mui-col-xs-6, .mui-col-sm-6, .mui-col-xs-7, .mui-col-sm-7, .mui-col-xs-8, .mui-col-sm-8, .mui-col-xs-9, .mui-col-sm-9, .mui-col-xs-10, .mui-col-sm-10, .mui-col-xs-11, .mui-col-sm-11, .mui-col-xs-12, .mui-col-sm-12
{
position: relative;

min-height: 1px;
}
<!--660-->
@media (min-width: 400px)
{
.mui-col-sm-12
{
width: 100%;
}
.mui-col-sm-11
{
width: 91.66666667%;
}
.mui-col-sm-10
{
width: 83.33333333%;
}
.mui-col-sm-9
{
width: 75%;
}
.mui-col-sm-8
{
width: 66.66666667%;
}
.mui-col-sm-7
{
width: 58.33333333%;
}
.mui-col-sm-6
{
width: 50%;
}
.mui-col-sm-5
{
width: 41.66666667%;
}
.mui-col-sm-4
{
width: 33.33333333%;
}
.mui-col-sm-3
{
width: 25%;
}
.mui-col-sm-2
{
width: 16.66666667%;
}
.mui-col-sm-1
{
width: 8.33333333%;
}
}
```

## mui-col-sm-2
屏幕小于400px时候百分比16.66666667%宽度

## mui-col-sm-3
屏幕小于400px时候百分比25%宽度

## mui-col-sm-4
屏幕小于400px时候百分比33.33333333%宽度

## mui-col-sm-5
屏幕小于400px时候百分比41.66666667%宽度

## mui-col-sm-6
屏幕小于400px时候百分比width: 50%宽度

## mui-col-sm-7
屏幕小于400px时候百分比58.33333333%宽度

## mui-col-sm-8
屏幕小于400px时候百分比66.66666667%宽度

## mui-col-sm-9
屏幕小于400px时候百分比75%宽度

## mui-col-sm-10
屏幕小于400px时候百分比83.33333333%宽度

## mui-col-sm-11
屏幕小于400px时候百分比91.66666667%宽度

## mui-col-sm-12
屏幕小于400px时候百分比100%宽度

## mui-col-xs-1
默认百分比8.33333333%宽度

## mui-col-xs-2
默认百分比16.66666667%宽度

## mui-col-xs-3
默认百分比25%宽度

## mui-col-xs-4
默认百分比33.33333333%宽度

## mui-col-xs-5
默认百分比41.66666667%宽度

## mui-col-xs-6
默认百分比50%宽度

## mui-col-xs-7
默认百分比58.33333333%宽度

## mui-col-xs-8
默认百分比66.66666667%宽度

## mui-col-xs-9
默认百分比75%宽度

## mui-col-xs-10
默认百分比83.33333333%宽度

## mui-col-xs-11
默认百分比91.66666667%宽度

## mui-col-xs-12
默认宽度百分比100%宽度





