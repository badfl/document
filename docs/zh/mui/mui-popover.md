# 弹出菜单


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
mui('.bottomPopover').popover(status,[anchor]);
```
'show'
显示popover
'hide'
隐藏popover
'toggle'
自动识别处理显示隐藏状态
```
// show hide toggle
mui('.bottomPopover').popover('toggle');
// 传入toggle参数，用户也无需关心当前是显示还是隐藏状态，mui会自动识别处理；
mui('.mui-popover').popover('toggle',document.getElementById("openPopover"));

```

## mui-popover

---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*3422*/
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

/*3591*/
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

## mui-popover-action


---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*3484*/
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

## mui-popover-bottom


---


**Mui.css （*v3.0.0*）部分源码：**
```css
/*3504*/
.mui-popover.mui-popover-action.mui-popover-bottom
{
  position: fixed;
}
```

## mui-popover-arrow

弹出菜单定位箭头
```css
/*3444*/
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
/*3500*/
.mui-popover.mui-popover-action .mui-popover-arrow
{
    display: none;
}

```

## mui-bar-popover


