---
sidebar: auto
sidebarDepth: 2
---

# JavaScript编码风格指南

## 基本的格式化

### 缩进层级
每一行的层级由4个空格组成，避免使用制表符（Tab）进行缩进
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
