---
title: javascript各种继承实践|javascript
date: 2016-05-20 16:17:33
categories: 前端基础
author:ng
tags: js
---
#javascript各种继承实践

javacript的继承特性是在前端开发中比较比较重要且基础的内容
	有着非常广泛的运用，下面对各种继承的方法进行实践和总结


>第一种 对象冒充


简单的说就是这写构造函数设置局部变量的时候，`var a=1`改为`this.a=1`
	这样另外一个函数就可以继承它了，冒充了它的this，示列如下



```javascript

   function a(param){
 this.value=param
 this.getparam=function(){
   console.log(this.value)
}
}

function b(param){
  this.inherit=a
  this.inherit(param)
  this.getparam()
}

new b("hello")  //output "hello"
//这里面b函数继承了a函数的value和getparam函数
```



>第二种 call

```javascript
	
	function a(){
		console.log(this.name)
	}

	function b(param){

		this.name=param
	}

	B=new b("test");
	a.call(B);//output test

  //这里a函数调用了B的上下文，利用了B对象的name属性,相当于B对象继承了a方法，call

```

>第三种 apply


```javascript
	
	//apply和call的很相似，下面只介绍他们的区别
  //  a.call(obj,arg1,arg2,arg3)//可以多个参数
  //  a.apply(obj,[])//第二个参数必须是数组  apply会将一个数组转换为一个参数接一个参数的传递给方法,举例如下

  function a(arg1,arg2,arg3){

  	 console.log(arg1)
   	 console.log(arg2)
     console.log(arg3)

}

 a.apply({},[1,2,3])//output 1
 					//output 2
 					//output 3
//说明数组和形式参数绑定了

```

>第四种 prototype



```javascript
	
	//原型继承是最常用的继承方式 prototype需要是一个对象，而不是函数或者普通值

	function a(){

	}

	a.prototype.name='test'//这里的prototype会在实例化后生成一个空对象，具有浏览器定义的对象的默认方法
	a.prototype.getName=function(){
		return this.name
	}

	function b(){

	}
	b.prototype=new a()//原型指向实例化的对象
	
	//b.getName() 不能这样使用
	B=new b()
	B.getName();//output "test"
	//只有实例化的对象才能使用原型中的方法

```


本文极大的参考了这篇文章[Javascript的四种继承方式](http://blog.csdn.net/unicode/article/details/5075606)