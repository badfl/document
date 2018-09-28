---
sidebar: auto
sidebarDepth: 4
---

# JavaScript编码风格指南
内容出处：
Nicholas C. Zakas 《编写可维护的JavaScript》

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
当使用括号时，紧接左括号之后和紧接有括号之前不应该有空格。
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

// 不好的写法：左括号之后有额外的空格
var found = ( values[i] === item);

// 不好的写法：右括号之前有额外的空格
if (found && (count > 10) ) {
    doSomething();
}

// 不好的写法：参数两边有额外的空格
for (i = 0; i < count; i++) {
    process( i );
}
```


### 直接量
JavaScript中包含了一些类型的原始值：`String`、`Number`、`Boolean`、`null`、`undefinded`。
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
特殊值`null`除了下列情况下应当避免使用。
* 用来初始化一个变量，这个变量可能被赋值为一个对象。
* 用来和一个已经初始化的变量比较，这个变量可以是也可以不是一个对象。
* 当函数的参数期望是对象时，被用做参数传入。
* 当函数的返回值期望是对象时，被用做返回值传出。
下面一些场景不应该使用`null`。
* 不要使用`null`来检测是否传入了某个参数。
* 不要用`null`来检测一个未初始化的变量。
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
`undefined`是一个特殊值。没有被初始化的变量都有一个初始值，即`undefined`，表示这个
变量等待被赋值。尽量避免使用特殊值`undefined`。判断一个变量是否定义应当使用`typeof`
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

#### 对象直接量
创建对象最流行的一种做法是使用对象直接量，在直接量中写出所有属性，这种方式可以取代显示地创建`Object`的实例然后添加属性的这种做法。
```js
// 好的写法
var book = {

    title: "badfltitle",
    author: "badfl"
};

// 不好的写法
var book = new Object();
book.title = "badfltitle";
book.author = "badfl";

```

对象直接量应当使用如下格式：
* 起始左花括号应当同表达式保持同一行。
* 每个属性的名值对应应当保持一个缩进，第一个属性应当在左花括号后另起一行。
* 每个属性的名值对应当使用不包含引号的属性名，其后紧跟一个冒号（之前不包含空格），
而后是值。
* 倘若属性值是函数类型，函数体应当在属性名之下另起一行，而切其前后均应保留一个空行。
* 一组相关的属性前后可以插入空行以提升代码的可读性。
* 结束的右花括号应当独占一行。
```js
// 好的写法
var object = {

    key1: value1,
    key2: value2,

    func: function() {
        // 函数操作
    },

    key3: value3
}

// 不好的写法：不恰当的缩进
var object = {
                key1: value1,
                key2: value2
            }

// 不好的写法：函数体周围缺少空行
var object = {

    key1: value1,
    key2: value2,
    func: function() {
        // 函数操作
    },
    key3: value3
}

```
当对象字面量作为函数参数时，如果值是变量，起始花括号应当同函数名在同一行。所有其余
先前规则同样适用。
```js
// 好的写法
doSomething({
    key1: value1,
    key2: value2
})

// 不好的写法：所有代码在同一行
doSomething({ key1: value1,key2: value2 })
```

#### 数组直接量
和对象直接量类似，数组直接量是JavaScript中定义数组最简洁的一种方式。不赞成显式
地使用`Array`构造函数来创建数组，比如：
```js
// 不好的写法
var colors = new Array("red", "green", "blue");
var numbers = new Array(1, 2, 3, 4, 5);
```
可以使用二个方括号将数组初始元素括起来，来替代使用Array构造函数的方式来创建数组。
```js
// 好的做法
var colors = [ "red", "green", "blue" ];
var numbers = [ 1, 2, 3, 4, 5 ];
```

### 注释
频繁地使用注释有助于他人理解你的代码。如下情况应当使用注释：
* 代码晦涩难懂。
* 可能被认为错误的代码
* 必要但并不明显的针对特定浏览器的代码。
* 对于对象、方法或者属性，生成文档是有必要的（使用恰当的文档注释）。

#### 单行注释
单行注释应当用来说明一行代码或者一组相关的代码。单行注释应保持以下风格：
* 双斜线后敲入一个空格，且缩进与层级与下一行代码保持一致。
* 注释之前总有一个空行。
* 在代码行尾部的注释。代码结束到注释之间至少有一个缩进。
单行注释可能有三种使用方式：
* 独占一行的注释，用来结束下一行代码。
* 在代码行的尾部的注释，用来解释它之前的代码。
* 多行，用来注释掉一个代码块。
```js
// 好的写法
if (condition) {

    // 如果代码执行到这里，则表明通过了所有的安全检查
    allowed();
}

