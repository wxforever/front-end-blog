把游览器书签的网址改为以下内容，使网页背景为黑色，文字为白色,保护视力

```javascript
javascript:(function(){ [].forEach.call(document.querySelectorAll("*"),function(node){ node.style.color='#fff'}); [].forEach.call(document.querySelectorAll("*"),function(node){ node.style.backgroundColor='#000'});})();

```