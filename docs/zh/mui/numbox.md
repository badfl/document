# 数字输入框

[source code](https://jsfiddle.net/badfl/8ez9n79e/)
mui提供了数字输入框控件，可直接输入数字，也可以点击“+”、“-”按钮变换当前数值；默认numbox控件dom结构比较简单，如下：

```html
<div class="mui-numbox">
  <!-- "-"按钮，点击可减小当前数值 -->
  <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
  <input class="mui-numbox-input" type="number" />
  <!-- "+"按钮，点击可增大当前数值 -->
  <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
</div>
```

**numbox自定义参数**

**data-numbox-min**

输入框允许使用的最小值，默认无限制

**data-numbox-max**

输入框允许使用的最大值，默认无限制

**data-numbox-step**

每次点击“+”、“-”按钮变化的步长，默认步长为1

mui提供了数字输入框控件，可直接输入数字，也可以点击“+”、“-”按钮变换当前数值；
默认numbox控件dom结构比较简单，如下

示例：设置取值范围为0~100，每次变化步长为10，则代码如下

```html
<div class="mui-numbox" data-numbox-step='10' data-numbox-min='0' data-numbox-max='100'>
  <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
  <input class="mui-numbox-input" type="number" />
  <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
</div>
```

## mui-numbox

数字输入框，可重写样式改变大小等

**Mui.css （_v3.0.0_）部分源码：**

```css
<!--4741-->
.mui-numbox
{
  position: relative;

  display: inline-block;
  overflow: hidden;

  width: 120px;
  height: 35px;
  padding: 0 40px 0 40px;

  vertical-align: top;
  vertical-align: middle;

  border: solid 1px #bbb;
  border-radius: 3px;
  background-color: #efeff4;
}
.mui-numbox [class*=numbox-btn], .mui-numbox [class*=btn-numbox]
{
  font-size: 18px;
  font-weight: normal;
  line-height: 100%;

  position: absolute;
  top: 0;

  overflow: hidden;

  width: 40px;
  height: 100%;
  padding: 0;

  color: #555;
  border: none;
  border-radius: 0;
  background-color: #f9f9f9;
}
.mui-numbox [class*=numbox-btn]:active, .mui-numbox [class*=btn-numbox]:active
{
  background-color: #ccc;
}
.mui-numbox [class*=numbox-btn][disabled], .mui-numbox [class*=btn-numbox][disabled]
{
  color: #c0c0c0;
}
.mui-numbox .mui-numbox-btn-plus, .mui-numbox .mui-btn-numbox-plus
{
  right: 0;

  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.mui-numbox .mui-numbox-btn-minus, .mui-numbox .mui-btn-numbox-minus
{
  left: 0;

  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.mui-numbox .mui-numbox-input, .mui-numbox .mui-input-numbox
{
  display: inline-block;
  overflow: hidden;

  width: 100% !important;
  height: 100%;
  margin: 0;
  padding: 0 3px !important;

  text-align: center;
  text-overflow: ellipsis;
  word-break: normal;

  border: none !important;
  border-right: solid 1px #ccc !important;
  border-left: solid 1px #ccc !important;
  border-radius: 0 !important;
}

.mui-input-row .mui-numbox
{
  float: right;

  margin: 2px 8px;
}

```


## mui-numbox-btn-minus

数字减少按钮

**Mui.css （_v3.0.0_）部分源码：**

```css
.mui-numbox .mui-numbox-btn-minus, .mui-numbox .mui-btn-numbox-minus
{
    left: 0;

    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}
```

## mui-numbox-btn-plus


数字增加按钮

**Mui.css （_v3.0.0_）部分源码：**

```css
.mui-numbox .mui-numbox-btn-plus, .mui-numbox .mui-btn-numbox-plus
{
  right: 0;

  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
```

## mui-numbox-input


数字输入区域

**Mui.css （_v3.0.0_）部分源码：**

```
<!--4801-->
.mui-numbox .mui-numbox-input, .mui-numbox .mui-input-numbox
{
  display: inline-block;
  overflow: hidden;

  width: 100% !important;
  height: 100%;
  margin: 0;
  padding: 0 3px !important;

  text-align: center;
  text-overflow: ellipsis;
  word-break: normal;

  border: none !important;
  border-right: solid 1px #ccc !important;
  border-left: solid 1px #ccc !important;
  border-radius: 0 !important;
}
```


