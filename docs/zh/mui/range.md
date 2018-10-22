# range（滑块）
滑块常用于区间数字选择
[source code](https://jsfiddle.net/badfl/gd2f7bma/)


**DOM结构**


max滑块最大位置
min滑块最小位置
value滑块默认当前位置

```html
<div class="mui-input-row mui-input-range">
  <label>滑块</label>
  <input type="range" max="100" min="0">
</div>
<p> 整行滑块，初始位置在80</p>
  <div class="mui-input-row mui-input-range">
  <input type="range" max="100" min="0" value="80">
</div>
```


## mui-input-range

滑块常用于区间数字选择

**DOM结构**

```html
<div class="mui-input-row mui-input-range">
  <label>Range</label>
  <input type="range" min="0" max="100">
</div>
```

---

**Mui.css （_v3.0.0_）部分源码：**

```css
<!--2909-->
.mui-input-row.mui-input-range
{
overflow: visible;

padding-right: 20px;
}

<!--3082-->

.mui-input-range
{
/*input[type="range"] {
-webkit-appearance: none;
background: #999;
height: 36px;
border-radius: 1px;
overflow: hidden;
margin-top: 2px;
margin-bottom: 2px;
outline:none;
position:relative;
width:100%;
}*/
/*input[type='range']::-webkit-slider-thumb {
-webkit-appearance: none!important;
opacity: 0.5;
height:28px;
width:28px;
border-radius: 50%;
background:#00b7fb;
position: relative;
pointer-events: none;
-webkit-box-sizing: border-box;
box-sizing: border-box;
&:before{
position: absolute;
top: 13px;
left: -2000px;
width: 2000px;
height: 2px;
background: #00b7fb;
content:' ';
}
}*/
}
.mui-input-range input[type='range']
{
position: relative;

width: 100%;
height: 2px;
margin: 17px 0;
padding: 0;

cursor: pointer;

border: 0;
border-radius: 3px;
outline: none;
background-color: #999;

-webkit-appearance: none !important;
}
.mui-input-range input[type='range']::-webkit-slider-thumb
{
width: 28px;
height: 28px;

border-color: #0062cc;
border-radius: 50%;
background-color: #007aff;
background-clip: padding-box;

-webkit-appearance: none !important;
}
.mui-input-range label ~ input[type='range']
{
width: 65%;
}
.mui-input-range .mui-tooltip
{
font-size: 36px;
line-height: 64px;

position: absolute;
z-index: 1;
top: -70px;

width: 64px;
height: 64px;

text-align: center;

opacity: .8;
color: #333;
border: 1px solid #ddd;
border-radius: 6px;
background-color: #fff;
text-shadow: 0 1px 0 #f3f3f3;
}

```

## mui-tooltip
滑块提示框
更改样式：
```css
.mui-input-range .mui-tooltip
{
  font-size: 30px;
  line-height: 50px;

  top: -50px;

  width: 50px;
  height: 50px;

  color: #007AFF;

}
```

**Mui.css （*v3.0.0*）部分源码：**
```css
<!--3152-->
.mui-input-range .mui-tooltip
{
  font-size: 36px;
  line-height: 64px;

  position: absolute;
  z-index: 1;
  top: -70px;

  width: 64px;
  height: 64px;

  text-align: center;

  opacity: .8;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fff;
  text-shadow: 0 1px 0 #f3f3f3;
}
```
