
# 按钮



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

## mui-btn


---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*1172*/
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

/*1372*/
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

/*1402*/

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

/*1619*/
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

/*1701*/
.mui-bar .mui-btn .mui-icon
{
    top: 1px;

    margin: 0;
    padding: 0;
}
/*1726*/
.mui-bar .mui-input-row .mui-btn
{
    padding: 12px 10px;
}

/*2164*/

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

/*2370*/

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

/*2869*/

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

## mui-btn-primary/mui-btn-blue



定义背景颜色、边框与字体颜色，颜色值请看下面源码，想改变颜色值可重写相应样式或重新定义样式。



---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*1236*/
input[type='submit'],
.mui-btn-primary, .mui-btn-blue
{
    color: #fff;
    border: 1px solid #007aff;
    background-color: #007aff;
}
input[type='submit']:enabled:active, input[type='submit'].mui-active:enabled,
.mui-btn-primary:enabled:active,
.mui-btn-primary.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-blue.mui-active:enabled
{
    color: #fff;
    border: 1px solid #0062cc;
    background-color: #0062cc;
}

```

## mui-btn-positive/mui-btn-success/mui-btn-green

---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*1252*/
.mui-btn-positive, .mui-btn-success, .mui-btn-green
{
    color: #fff;
    border: 1px solid #4cd964;
    background-color: #4cd964;
}
.mui-btn-positive:enabled:active, .mui-btn-positive.mui-active:enabled, .mui-btn-success:enabled:active, .mui-btn-success.mui-active:enabled, .mui-btn-green:enabled:active, .mui-btn-green.mui-active:enabled
{
    color: #fff;
    border: 1px solid #2ac845;
    background-color: #2ac845;
}
```

## mui-btn-warning/mui-btn-yellow

---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*1265*/
.mui-btn-warning, .mui-btn-yellow
{
color: #fff;
border: 1px solid #f0ad4e;
background-color: #f0ad4e;
}
.mui-btn-warning:enabled:active, .mui-btn-warning.mui-active:enabled, .mui-btn-yellow:enabled:active, .mui-btn-yellow.mui-active:enabled
{
color: #fff;
border: 1px solid #ec971f;
background-color: #ec971f;
}
```
## mui-btn-negative/mui-btn-danger/mui-btn-red

---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*1278*/
.mui-btn-negative, 
.mui-btn-danger, 
.mui-btn-red
{
color: #fff;
border: 1px solid #dd524d;
background-color: #dd524d;
}
.mui-btn-negative:enabled:active, 
.mui-btn-negative.mui-active:enabled, 
.mui-btn-danger:enabled:active, 
.mui-btn-danger.mui-active:enabled, 
.mui-btn-red:enabled:active, 
.mui-btn-red.mui-active:enabled
{
color: #fff;
border: 1px solid #cf2d28;
background-color: #cf2d28;
}

```
## mui-btn-royal/mui-btn-purple

---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*1291*/
.mui-btn-royal, .mui-btn-purple
{
color: #fff;
border: 1px solid #8a6de9;
background-color: #8a6de9;
}
.mui-btn-royal:enabled:active, .mui-btn-royal.mui-active:enabled, .mui-btn-purple:enabled:active, .mui-btn-purple.mui-active:enabled
{
color: #fff;
border: 1px solid #6641e2;
background-color: #6641e2;
}
```
## mui-btn-grey


---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*1304*/
.mui-btn-grey
{
color: #fff;
border: 1px solid #c7c7cc;
background-color: #c7c7cc;
}
.mui-btn-grey:enabled:active, .mui-btn-grey.mui-active:enabled
{
color: #fff;
border: 1px solid #acacb4;
background-color: #acacb4;
}
```

## mui-btn-outlined

希望无底色、有边框的按钮
```html
<button type="button" class="mui-btn mui-btn-primary mui-btn-outlined">蓝色</button>
```



**Mui.css （*v3.0.0*）部分源码：**

```css
/*1317*/
.mui-btn-outlined
{
background-color: transparent;
}
.mui-btn-outlined.mui-btn-primary, .mui-btn-outlined.mui-btn-blue
{
color: #007aff;
}
.mui-btn-outlined.mui-btn-positive, .mui-btn-outlined.mui-btn-success, .mui-btn-outlined.mui-btn-green
{
color: #4cd964;
}
.mui-btn-outlined.mui-btn-warning, .mui-btn-outlined.mui-btn-yellow
{
color: #f0ad4e;
}
.mui-btn-outlined.mui-btn-negative, .mui-btn-outlined.mui-btn-danger, .mui-btn-outlined.mui-btn-red
{
color: #dd524d;
}
.mui-btn-outlined.mui-btn-royal, .mui-btn-outlined.mui-btn-purple
{
color: #8a6de9;
}
.mui-btn-outlined.mui-btn-primary:enabled:active, .mui-btn-outlined.mui-btn-blue:enabled:active, .mui-btn-outlined.mui-btn-positive:enabled:active, .mui-btn-outlined.mui-btn-success:enabled:active, .mui-btn-outlined.mui-btn-green:enabled:active, .mui-btn-outlined.mui-btn-warning:enabled:active, .mui-btn-outlined.mui-btn-yellow:enabled:active, .mui-btn-outlined.mui-btn-negative:enabled:active, .mui-btn-outlined.mui-btn-danger:enabled:active, .mui-btn-outlined.mui-btn-red:enabled:active, .mui-btn-outlined.mui-btn-royal:enabled:active, .mui-btn-outlined.mui-btn-purple:enabled:active
{
color: #fff;
}
```

## mui-btn-block

区块按钮，按钮变成块级元素

---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*1361*/
.mui-btn-block
{
font-size: 18px;

display: block;

width: 100%;
margin-bottom: 10px;
padding: 15px 0;
}
/*1394*/
.mui-btn-block .mui-badge
{
position: absolute;
right: 0;

margin-right: 10px;
}
/*1656*/
.mui-bar .mui-btn-block
{
font-size: 16px;

top: 6px;

margin-bottom: 0;
padding: 5px 0;
}
/*3591*/
.mui-popover .mui-btn-block
{
margin-bottom: 5px;
}
.mui-popover .mui-btn-block:last-child
{
margin-bottom: 0;
}

```

## mui-btn-link


链接按钮

---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*1346*/
.mui-btn-link
{
padding-top: 6px;
padding-bottom: 6px;

color: #007aff;
border: 0;
background-color: transparent;
}
.mui-btn-link:enabled:active, .mui-btn-link.mui-active:enabled
{
color: #0062cc;
background-color: transparent;
}
/*1639*/
.mui-bar .mui-btn-link
{
font-size: 16px;
line-height: 44px;

top: 0;

padding: 0;

color: #007aff;
border: 0;
}
.mui-bar .mui-btn-link:active, .mui-bar .mui-btn-link.mui-active
{
color: #0062cc;
}

```

## mui-button-row

行内居中显示

---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*2891*/
.mui-button-row
{
position: relative;

padding-top: 5px;

text-align: center;
}

.mui-input-group .mui-button-row
{
height: 45px;
}
```


