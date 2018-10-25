# 导航栏（nav）
不透明导航
[source code](https://jsfiddle.net/badfl/be34m38h/)
透明导航
[source code](https://jsfiddle.net/badfl/sj60d4v2/)

**不透明导航栏**
```html
<header class="mui-bar mui-bar-nav">
<h1 class="mui-title">
不透明导航栏
</h1>
<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
</header>
```

**透明导航栏**
```html
<header class="mui-bar mui-bar-transparent">
<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
<h1 class="mui-title">导航栏</h1>
</header>
```

## mui-bar

手机app上部导航栏
设置导航栏背景颜色
```
.mui-bar {
background-color: #ff6669;
}
```

## mui-bar-nav
导航栏下面阴影，控制导航顶部对齐

## mui-title

手机APP上部导航栏标题
设置上部导航栏标题颜色与字体大小
```
.mui-title {
font-size: 20px;
color: #ffffff;
}
```

## mui-action-back

## mui-bar-transparent

透明导航栏,元素背景颜色必须为RGBA

透明导航
[source code](https://jsfiddle.net/badfl/sj60d4v2/)

**透明导航栏**
```html
<header class="mui-bar mui-bar-transparent">
<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
<h1 class="mui-title">导航栏</h1>
</header>
```
```css
<!--V3.4-->
<!--1537-->
.mui-bar-transparent
{
top: 0;

background-color: rgba(247, 247, 247, 0);
-webkit-box-shadow: none;
box-shadow: none;
}
```


