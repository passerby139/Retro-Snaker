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
//开局的速度
var speed;

//开局调用自执行函数，来生成第一个小点
function main() {
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
	//进行向下运动
	keep = setInterval(function(){direction("s")},speed-snake.length);
	//背景变换色
	bgc()
}
//选择难度
function choose(e){
	if(e == 1){
		speed = 300;
	}else if(e == 2){
		speed = 250
	}else if(e == 3){
		speed = 200
	}
	//播放背景音乐
	var music = document.getElementById("music")
	music.src = "bgc1.mp3";
	if (music.paused) { 
        music.paused = false;
        music.play(); 
    }
    document.getElementsByClassName("navbar")[0].style.display="none"
    document.getElementsByClassName("choose")[0].style.display="none"
    document.getElementsByClassName("main")[0].style.display="block";
    //调用主要初始化
    main()
}
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
					ifmiss(snake[0]);
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
				ifmiss(snake[0]);
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
					ifmiss(snake[0]);
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
				ifmiss(snake[0]);
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
					ifmiss(snake[0]);
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
				ifmiss(snake[0]);
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
					ifmiss(snake[0]);	
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
				fangxiang = 4;
				break;
			}
			else{
				direction("a");
				break;
			}
		case "p":
				clearInterval(keep);
				break;
		default:
			switch(fangxiang){
				case 1:
					window.clearInterval(keep)
					keep = setInterval(function(){direction("w")},speed-snake.length);
					break;
				case 2:
					window.clearInterval(keep)
					keep = setInterval(function(){direction("s")},speed-snake.length);
					break;
				case 3:
					window.clearInterval(keep)
					keep = setInterval(function(){direction("a")},speed-snake.length);
					break;
				case 4:
					window.clearInterval(keep)
					keep = setInterval(function(){direction("d")},speed-snake.length);
					break;
			}
	}
}
//判断是否撞到自身
function ifmiss(head){
	if (snake[0] == snake[snake.length]+1) {
			miss();
	}
	else if(snake[0] == snake[snake.length]-1){
			console.log(snake)
			miss();
	}
	else if(snake[0] == snake[snake.length]-20){
			miss();
	}
	else if(snake[0] == snake[snake.length]+20){
			miss();
	}
	for (var i = 1; i < snake.length; i++) {
		if (head == snake[i]) {
			miss();
			return;
		};
	}
}
//当撞上之后
function miss(){
	document.getElementsByClassName("end")[0].style.display="block"
	document.getElementsByClassName("endSocer")[0].innerHTML="得分："+socer;
	document.getElementById("id"+snake[0]).innerHTML = ""
	for(var i = 0;i < snake.length;i++){
		document.getElementById("id"+snake[i]).style.backgroundColor=qipanColor
	}
	window.clearInterval(keep)
}
//点击确定重新开始
function newgame(){
	document.getElementsByClassName("end")[0].style.display="none";
	socer = 0;
	fangxiang = 2;
	snake = [40,20,0];
	keep = setInterval(function(){direction("s")},speed-snake.length);
	document.getElementsByClassName("socer")[0].innerHTML=socer
	color();
}
//直线行驶
var dir = document.getElementById("body");
dir.onkeydown = line;
var key
function line(event){
	if (key == event.key) return;
	    key = event.key;
	window.clearInterval(keep)
	keep = setInterval(function(){direction(key)},speed-snake.length);
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