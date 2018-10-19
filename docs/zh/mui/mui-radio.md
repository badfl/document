# 单选框

radio用于单选的情况

## mui-radio

**DOM结构**

```html
<div class="mui-input-row mui-radio">
  <label>radio</label>
  <input name="radio1" type="radio">
</div>
```

默认radio在右侧显示，若希望在左侧显示，只需增加.mui-left类即可，如下：

```html
<div class="mui-input-row mui-radio mui-left">
  <label>radio</label>
  <input name="radio1" type="radio">
</div>
```

若要禁用radio，只需在radio上增加disabled属性即可；

mui基于列表控件，提供了列表式单选实现；在列表根节点上增加.mui-table-view-radio
类即可，若要默认选中某项，只需要在对应li节点上增加.mui-selected类即可，dom结构如下：

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

列表式单选在切换选中项时会触发`selected`事件，在事件参数（`e.detail.el`）中可以
获得当前选中的dom节点，如下代码打印当前选中项的innerHTML：

```js
var list = document.querySelector('.mui-table-view.mui-table-view-radio');
list.addEventListener('selected',function(e){
  console.log("当前选中的为："+e.detail.el.innerText);
});
```

## mui-left
使单选框与复选框在label左侧显示


**Mui.css （*v3.0.0*）部分源码：**
```
<!--2090-->
.mui-table-view-cell.mui-radio.mui-left, .mui-table-view-cell.mui-checkbox.mui-left
{
padding-left: 58px;
}
<!--2979-->
.mui-radio.mui-left input[type='radio'], .mui-checkbox.mui-left input[type='checkbox']
{
left: 20px;
}

.mui-radio.mui-left label, .mui-checkbox.mui-left label
{
padding-right: 15px;
padding-left: 58px;
}

<!--4552-->
.mui-content.mui-sliding.mui-left
{
z-index: 1;

-webkit-transform: translate3d(-100%, 0, 0);
transform: translate3d(-100%, 0, 0);
}
```
## mui-slider-loop

[source code](https://jsfiddle.net/badfl/49up0q4y/)
在mui-slider-group节点增加mui-slder-loop样式，实现循环轮播，在子节点第一项与最后增加带mui-slider-item-duplicate与轮播第一项与最后一项相同的mui-slider-item节点

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

## mui-disabled
将单选框/复选框文字变成灰色 不可选中状态


 **Mui.css （*v3.0.0*）部分源码：**
```css
<!--1223-->
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
<!--3031-->
.mui-radio.mui-disabled label, .mui-radio label.mui-disabled, .mui-checkbox.mui-disabled label, .mui-checkbox label.mui-disabled
{
opacity: .4;
}
<!--4125-->
.mui-pagination > li.mui-disabled > span,
.mui-pagination > li.mui-disabled > span:active,
.mui-pagination > li.mui-disabled > a,
.mui-pagination > li.mui-disabled > a:active
{
opacity: .6;
color: #777;
border: 1px solid #ddd;
background-color: #fff;
}
<!--4205-->
.mui-pager .mui-disabled > a,
.mui-pager .mui-disabled > a:active,
.mui-pager .mui-disabled > span,
.mui-pager .mui-disabled > span:active
{
opacity: .6;
color: #777;
border: 1px solid #ddd;
background-color: #fff;
}
<!--4436-->
.mui-switch.mui-disabled
{
opacity: .3;
}

```
