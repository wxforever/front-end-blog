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


竖向导航的实现