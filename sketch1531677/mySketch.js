function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	background(0);
	var clr1 = color("#48cae4")
	var clr2 = color("#fb8500")
	var r=map(mouseX,0,width,0,1); //透過滑鼠控制漸變
	var mid_Color = lerpColor(clr1, clr2, r) //(第一個顏色,第二個顏色,漸變率0~1的顏色)
	
	for(var x=0;x<width;x=x+100){
	for(var y=0;y<height;y=y+100){
		noFill() //矩形不充滿顏色
		strokeWeight(2) //框線的粗度
		stroke(mid_Color) //矩形的顏色
		rectMode(CENTER) //讓矩形的中間為中心點
	  rect(x, y, 100); //畫一個矩形並充滿整個畫布
  }
 }
	
  for(var x=0;x<width;x=x+100){
	for(var y=0;y<height;y=y+100){
		let m = map(mouseX, 0, width, 50, 40); //當移動x軸時，m會在50~40之間移動
		let n = map(mouseY, 0, height, 50, 40); //當移動y軸時，m會在50~40之間移動
		r=m+n //讓矩形可以等比例縮放
		noFill()
		strokeWeight(2)
		stroke(mid_Color)
		rectMode(CENTER)
	  rect(x, y, r);
  }
 }
	
	for(var x=0;x<width;x=x+100){
	for(var y=0;y<height;y=y+100){
		let m = map(mouseX, 0, width, 50, 30);
		let n = map(mouseY, 0, height, 50, 30);
		r=m+n
		noFill()
		strokeWeight(2) 
		stroke(mid_Color)
		rectMode(CENTER)
	  rect(x, y, r);
  }
 }
	
	for(var x=0;x<width;x=x+100){
	for(var y=0;y<height;y=y+100){
		let m = map(mouseX, 0, width, 50, 20);
		let n = map(mouseY, 0, height, 50, 20);
		r=m+n
		noFill()
		strokeWeight(2)
		stroke(mid_Color)
		rectMode(CENTER)
	  rect(x, y, r);
  }
 }
	
	for(var x=0;x<width;x=x+100){
	for(var y=0;y<height;y=y+100){
		let m = map(mouseX, 0, width, 50, 10);
		let n = map(mouseY, 0, height, 50, 10);
		r=m+n
		noFill()
		strokeWeight(2)
		stroke(mid_Color)
		rectMode(CENTER)
	  rect(x, y, r);
  }
 }
	
	for(var x=0;x<width;x=x+100){
	for(var y=0;y<height;y=y+100){
		let m = map(mouseX, 0, width, 50, 5);
		let n = map(mouseY, 0, height, 50, 5);
		r=m+n
		noFill()
		strokeWeight(2)
		stroke(mid_Color)
		rectMode(CENTER)
	  rect(x, y, r);
  }
 }
	
	pop()
	var clr1 = color("#fb8500")
	var clr2 = color("#48cae4")
	var r=map(mouseX,0,width,0,1);
	var mid_Color = lerpColor(clr1, clr2, r)
	for(var x=0;x<width;x=x+100){
	for(var y=0;y<height;y=y+100){
		let m = map(mouseX, 0, width, 50, 100); //當移動x軸時，m會在50~100之間移動
		let n = map(mouseY, 0, height, 50, 100); //當移動y軸時，n會在50~100之間移動
		r=m+n //讓圓可以等比例縮放
		strokeWeight(2) //框線的粗度
		stroke(mid_Color); //框線的顏色
		noFill() //圓形不充滿顏色
	  ellipse(x, y, r); //畫一個等比例縮放的圓並充滿整個畫布
  }
 }
	push()
}