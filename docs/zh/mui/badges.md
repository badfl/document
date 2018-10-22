# 数字角标（badges)


数字角标一般和其它控件（列表、9宫格、选项卡等）配合使用，用于进行数量提示。 角标的核心类是`.mui-badge`，默认为实心灰色背景；同时，mui还内置了蓝色（blue）、绿色\(green\)、黄色\(yellow\)、红色\(red\)、紫色\(purple\)五种色系的数字角标
[source code](https://jsfiddle.net/badfl/ynr3z2wn/)
```html
<span class="mui-badge">1</span>
<span class="mui-badge mui-badge-primary">12</span>
<span class="mui-badge mui-badge-success">123</span>
<span class="mui-badge mui-badge-warning">3</span>
<span class="mui-badge mui-badge-danger">45</span>
<span class="mui-badge mui-badge-purple">456</span>
```

若无需底色，则增加`.mui-badge-inverted`类即可，如下

```html
<span class="mui-badge mui-badge-inverted">1</span>
<span class="mui-badge mui-badge-primary mui-badge-inverted">2</span>
<span class="mui-badge mui-badge-success mui-badge-inverted">3</span>
<span class="mui-badge mui-badge-warning mui-badge-inverted">4</span>
<span class="mui-badge mui-badge-danger mui-badge-inverted">5</span>
<span class="mui-badge mui-badge-royal mui-badge-inverted">6</span>
```

## mui-badge


**Mui.css （_v3.0.0_）部分源码：**

```css
<!--1372-->
.mui-btn .mui-badge
{
  font-size: 14px;

  margin: -2px -4px -2px 4px;

  background-color: rgba(0, 0, 0, .15);
}

<!--1394-->
.mui-btn-block .mui-badge
{
  position: absolute;
  right: 0;

  margin-right: 10px;
}
<!--1761-->
.mui-badge
{
  font-size: 12px;
  line-height: 1;

  display: inline-block;

  padding: 3px 6px;

  color: #333;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, .15);
}
.mui-badge.mui-badge-inverted
{
  padding: 0 5px 0 0;

  color: #929292;
  background-color: transparent;
}
<!--1837-->
.mui-icon .mui-badge
{
  font-size: 10px;
  line-height: 1.4;

  position: absolute;
  top: -2px;
  left: 100%;

  margin-left: -10px;
  padding: 1px 5px;

  color: white;
  background: red;
}
<!--2370-->

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
```

## mui-badge-primary/mui-badge-blue
定义的颜色字体是#fff,背景#007aff



**Mui.css （*v3.0.0*）部分源码：**
```
1782
.mui-badge-primary, .mui-badge-blue
{
color: #fff;
background-color: #007aff;
}
.mui-badge-primary.mui-badge-inverted, .mui-badge-blue.mui-badge-inverted
{
color: #007aff;
background-color: transparent;
}
```

## mui-badge-success/mui-badge-green


**Mui.css （*v3.0.0*）部分源码：**
```
1793
.mui-badge-success, .mui-badge-green
{
color: #fff;
background-color: #4cd964;
}
.mui-badge-success.mui-badge-inverted, .mui-badge-green.mui-badge-inverted
{
color: #4cd964;
background-color: transparent;
}

```
## mui-badge-warning/mui-badge-yellow



**Mui.css （*v3.0.0*）部分源码：**
```css
<!--1804-->
.mui-badge-warning, .mui-badge-yellow
{
  color: #fff;
  background-color: #f0ad4e;
}
.mui-badge-warning.mui-badge-inverted, .mui-badge-yellow.mui-badge-inverted
{
  color: #f0ad4e;
  background-color: transparent;
}

```

## mui-badge-danger/mui-badge-red


**Mui.css （*v3.0.0*）部分源码：**
```css
<!--1815-->
.mui-badge-danger, .mui-badge-red
{
  color: #fff;
  background-color: #dd524d;
}
.mui-badge-danger.mui-badge-inverted, .mui-badge-red.mui-badge-inverted
{
  color: #dd524d;
  background-color: transparent;
}
```

## mui-badge-royal/mui-badge-purple


**Mui.css （*v3.0.0*）部分源码：**
```css
<!--1826-->
.mui-badge-royal, .mui-badge-purple
{
  color: #fff;
  background-color: #8a6de9;
}
.mui-badge-royal.mui-badge-inverted, .mui-badge-purple.mui-badge-inverted
{
  color: #8a6de9;
  background-color: transparent;
}

```

## mui-badge-inverted

设置数字角标背景透明

```html
<span class="mui-badge mui-badge-inverted">1</span>
<span class="mui-badge mui-badge-primary mui-badge-inverted">2</span>
<span class="mui-badge mui-badge-success mui-badge-inverted">3</span>
<span class="mui-badge mui-badge-warning mui-badge-inverted">4</span>
<span class="mui-badge mui-badge-danger mui-badge-inverted">5</span>
<span class="mui-badge mui-badge-royal mui-badge-inverted">6</span>
```



**Mui.css （_v3.0.0_）部分源码：**

```

<!--1381-->
.mui-btn .mui-badge-inverted,
.mui-btn:enabled:active .mui-badge-inverted
{
  background-color: transparent;
}

.mui-btn-primary:enabled:active .mui-badge-inverted,
.mui-btn-positive:enabled:active .mui-badge-inverted,
.mui-btn-negative:enabled:active .mui-badge-inverted
{
  color: #fff;
}
<!--1774-->
.mui-badge.mui-badge-inverted
{
  padding: 0 5px 0 0;

  color: #929292;
  background-color: transparent;
}

<!--1787-->
.mui-badge-primary.mui-badge-inverted, .mui-badge-blue.mui-badge-inverted
{
  color: #007aff;
  background-color: transparent;
}
```

