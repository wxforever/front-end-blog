---
title: css布局实践|javascript
date: 2016-05-27 16:17:33
categories: 前端基础
tags: css
---

#css布局实践

最近做的很多项目，主要涉及到js游戏逻辑和以及后端交互，css布局用的较少，所以趁着写博客的时间
	实践一下常用布局。因为之前已经写过一篇移动端flex布局的实践，所以下面的内容都不会用flex布局。
	虽然flex确实很好用，但是也不应该忘了基础，毕竟flex是新出来的布局方式，适用性方面，还不能普遍
	兼容


>原生导航的实现

下面用原生css实现了一个横向的导航栏,使用了表格布局属性,display:table等
	使用表格布局的好处是可以做到单元格自适应,单元格等宽

```html
<ul>
		<li><a href="">元素1</a></li>
		<li><a href="">元素2</a></li>
		<li><a href="">元素3</a></li>
		<li><a href="">元素4</a></li>
		<li><a href="">元素5</a></li>
	</ul>


```

```css

	*{
		margin: 0;
		padding: 0;
	}
	html{
		font-size: 20px;
	}
	a{

		text-decoration: none;
	}
	ul{
		display: table;
		width: 90%;/*给两边分别留5%的空隙*/
		margin: 1rem auto;

		border-collapse: collapse; 
		/* 如果我们需要设置单元格的间隙，可以删除上面一句，添加border-spacing属性 */
	
		text-align: center;
	}
	ul>li{
	 list-style-type: none;
	 display: table-cell;
	
	
	background-color: green;
	border: 1px solid red;

	white-space: nowrap;/* 文字不换行 */
	}

```

![](uploads/csslayout/1.png)


>各种自适应布局


#####左边定宽，右边自适应的布局

```html
<div class="left">左边元素</div>
<div class="right">右边元素</div>

```

```css
/*第一种方式 利用`overflow:hidden`来触发bfc实现左边定宽，右边自适应的布局 */
	.left{
		float: left;
		width: 5rem;
		background-color: green;


	}
	.right{
        background-color:orange;
        overflow: hidden;
	}

  /*第二种方式,利用margin-left*/

  .left{
         float: left;
		width: 5rem;
		background-color: green;

      }
   .right{
          background-color:orange;
          margin-left:5rem;
       }
   /*还有其他方式，比上面的方式更负责，就不介绍了*/
```

![](uploads/csslayout/2.png)


#####右边定宽，左边自适应

利用float加负margin布局后遗症比较多,例如左边内容会被右边遮挡(当然可以用padding解决，不过麻烦)，所以还是利用表格来实现

```html

<div class="parent">
<div class="left">左边元素</div>
<div class="right">右边元素</div>
</div>

```

```css

.parent{
	display: table;
	table-layout: fixed;/*这个很重要,默认是automatic*/
	width: 100%;

}
.right{
	display: table-cell;
	width:5rem;
	background-color:purple;
	
}

.left{
	display: table-cell;
	
	background-color: green;
	
	
}


```

![](uploads/csslayout/3.png)




总的来说table对各种自适应布局都能很好的实现，除上面之外，还有什么两列定宽，一列自适应等等等等，
	另外table还可以用来作居中的用途，垂直居中，垂直水平居中等，都很好用,当然居中的实现除了table外
	利用margin，text-align等都比较常用。

>参考文章

本文极大参考下面的文章

[如何布局关于HTML与CSS布局技巧?](https://www.zhihu.com/question/38280161])