	var quickSort = function(arr, start, length) { //数组，开始下标，数组长度


		if (length <= 1) {
			return;
		}

		var pivotIndex = start + Math.floor(length / 2);

		pivot = arr[pivotIndex];
	/*	console.log('pivot');
		console.log(pivot);
		console.log('pivotIndex');
		console.log(pivotIndex);
		console.log('firstarr');
		console.log(arr);*/
		var left = [];

		var leftCount = 0;

		var right = [];

		var rightCount = 0;



		var repeat = 0;

		for (var i = start; i < start+length; i++) {

			if (arr[i] < pivot) {
				left.push(arr[i]);
				leftCount++;


			} else if (arr[i] > pivot) {
				right.push(arr[i]);
				rightCount++;
			} else {
				repeat++;
			}
		};
/*		console.log('start');
		console.log(start);
		console.log('left');
		console.log(left);
			console.log('repeat');
		console.log(repeat);
			console.log('right');
		console.log(right);
			console.log('length');
		console.log(length);*/

		  var tempArr=[];
		for (var i = 0; i < arr.length; i++) {
			tempArr[i]=arr[i];//按值复制
		};
	 

	  	 arr.length=0;//清空数组，但是不改变内存地址

		var temp = left;
		for (var i = 0; i < repeat; i++) {

			temp.push(pivot);
		}

		temp = temp.concat(right);
/*		console.log('arrfirst');
		console.log(arr);*/
		var first = tempArr.slice(0, start) || [];
		var end = tempArr.slice(start + length) || [];
		tempArr = first.concat(temp).concat(end);

		for (var i = 0; i < tempArr.length; i++) {
			 arr[i]=tempArr[i];//按值复制回来
		};
/*		console.log('first');
		console.log(first);
		console.log('end');
		console.log(end);
		console.log('temp');
		console.log(temp);
		console.log('arr');
		console.log(arr);*/
		left = right = temp =tempArr=null;


		quickSort(arr, start, leftCount);

		quickSort(arr, leftCount + repeat, rightCount);

		return arr;

	}