// 不好的写法：注释之前没有空行
if (condition) {
    // 如果代码执行到这里，则表明通过了所有的安全检查
    allowed();
}

// 不好的写法：错误的缩进
if (condition) {

// 如果代码执行到这里，则表明通过了所有的安全检查
    allowed();
}

// 不好的写法：这里应当使用多行注释
// 接下来的代码非常复杂
// 我要详细的说明一下
if (condition) {

    // 如果代码执行到这里，则表明通过了所有的安全检查
    allowed();
}
```

对于代码行尾单行注释的情况，应确保代码结尾同注释之间至少一个缩进。
```js
// 好的写法
var result = something + somethingElse; // 一个代码行尾的注释

// 不好的写法：代码和注释之间没有足够的空格
var result = something + somethingElse;// 一个代码行尾的注释
```

注释一个代码块时连续使用单行注释是唯一可以接受的情况。多行注释不应当在这种情况下使用。
```js
// 好的写法
// if (condition) {
//     doSomething();
//     thenDoSomethingElse();
// }
```

#### 多行注释
多行注释应当在代码需要更多文字去解释的时候使用。每个多行注释都至少有如下三行。
1. 首行仅仅包括`/*`注释开始。该行不应当有其他文字。
2. 接下来的行以`*`开头并保持左对齐。这些行可以有文字描述。
3. 最后一行以`*/`开头并同先前行保持对齐。也不应当有其他文字。
多行注释的首行应当保持同它描述代码的相同层次的缩进。后续每行应当有同样层次的缩进并附加一个**空格**（为了适当保持*字符的对齐）。每一个多行代码之前应当预留一个**空行**。
```js
// 好的写法
if (condition) {

    /*
     * 如果代码执行到这里
     * 说明通过了所有的安全检测
     */
    allowed();
}

// 不好的写法：注释之前无空行
if (condition) {
    /*
     * 如果代码执行到这里
     * 说明通过了所有的安全检测
     */
    allowed();
}

// 不好的写法：星号后面没有空格
if (condition) {

    /*
     *如果代码执行到这里
     *说明通过了所有的安全检测
     */
    allowed();
}

// 不好的写法：错误的缩进
if (condition) {

/*
 * 如果代码执行到这里
 * 说明通过了所有的安全检测
 */
    allowed();
}

// 不好的写法：代码尾部注释不要使用多行注释格式
var result = something + somethingEles; /*somethingElse 不应当取值为null*/

```

## 语句和表达式

### 花括号的对齐方式

### 块状句间隔

### switch语句
#### 缩进
#### case语句的“连续执行”
#### default

### with语句

### for循环

### for-in循环

## 变量、函数和运算符

### 变量声明
所有的变量在使用前都应当事先定义，变量定义应当放在函数开头，使用一个var表达式，每行一个变量。除了首行都应当多一层缩进以使变量名能够垂直方式对齐。
变量定义时应当初始化，并且赋值操作符应当保持一致的缩进。初始化的变量应当在未初始化变量之前。
```js
// 好的写法
var count = 10,
    name  = "badfl",
    found = false,
    empty;

// 不好的写法：不恰当的初始化赋值（赋值操作符缩进不正确）
var count = 10,
    name  = "badfl",
    found= false,
    empty;
// 不好的写法：错误的缩进
var count = 10,
name  = "badfl",
found = false,
empty;

// 不好的写法：多个定义写在一行
var count = 10, name  = "badfl",
    found = false, empty;

// 不好的写法：未初始化的变量放在最前面
var empty,
    count = 10,
    name  = "badfl",
    found = false;

// 不好的写法：多个var表达式
var count = 10,
    name  = "badfl";

var found = false,
    empty;
```

### 函数声明

### 函数调用间隔

### 立即调用的函数

### 严格模式

### 相等

### eval()




