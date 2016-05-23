---
title: createjs_practice|javascript
date: 2016-05-23 16:17:33
categories: basis
tags: js
---


#createjs practice

createjs is a javascript animation library produced by adobe,recently I used it  to create a game.
	there I will conclude some basic usages with createjs that I hava met.

>create stage

```html

	<canvas id="stage" >
	    your browser don't support html canvas,pleale use other browser.
	</canvas>

```
```javascript



	stage = new createjs.Stage("stage");

```

>touch support

```javascript

if (IS_TOUCH = createjs.Touch.isSupported()) {
		createjs.Touch.enable(stage, !0);//the second param means use singleTouch,default is false
		
	}

```

>draw a rectangle

```javascript
        var rect = new createjs.Shape;
		rect.graphics.f("white").r(0, 0, 50, 100);//f means beginfill,r means rect
		stage.addChild(rect);// draw a white rect and add it to stage

```

>set FPS

```javascript
//the first way
createjs.Ticker.setFPS(60);// depreciated

//the second way

createjs.Ticker.framerate=60

```

>update stage

```javascript

createjs.Ticker.on("tick", stage);

//use handtick

 createjs.Ticker.addEventListener("tick", handleTick);
 function handleTick(event) {
     
     if (!event.paused) {
        
     }
 }

```

>difference between canvas's width

```javascript

stage.canvas.width 

//means the width of CanvasRenderingContext2D which will make images in canvas become smaller whe you set this with bigger number
//so you should set this with the background image's width

stage.canvas.style.width  //means the width of the element width of canvas


//height is the same

```


>the usage of createjs.Container

```javascript 
		//createjs.Container is a container you can put some elements in and manipulate them together conviniently
		//usually,we can use a functin prototype to construct a container
		
		function container(w,h){
		
			//construct container
		
		}
		//inherit methods and properties from createjs.Container
		
 		container.prototype=new createjs.Container;
 		//add child

 		container.addChild(child)//child canbe bitmap,shape,text and so on

```

```javascript


 	//add some text

 	var text = new createjs.Text('content','font','color');

 	//set the text's properties
 	 text.x=100




```	

>load resources

```javascript
 
 //create loadQueue
  var queue = new createjs.LoadQueue(true);//true mean async

  //concurrent
   queue.setMaxConnections(10); // Allow 10 concurrent loads

   //load manifest
   	queue.loadManifest({path: "",manifest:[{src:"",id:""}]   })


   	//load sound should firlst install plugin 
   	 createjs.Sound.alternateExtensions = ["ogg"];
   	 queue.installPlugin(createjs.Sound);
   	 queue.loadManifest({path:"", manifest:[{src:"***.mp3", id:"prize"}}, false);//false means not load right now

   	 //after load,start game
   	 queue.on('complete',startgame);//startgame function mainly do the job that hide start page,setup and show canvas
   	 queue.load();


```

