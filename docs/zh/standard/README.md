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

### 原始值

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


