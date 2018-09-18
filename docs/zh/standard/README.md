---
sidebar: auto
sidebarDepth: 4
---

# JavaScript编码风格指南


## 基本的格式化

### 缩进层级
每一行的层级由**4个空格**组成，避免使用制表符（Tab）进行缩进
```js
if (true) {
    doSomething();
}
```

### 语句结尾
推荐总是使用分号
```js {2,4,7,9}
//	合法代码
var name = "Nicholas";
function sayName() {
    alert(name);
}
// 合法代码，但不推荐这样写
var name = "Nicholas"
function sayName() {
    alert(name)
}
```

### 行的长度
每行长度不应该超过80个字符，如果一行多于80个字符，应该在一个运算符（逗号，加号等）后换行、下一行应当增加二级缩进（8个字符）。
```js
// 好的写法
doSomething(argument1, argument2, argument3, argument4,
        argument5);
// 不好的写法：第二行只有四个空格的缩进
doSomething(argument1, argument2, argument3, argument4,
    argument5);
// 不好的写法：在运算符之前换行
doSomething(argument1, argument2, argument3, argument4
    , argument5);
```

### 空行
空行使代码看起来像一系列可读的段落，在下面场景中添加空行：
* 在方法之间
* 在方法的局部变量和第一条语句之间
* 在多行或单行注释之前
* 在方法内的逻辑片段之间插入空行，提高可读性

### 命名
遵照驼峰式大小写命名法。驼峰式大小写命名法是由小写字母开始，后续每个单词首字母都大写。
```js
var thisIsMyName;
var anotherVariable;
var aVeryLongVariableName;
```

#### 变量和函数
变量名应当总是遵循驼峰大小写命名法，并且变量命名前缀应当是名词，函数名前应当是动词。
这样可以将变量与函数区分开来。
```js
// 好的写法
var count = 10;
var myName = "badfl";
var found = true;

// 不好的写法：变量看起来像函数
var getCount = 10;
var isFound = true;

// 好的写法
function getName() {
    return myName;
}

//不好的写法：函数看起来像变量
function theName() {
    return myName;
}
```

一些使用动词常见的约定：
| 动词           | 含义                   |
| ------------- |:----------------------:|
| can           | 函数返回一个布尔值       |
| has           | 函数返回一个布尔值       |
| is            | 函数返回一个布尔值       |
| get           | 函数返回一个非布尔值     |
| set           | 函数用来保存一个值       |
```js
if (isEnabled()) {
    setName("badfl");
}

if (getName() === "badfl") {
    doSomething();
}
```

#### 常量
区分普通的变量和常量，常量使用大写字母和下划线来命名，下划线用以分割单词。
```js
var MAX_COUNT = 10;
var URL = "http://www.badfl.com";

```
### 运算符间距
二元运算符（&&和||）前后必须使用一个空格来保持表达式的整洁。操作符包括赋值运算符
和逻辑运算符。
```js
// 好的写法
var found = (values[i] === item);

// 好的写法
if (found && (count > 10)) {
    doSomething();
}

// 好的写法
for (i = 0; i < count; i++) {
    process(i);
}

// 不好的写法：丢失了空格
var found = (values[i]===item);

// 不好的写法：丢失了空格
if (found&&(count>10)) {
    doSomething();
}

// 不好的写法：丢失了空格
for (i=0; i<count; i++) {
    process(i);
}
```

### 括号间距


### 直接量
JavaScript中包含了一些类型的原始值：String、Number、Boolean、null、undefinded。
同样也包含对象直接量和数组直接量。这其中，只有布尔值是自解释的，其他的类型或多或少
都需要思考一下它们如何才能精确地表示出来。

#### 字符串
字符串应当始终使用双引号（避免使用单引号）且保持一行。避免在字符串中使用斜线另起一行。
```js
//好的写法
var name = "Badfl";

//不好的写法：单引号
var name = 'Badfl';

//不好的写法：字符串结束之前换行
var longString = "这是一个很长的故事，很长很长的故事 \
换行以后的文字";

```

#### 数字
数字应当使用十进制整数，科学计数法表示整数、十六进制整数或者十进制浮点小数，小数前后应该至少保留一位数字。避免使用八进制直接量。
```js
// 好的写法
var count = 10;

// 好的写法
var price = 10.0;
var price = 10.00;

// 好的写法
var num = 0xA2;

// 好的写法
var num = le23;

// 不好的写法：十进制数字以小数点结尾
var price = 10.;

// 不好的写法：十进制数字以小数点开头
var price = .1;

// 不好的写法：八进制（base 8）写法已经废弃
var num = 010;
```

#### null
特殊值null除了下列情况下应当避免使用。
* 用来初始化一个变量，这个变量可能被赋值为一个对象。
* 用来和一个已经初始化的变量比较，这个变量可以是也可以不是一个对象。
* 当函数的参数期望是对象时，被用做参数传入。
* 当函数的返回值期望是对象时，被用做返回值传出。
下面一些场景不应该使用null。
* 不要使用null来检测是否传入了某个参数。
* 不要用null来检测一个未初始化的变量。
```js
// 好的用法
var person = null;

// 好的用法
function getPerson(){
    if (condition) {
        return new Person("badfl");
    } else {
        return null;
    }
}

// 好的用法
var person = getPerson();
if (person != null) {
    doSomething();
}

// 不好的写法：用来和未初始化的变量比较
var person;
if (person != null) {
    dosomething();
}

// 不好的写法：检测是否传入了参数
function doSomething(arg1,arg2,arg3,arg4) {
    if (arg4 != null) {
        doSomethingElse();
    }
}

```

#### undefined
undefined是一个特殊值。没有被初始化的变量都有一个初始值，即undefined，表示这个
变量等待被赋值。尽量避免使用特殊值undefined。判断一个变量是否定义应当使用typeof
操作符。
```js
// 好的写法
if (typeof variable == "undefinded") {
    // do something
}

// 不好的写法：使用undefined直接量
if (variable == undefinded) {
    //do something
}
```


