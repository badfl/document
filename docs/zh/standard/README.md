---
sidebar: auto
sidebarDepth: 4
---

# JavaScript编码风格指南
**内容出处：**

* Nicholas C. Zakas 《编写可维护的JavaScript》

* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

* [crockford](http://www.crockford.com/)

* [JSLint](http://www.jslint.com/help.html)

## 源文件基础

### 命名
文件名必须全部小写，并且可以包含下划线（`_`）或短划线（`-`），但不包含其他标点符号。

## 基本的格式化

### 留白
在逻辑相关的代码块之间添加空行可以提高代码的可读性。

两行空行仅限在如下情况中使用：
* 在不同的源代码文件之间。
* 在类和接口定义之间。

单行空行仅限在如下情况中使用：
* 方法之间。
* 方法中局部变量和第一行语句之间。
* 多行或者单行注释之前。
* 方法中逻辑代码块之间以提升代码的可读性。

空格应当在如下情况中使用：
* 关键词后跟括号的情况应当使用空格隔开。
* 参数列表中逗号后应当保留一个空格。
* 所有的除了点（`.`）之外的二元运算符，其操作数都应当用空格隔开。单目运算符的操作
数之间不应该用空格隔开，如一元减号、递增（`++`）、递减（`--`）。
* `for`语句中的表达式之间应当用空格隔开。

### 缩进层级
每一行的层级由**4个空格**组成，避免使用制表符（Tab）进行缩进。使用空格缩进在所有
的系统和编辑器中，文件的展现格式不会有任何差异。
```js
// 好的写法：使用四个空格缩进
if (true) {
    doSomething();
}
```

### 语句结尾
推荐总是使用分号。
```js
// 合法代码
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
每行长度不应该超过**80个字符**，如果一行多于80个字符，应该在一个运算符（逗号，加
号等）后换行，下一行应当增加二级缩进（8个字符）。
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


### 命名
变量和函数在命名时应当小心。命名仅限于数字字母字符，某些情况下也可以使用下划线。
最好不要在任何命名中使用美元（`$`）或者反斜杠（`\`）。
遵照驼峰式大小写命名法。**驼峰式大小写命名法**是由小写字母开始，后续每个单词首字
母都大写。
```js
// 好的写法：使用驼峰式命名法
var thisIsMyName;
var anotherVariable;
var aVeryLongVariableName;
```

#### 变量和函数
变量名应当总是遵循驼峰大小写命名法，并且变量命名前缀应当是**名词**，函数名前应当是**动词**。
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

// 不好的写法：函数看起来像变量
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
// 好的命名
if (isEnabled()) {
    setName("badfl");
}

if (getName() === "badfl") {
    doSomething();
}
```
构造函数：通过`new`运算符穿件新对象的函数。应当以驼峰格式命名并且首字符大写。构造函数名称应当以非动词开头，因为`new`代表着创建一个对象实例的操作。
```js
// 好的写法
function MyObject() {
    // 代码
}

// 不好的写法：小写字母开头
function myObject() {
    // 代码
}

// 不好的写法：使用下划线
function My_Object() {
    // 代码
}

// 不好的写法：动词开头
function getMyObject() {
    // 代码
}
```
#### 常量
区分普通的变量和常量，常量使用**大写字母**和**下划线**（`_`）来命名，下划线（`_`）用以分割单词。
```js
// 好的写法
var MAX_COUNT = 10;
var TOTAL_COUNT = 10;
var URL = "http://www.badfl.com";

// 不好的写法：驼峰形式
var totalCount = 10;

// 不好的写法：混合形式
var total_COUNT = 10;
```
### 运算符间距
二元运算符（`&&`和`||`）前后必须使用一个空格来保持表达式的整洁。操作符包括赋值运算符和逻辑运算符。
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
当使用括号时，紧接左括号之后和紧接右括号之前不应该有空格。
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
JavaScript中包含了一些类型的原始值：`String`、`Number`、`Boolean`、`null`、`undefined`。
同样也包含对象直接量和数组直接量。这其中，只有布尔值是自解释的，其他的类型或多或少
都需要思考一下它们如何才能精确地表示出来。

#### 字符串
字符串应当始终使用**双引号**（避免使用单引号）且保持一行。避免在字符串中使用斜线另起一行。
```js
// 好的写法
var name = "Badfl";

// 不好的写法：单引号
var name = 'Badfl';

// 不好的写法：字符串结束之前换行
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
function doSomething(arg1, arg2, arg3, arg4) {
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
if (typeof variable == "undefined") {
    // do something
}

// 不好的写法：使用undefined直接量
if (variable == undefined) {
    // do something
}
```

#### 对象直接量
创建对象最流行的一种做法是使用对象直接量，在直接量中写出所有属性，这种方式可以取
代显示地创建`Object`的实例然后添加属性的这种做法。
```js
// 好的写法
var book = {

    title: "badfl title",
    author: "badfl"
};

// 不好的写法
var book = new Object();
book.title = "badfl title";
book.author = "badfl";

```

对象直接量应当使用如下格式：
* 起始左花括号应当同表达式保持同一行。
* 每个属性的名值对应应当保持一个缩进，第一个属性应当在左花括号后另起一行。
* 每个属性的名值对应当使用不包含引号的属性名，其后紧跟一个冒号（之前不包含空格），
而后是值。
* 倘若属性值是函数类型，函数体应当在属性名之下另起一行，而且其前后均应保留一个空行。
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
可以使用二个方括号将数组初始元素括起来，来替代使用`Array`构造函数的方式来创建数组。
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
* 双斜线后敲入一个**空格**，且缩进与层级与下一行代码保持一致。
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
多行注释的首行应当保持同它描述代码的相同层次的缩进。后续每行应当有同样层次的缩进
并附加一个**空格**（为了适当保持`*`字符的对齐）。每一个多行代码之前应当预留一个**空行**。
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

### 简单语句
每一行最多只包含一条语句。所有简单的语句都应该以分号（`;`）结束。
```js
// 好的写法
count++;
a = b;

// 不好的写法：多个表达式写在一行
count++; a = b;
```

### 返回语句
返回语句当返回一个值的时候不应当使用圆括号包裹，除非在某些情况下这么做可以让返回值更容易理解。
```js
// 好的写法
return;
return collection.size();
return (size > 0 ? size : defaultSize);
```

### 复合语句
复合语句是大括号括起来的语句列表。复合语句应该保持以下风格：
* 括起来的语句应当较复合语句多缩进一个层级。
* 开始的大括号应当在复合语句所在行的末尾；结束的大括号应当独占一行且同复合语句的开始保持同样的缩进。
* 当语句是控制结构的一部分时，诸如`if`或者`for`语句，所有语句都需要用大括号括起来，也包括单个语句。这个约定使得我们更方便地添加语句而不用担心忘记加括号而引起bug。
* 像`if`一样的语句开始的关键词，其后应该紧跟一个**空格**，起始大括号应当在空格之后。

#### if 语句
`if`语句应当是下面的格式
```js
// if语句格式
if (condition) {
    statements
}

if (condition) {
    statements
} else {
    statements
}

if (condition) {
    statements
} else if {
    statements
} else {
    statements
}
```
绝不允许在`if`语句中省略花括号。
```js
// 好的写法
if (condition) {
    doSomething();
}

// 不好的写法：不恰当的空格
if(condition){
    doSomething();
}

// 不好的写法：遗漏花括号
if (condition)
    doSomething();

// 不好的写法：所有代码写在一行
if (condition) { doSomething(); }

// 不好的写法：所有代码写在一行且没有花括号
if (condition) doSomething();
```

#### for 语句
`for`类型的语句应当是下面的格式。
```js
// for语句格式
for (initialization; condition; update) {
    statements
}

for (variable in object) {
    statements
}
```
`for`语句的初始化部分不应当有变量声明。
```js
// 好的写法
var i,
    len;

for (i=0, len=10; i < len; i++) {
    // 代码
}

// 不好的写法：初始化时候声明变量
for (var i=0, len=10; i < len; i++) {
    // 代码
}

// 不好的写法：初始化时候声明变量
for (var prop in object) {
    // 代码
}
```
`for-in`循环是用来对实例对象和原型链中的键（`key`）做遍历的，而不是用来遍历包含数字索引的数组。
```js
// 好的写法
var prop;

for (prop in object) {
    console.log("Property name is "+ prop);
    console.log("Property value is " + object[prop]);
}

// 不好的用法
var values = [ 1, 2, 3, 4, 5, 6, 7],
    i;

for (i in values) {
    process(items[i]);
}
```
当使用`for-in`语句时，使用`hasOwnProperty()`进行双重检查来过滤出对象的成员。
```js
// 好的写法
var prop;

for (prop in object) {
    if (object.hasOwnProperty(prop)) {
        console.log("Property name is "+ prop);
        console.log("Property value is " + object[prop]);
    }
}

// 好的写法：包含原型链遍历应当补充注释
var prop;

for (prop in object) { // 包含原型链的遍历
    console.log("Property name is "+ prop);
    console.log("Property value is " + object[prop]);
}
```

#### while 语句
`while`类的语句应当是下面的格式。
```js
while (condition) {
    statements
}
```

#### do 语句
`do`类的语句应当是下面的格式。
```js
do {
    statements
} while (condition);
```

#### switch 语句
`switch`类的语句应当是如下格式。
```js
switch (expression) {
    case expression:
        statements

    default:
        statements
}
```
`switch`下的每个`case`都应该保持一个缩进。除第一个之外包括`default`在内每一个
`case`都应当在之前保持一个空行。
每一组语句（除了`default`）都应当以`break`、`return`、`throw`结尾，或者用一行
注释表示跳过。
```js
// 好的写法
switch (value) {
    case 1:
        /* 跳过 */

    case 2:
        doSomething();
        break;

    case 3:
        return true;

    default:
        throw new Error("This shouldn't happen.");
}
```
如果一个`switch`语句不包含default情况，应当用一行注释代替。
```js
// 好的写法
switch (value) {
    case 1:
        /* 跳过 */

    case 2:
        doSomething();
        break;

    case 3:
        return true;

    // 没有default
}
```

#### try 语句
`try`类的语句应当格式如下。
```js
try {
    statements
} catch (variable) {
    statements
}

try {
    statements
} catch (variable) {
    statements
} finally {
    statements
}
```


## 变量、函数和运算符

### 变量声明
所有的变量在使用前都应当事先定义，变量定义应当放在函数开头，使用一个`var`表达式，
每行一个变量。除了首行都应当多一层缩进以使变量名能够垂直方式对齐。
变量定义时应当初始化，并且赋值操作符应当保持一致的缩进。**初始化的变量应当在未初
始化变量之前**。
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
函数应当在使用前提前定义。一个不是作为方法的函数（也就是说没有作为一个对象的属性）
应当使用函数定义的格式（不是函数表达式和`Function`构造器格式）。
* 函数名和开始圆括号之间不应当有空格。
* 结束的圆括号和右边的花括号之间应该保留一个空格
* 右侧的花括号应当同`function`关键字保持同一行。
* 开始和结束圆括号之间不应该有空格。
* 参数名之间应当在逗号后保留一个空格。
* 函数体应当保持一级缩进。

```js
// 好的写法
function doSomething(arg1, arg2) {
    return arg1 + arg2;
}

// 不好的写法：第一行不恰当的空格
function doSomething (arg1, arg2){
    return arg1 + arg2;
}

// 不好的写法：函数表达式
var doSomething = function(arg1, arg2) {
    return arg1 + arg2;
};

// 不好的写法：左侧的花括号位置不对
function doSomething(arg1, arg2)
{
    return arg1 + arg2;
}

// 错误的写法：使用了Function构造器
var doSomething = new Function("arg1", "arg2", "return arg1 + arg2");
```
其他函数内部定义的函数应当在`var`语句后立即定义。
```js
// 好的写法
function outer() {

    var count = 10,
        name  = "badfl",
        found = false,
        empty;

    function inner() {
        // 代码
    }

    // 调用 inner() 的代码
}

// 不好的写法：inner函数的定义先于变量
function outer() {

    function inner() {
        // 代码
    }

    var count = 10,
        name  = "badfl",
        found = false,
        empty;

    // 调用 inner() 的代码
}
```

匿名函数可能作为方法赋值给对象，或者作为其他函数的参数。`function`关键字同开始括
号之间不应有空格。
```js
// 好的写法
object.method = function() {
    // 代码
}

// 不好写法：不正确的空格
object.method = function () {
    // 代码
}
```

函数声明不应当出现在语句块之内。比如，这段代码就不会按照我们的意图来执行（在不同的
浏览器运行效果不相同，不管`condition`的计算结果如何，大多数浏览器会执行第二个声明）。
```js
// 不好的写法
if (condition) {
    function doSomething() {
      alert("Hi!");
    }

    doSomething();
} else {
    function doSomething() {
      alert("Yo!");
    }

    doSomething();
}
```

#### 函数调用间隔
函数调用时，在函数名和左括号之间没有空格。这样做是为了将它与块语句区分开来
```js
// 好的写法
doSomething(item);

// 不好的写法：看起来像一个块语句
doSomething (item);

// 用来做比对的块语句
while (item) {
    // 代码逻辑
}
```

#### 立即调用的函数
立即被调用的函数应当在函数调用的外层使用圆括号包裹。
```js
// 好的写法
var value = (function() {

    // 函数体

    return {
        message: "badfl"
    }
}());

// 不好的写法：函数调用外层没有用圆括号包裹
var value = function() {

    // 函数体

    return {
        message: "badfl"
    }
}();

// 不好的写法：圆括号位置不当
var value = (function() {

    // 函数体

    return {
        message: "badfl"
    }
})();

```

### 赋值
当变量赋值时，如果右侧是含有比较语句的表达式，需要用圆括号包裹。
```js
// 好的写法
var flag = (1 < count);

// 不好的写法：遗漏圆括号
var flag = 1 < count;
```

### 相等
使用`===`（严格相等）和`!==`（严格不相等）代替`==`（相等）和`!=`（不等）来避免弱类型转换错误。
```js
// 好的写法
var same = (a === b);

// 不好的写法：使用==
var same = (a == b);
```

### 三元操作符
三元操作符应当仅仅用在条件赋值语句中，而不要作为`if`语句的替代品。
```js
// 好的写法
var value = condition ? value1 : value2;

// 不好的写法：没有赋值，应当使用if表达式
condition ? doSomething() : doSomethingElse();
```
### eval()
避免使用`eval()`,涉及到回调中解析JSON的情形可以使用。








