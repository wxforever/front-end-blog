---
title: javascript function object|javascript
date: 2016-05-124 10:17:33
categories: basis
tags: js
---


#javascript function and object


Today I see a usage of javascript function,for example

```javascript 

	function a(arg1){
		c=a.b(arg1);
		return c;
	}

	a.b=function(arg2){

		return arg2+1
	}

	a(2)//will output 3

```

I get into doubt about this usage.why javascript can add a function which there is b to another function which there is a.
	because usually we only add a function to object or add a function to another function's prototype.for example

```javascript

	var a={}
	a.b=function(arg){

	}



	function a(){

	}

	a.prototype.b=function(){

	}

```


with this doubt,I hava read some material,then this blog get me out of it.


[理解JavaScript函数（函数和对象的区别和联系）](http://www.cnblogs.com/jikey/archive/2010/04/28/1722971.html)


it says that function is a object constructor,all object constructors in javascript are objects,but not all objects are object constructors.
	so we can use javascript funcition act like object.for example

```javascript
	
	function a(){
		console.log(a.b)
	}

	a.b=1

	a()//console will log 1

//and also we can put function into a array,because it act like object

var a=[function(arg){console.log(arg)}]

a[0](1)//console will log 1



```