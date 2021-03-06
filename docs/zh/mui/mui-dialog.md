# 消息框

[source code](https://jsfiddle.net/badfl/phot15cz/)

**此dialog api支持mui v2.7+**

创建并显示对话框，弹出的对话框为非阻塞模式，用户点击对话框上的按钮后关闭\( h5模式的对话框也可通过closepopup关闭 \)，并通过callback函数返回用户点击按钮的索引值或输入框中的值。

mui会根据ua判断,弹出原生对话框还是h5绘制的对话框,在基座中默认会弹出原生对话框,可以配置type属性,使得弹出h5模式对话框

#### 两者区别:

1.原生对话框可以跨webview,
2.h5对话框样式统一而且可以修改对话框属性或样式

mui v3.0 版本\(含\)以上的dialog控件支持换行（\n）显示

#### 警告消息框

**.alert\( message, title, btnValue, callback, \[type\] \)**

> message
> Type: String
> 提示对话框上显示的内容
>
> title
> Type: String
> 提示对话框上显示的标题
>
> btnValue
> Type: String
> 提示对话框上按钮显示的内容
>
> callback
> Type: Function
> 提示对话框上关闭后的回调函数
>
> type
> Value: 'div'
> 是否使用h5绘制的对话框

#### 确认消息框

**.confirm\( message, title, btnValue, callback ,type)**

> message
> Type: String
> 提示对话框上显示的内容
>
> title
> Type: String
> 提示对话框上显示的标题
>
> btnValue
> Type: Array
> 提示对话框上按钮显示的内容
>
> callback
> Type: Function
> 提示对话框上关闭后的回调函数
>
> type
> Value: 'div'
> 是否使用h5绘制的对话框

**.prompt\( message, placeholder, title, btnValue, callback, type)**

> message
> Type: String
> 提示对话框上显示的内容
>
> placeholder
> Type: String
> 编辑框显示的提示文字
>
> title
> Type: String
> 提示对话框上显示的标题
>
> btnValue
> Type: Array
> 提示对话框上按钮显示的内容
>
> callback
> Type: Function
> 提示对话框上关闭后的回调函数
>
> type
> Value: 'div'
> 是否使用h5绘制的对话框

如果有定制对话框样式的需求\(只能修改h5模式对话框\)可以在mui.css中修改.mui-popup类下的样式

如果需要修改DOM结构可以按照以下方式处理.

\/\/修改弹出框默认input类型为password
```js
mui.prompt('text','deftext','title',['true','false'],null,'div')
document.querySelector('.mui-popup-input input').type='password'
```

**.toast\( message \)**

> toast
> Type: String

自动消失提示框

**.closePopup\(\)\(只能关闭h5模式的对话框\)**

> 关闭最后一次弹出的对话框

**.closePopups\(\)\(只能关闭h5模式的对话框\)**

> 关闭所有对话框
