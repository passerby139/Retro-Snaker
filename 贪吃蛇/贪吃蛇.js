//初始化蛇数组
var snake = [40,20,0];
//记录当前前进的方向
var fangxiang = 0;
//记录随机点
var food = 20;
//记录分值
var socer = 0;
//全局变量存储定时器
var keep;
//蛇的颜色
var snakeColor = 'red';
//棋盘的颜色
var qipanColor = 'yellow';
//开局调用自执行函数，来生成第一个小点
(function () {
	//创建400个小元素，id自增加1
　　　　var qipan = document.getElementById("qipan");
		qipan.style.backgroundColor = qipanColor
		for (var i = 0; i < 400; i++) {
	　　　　//添加 div
			var div = document.createElement("div");
			var id = "id"+i;
			//设置 li 属性，如 id
			div.setAttribute("id", id);
			//增加此元素
			qipan.appendChild(div);
		};
	//生成分数
	document.getElementsByClassName("socer")[0].innerHTML=socer
	//产生随机数并随机产生小点
	change();
	//蛇身颜色渲染
	color();
	keep = setInterval(function(){direction("s")},200-snake.length);
	bgc()
})();

//蛇的颜色控制
function color(){
	for(var i = 0;i < snake.length;i++){
		var id = "id"+snake[i];
		document.getElementById(id).style.backgroundColor=snakeColor
		document.getElementById("id"+snake[0]).innerHTML = "o"
	}
}
//蛇的方向控制
function direction(e){
	var event = e || "s"
	switch(event){
		case "w":
			//防止朝相反方向行驶
			if (fangxiang != 2) {
				var temp = snake[0]
				snake[0] = snake[0]-20;
				//判断越界问题
				if(snake[0] < 0){
					snake[0] += 400
				}
				//食用果实
				if(food == snake[0]){
					var tail = snake[snake.length-1]+20
					if(tail < 0){
						tail += 400
					}
					else if(tail >= 400){
						tail -= 400
					}
					else if((tail+1)%20 == 0){
						tail += 20
					}
					else if(tail%20 == 0 && tail > 0){
						tail -= 20
					}
					snake.push(tail);
					console.log(snake)
					document.getElementById("id"+snake[snake.length-1]).style.backgroundColor=snakeColor
					document.getElementById("id"+food).innerHTML = ""
					socer += 100
					document.getElementsByClassName("socer")[0].innerHTML=socer
					change()
				}
				//为头部开辟的新空间赋值颜色
				document.getElementById("id"+snake[0]).style.backgroundColor=snakeColor
				//为尾部走过的旧空间回归原始色
				document.getElementById("id"+snake[snake.length-1]).style.backgroundColor=qipanColor
				//遍历依次移动
				for(var i = snake.length-1;i > 0;i--){
					if(i == 1){
						snake[i] = temp;
						break;
					}
					snake[i] = snake[i-1];
				}
				document.getElementById("id"+snake[0]).innerHTML = "o"
				document.getElementById("id"+snake[1]).innerHTML = ""
				miss(snake[0]);
				fangxiang = 1;
				break;
			}
			else{
				direction("s");
				break;
			}
		case "s":
			//防止朝相反方向行驶
			if (fangxiang != 1) {
				var temp = snake[0]
				snake[0] = snake[0]+20;
				//判断越界问题
				if(snake[0] >= 400){
					snake[0] -= 400
				}
				if(food == snake[0]){
					var tail = snake[snake.length-1]-20
					if(tail < 0){
						tail += 400
					}
					else if(tail >= 400){
						tail -= 400
					}
					else if((tail+1)%20 == 0){
						tail += 20
					}
					else if(tail%20 == 0 && tail > 0){
						tail -= 20
					}
					snake.push(tail);
					console.log(snake)
					document.getElementById("id"+snake[snake.length-1]).style.backgroundColor=snakeColor
					document.getElementById("id"+food).innerHTML = ""
					socer += 100
					document.getElementsByClassName("socer")[0].innerHTML=socer
					change()
				}
				//为头部开辟的新空间赋值颜色
				document.getElementById("id"+snake[0]).style.backgroundColor=snakeColor
				//为尾部走过的旧空间回归原始色
				document.getElementById("id"+snake[snake.length-1]).style.backgroundColor=qipanColor
				//遍历依次移动
				for(var i = snake.length-1;i > 0;i--){
					if(i == 1){
						snake[i] = temp;
						break;
					}
					snake[i] = snake[i-1];
				}
				document.getElementById("id"+snake[0]).innerHTML = "o"
				document.getElementById("id"+snake[1]).innerHTML = ""
				miss(snake[0]);
				fangxiang = 2
				break;
			}
			else{
				direction("w");
				break;
			}
		case "a":
			//防止朝相反方向行驶
			if (fangxiang != 4) {
				var temp = snake[0]
				snake[0] -= 1
				//判断越界问题
				if((snake[0]+1)%20 == 0){
					snake[0] += 20
				}
				if(food == snake[0]){
					var tail = snake[snake.length-1]+1
					if(tail < 0){
						tail += 400
					}
					else if(tail >= 400){
						tail -= 400
					}
					else if((tail+1)%20 == 0){
						tail += 20
					}
					else if(tail%20 == 0 && tail > 0){
						tail -= 20
					}
					snake.push(tail);
					console.log(snake)
					document.getElementById("id"+snake[snake.length-1]).style.backgroundColor=snakeColor
					document.getElementById("id"+food).innerHTML = ""
					socer += 100
					document.getElementsByClassName("socer")[0].innerHTML=socer
					change()
				}
				//为头部开辟的新空间赋值颜色
				document.getElementById("id"+snake[0]).style.backgroundColor=snakeColor
				//为尾部走过的旧空间回归原始色
				document.getElementById("id"+snake[snake.length-1]).style.backgroundColor=qipanColor
				//遍历依次移动
				for(var i = snake.length-1;i > 0;i--){
					if(i == 1){
						snake[i] = temp;
						break;
					}
					snake[i] = snake[i-1];
				}
				document.getElementById("id"+snake[0]).innerHTML = "o"
				document.getElementById("id"+snake[1]).innerHTML = ""
				miss(snake[0]);
				fangxiang = 3
				break;
			}
			else{
				direction("d");
				break;
			}
		case "d":
			//防止朝相反方向行驶
			if (fangxiang != 3) {
				var temp = snake[0]
				snake[0] = snake[0]+1;
				//判断越界问题
				if(snake[0]%20 == 0  && snake[0] > 0){
					snake[0] -= 20
				}
				if(food == snake[0]){
					var tail = snake[snake.length-1]-1
					if(tail < 0){
						tail += 400
					}
					else if(tail >= 400){
						tail -= 400
					}
					else if((tail+1)%20 == 0){
						tail += 20
					}
					else if(tail%20 == 0 && tail > 0){
						tail -= 20
					}
					snake.push(tail);
					console.log(snake)
					document.getElementById("id"+snake[snake.length-1]).style.backgroundColor=snakeColor
					document.getElementById("id"+food).innerHTML = ""
					socer += 100
					document.getElementsByClassName("socer")[0].innerHTML=socer
					change()
				}
				//为头部开辟的新空间赋值颜色
				document.getElementById("id"+snake[0]).style.backgroundColor=snakeColor
				//为尾部走过的旧空间回归原始色
				document.getElementById("id"+snake[snake.length-1]).style.backgroundColor=qipanColor
				//遍历依次移动
				for(var i = snake.length-1;i > 0;i--){
					if(i == 1){
						snake[i] = temp;
						break;
					}
					snake[i] = snake[i-1];
				}
				document.getElementById("id"+snake[0]).innerHTML = "o"
				document.getElementById("id"+snake[1]).innerHTML = ""
				miss(snake[0]);
				fangxiang = 4;
				break;
			}
			else{
				direction("a");
				break;
			}
	}
}
//判断是否撞到自身
function miss(head){
	for (var i = 1; i < snake.length; i++) {
		if (head == snake[i]) {
			alert("游戏结束！当前分值"+socer);
			document.getElementById("id"+snake[0]).innerHTML = ""
			for(var i = 0;i < snake.length;i++){
				document.getElementById("id"+snake[i]).style.backgroundColor=qipanColor
			}
			socer = 0;
			snake = [40,20,0];
			window.clearInterval(keep)
			keep = setInterval(function(){direction("s")},200-snake.length);
			document.getElementsByClassName("socer")[0].innerHTML=socer
			color();
		};
	}
}
//直线行驶
var dir = document.getElementById("body");
dir.onkeydown = line;
function line(event){
	var temp = event.key;
	window.clearInterval(keep)
	keep = setInterval(function(){direction(temp)},200-snake.length);
}
//产生随机小点函数
function change(){
	var temp = Math.round(Math.random()*399);
	for(var i = 0;i < snake.length;i++){
		if (temp == snake[i]) {
			console.log(temp);
			document.getElementById("id"+temp).innerHTML = "";
			change();
			return;
		};
	}
	var id = "id"+temp

		food = temp
	var flag = document.getElementById(id);
	flag.innerHTML = "*";
}
//背景颜色
function bgc(){
	setInterval(function(){
		var a = Math.round(Math.random()*255);
		var b = Math.round(Math.random()*255);
		var c = Math.round(Math.random()*255);
		document.getElementById("body").style.backgroundColor="rgb("+a+","+b+","+c+")"
	},3000);
}