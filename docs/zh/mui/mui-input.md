# 输入框

**基本说明:**所有包裹在`.mui-input-row` 类中的 input、textarea等元素都将被默认设置宽度属性为`width: 100%;` 。 将 label 元素和上述控件控件包裹在`.mui-input-group`中可以获得最好的排列。

```html
<form class="mui-input-group">
    <div class="mui-input-row">
        <label>用户名</label>
    <input type="text" class="mui-input-clear" placeholder="请输入用户名">
    </div>
    <div class="mui-input-row">
        <label>密码</label>
        <input type="password" class="mui-input-password" placeholder="请输入密码">
    </div>
    <div class="mui-button-row">
        <button type="button" class="mui-btn mui-btn-primary" >确认</button>
        <button type="button" class="mui-btn mui-btn-danger" >取消</button>
    </div>
</form>
```

**输入增强:**mui目前提供的输入增强包括：**快速删除**、**语音输入\*5+ only**和**密码框显示隐藏密码。**

* 快速删除：只需要在input控件上添加`.mui-input-clear`类，当input 控件中有内容时，右侧会有一个删除图标，点击会清空当前input的内容；
```html
<form class="mui-input-group">
    <div class="mui-input-row">
        <label>快速删除</label>
        <input type="text" class="mui-input-clear" placeholder="请输入内容">
    </div>
</form>
```


搜索框：在`.mui-input-row`同级添加`.mui-input-search` 类，就可以使用search控件

```html
<div class="mui-input-row mui-search">
    <input type="search" class="mui-input-clear" placeholder="">
</div>
```

* 语音输入**\*5+ only**：为了方便快速输入，mui集成了 HTML5+的语音输入，只需要在对应input控件上添加`.mui-input-speech` 类，就可以在5+环境下使用语音输入



* 密码框：给input元素添加`.mui-input-password`类即可使用
```html
<form class="mui-input-group">
  <div class="mui-input-row">
    <label>密码框</label>
    <input type="password" class="mui-input-password" placeholder="请输入密码">
  </div>
</form>
```


**初始化：**mui在mui.init\(\)中会自动初始化基本控件,但是 **动态添加的元素需要重新进行初始化**

打开chrome控制台运行下面这段代码,赋予☝️此密码框生命力😀

```js
mui('.mui-input-row input').input();
```

#### 示例:

验证表单是否为空

```html
<div class="mui-input-group">
    <div class="mui-input-row">
        <label>用户名：</label>
        <input type="text" class="mui-input-clear" placeholder="请输入用户名">
    </div>
    <div class="mui-input-row">
        <label>密码：</label>
        <input type="password" class="mui-input-clear mui-input-password" placeholder="请输入密码">
    </div>
</div>
```

提交时校验三个字段均不能为空，若为空则提醒并终止业务逻辑运行，使用`each()`方法循环校验，如下：

```html
mui("#input_example input").each(function() {
//若当前input为空，则alert提醒 
if(!this.value || this.value.trim() == "") {
    var label = this.previousElementSibling;
    mui.alert(label.innerText + "不允许为空");
    check = false;
    return false;
}
}); //校验通过，继续执行业务逻辑 
if(check){
    mui.alert('验证通过!')
}
```

* 注：始终为button按钮添加`type`属性，若button按钮没有type属性，浏览器默认按照`type="submit"`逻辑处理， 这样若将没有type的button放在form表单中，点击按钮就会执行form表单提交，页面就会刷新，用户体验极差。


## mui-search

默认搜索框
例子：

```js
<div class="mui-input-row mui-search">
  <input type="search" placeholder="请输入搜索内容" class="mui-input-clear"/>
</div>
```

---

### Mui.css （_v3.0.0_）部分源码：

```css
/*2957*/
.mui-input-row.mui-search .mui-icon-clear
{
    top: 7px;
}
.mui-input-row.mui-search .mui-icon-speech
{
    top: 5px;
}
/*3174*/
.mui-search
{
    position: relative;
}
.mui-search input[type='search']
{
    padding-left: 30px;
}
.mui-search .mui-placeholder
{
    font-size: 16px;
    line-height: 34px;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: inline-block;
    height: 34px;
    text-align: center;
    color: #999;
    border: 0;
    border-radius: 6px;
    background: none;
}
.mui-search .mui-placeholder .mui-icon
{
    font-size: 20px;
    color: #333;
}
.mui-search:before
{
    font-family: Muiicons;
    font-size: 20px;
    font-weight: normal;
    position: absolute;
    top: 50%;
    right: 50%;
    display: none;
    margin-top: -18px;
    margin-right: 31px;
    content: '\e466';
}
.mui-search.mui-active:before
{
    font-size: 20px;
    right: auto;
    left: 5px;
    display: block;
    margin-right: 0;
}
.mui-search.mui-active input[type='search']
{
    text-align: left;
}
.mui-search.mui-active .mui-placeholder
{
    display: none;
}
```

## mui-input-clear
当input控件中有内容时，右侧会有一个删除图标，点击会清空当前input的内容

例子：
```html
<div class="mui-input-row mui-search">
  <input type="search" placeholder="请输入搜索内容" class="mui-input-clear"/>
</div>
```

## mui-input-speech
控件右侧显示一个语音输入的图标，点击会启用科大讯飞语音输入界面
例子：
```html
<div class="mui-input-row mui-search">
  <input type="search" placeholder="请输入内容" class="mui-input-speech mui-input-clear" />
</div>
```

## mui-password

## mui-input-password

输入框后面有个按钮可以显示隐藏密码

密码框：给input元素添加`.mui-input-password`类即可使用

例子：

```html
<div class="mui-input-row mui-password">
  <input type="password" class="mui-input-password" />
</div>

```

---

**Mui.css （_v3.0.0_）部分源码：**
```css
/*2919*/
.mui-input-row .mui-input-clear ~ .mui-icon-clear, .mui-input-row .mui-input-speech ~ .mui-icon-speech, .mui-input-row .mui-input-password ~ .mui-icon-eye
{
    font-size: 20px;
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 0;
    width: 38px;
    height: 38px;
    text-align: center;
    color: #999;
}
.mui-input-row .mui-input-clear ~ .mui-icon-clear.mui-active, .mui-input-row .mui-input-speech ~ .mui-icon-speech.mui-active, .mui-input-row .mui-input-password ~ .mui-icon-eye.mui-active
{
    color: #007aff;
}
```

## mui-input-group

## mui-input-row











