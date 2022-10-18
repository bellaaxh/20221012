function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0); //背景黑色
    noFill() //不要充滿顏色
    stroke(255) //框線顏色(255為白色)
    noFill() //不要充滿顏色
    rectMode(CENTER) //以方框中心點為坐標點
    for(var j=0;j<(height/50);j++) {
      for(var i=0;i<(width/50);i=i+1) //i++ ==>i=i+1
    {
      ellipse(25+(i*50),25+(j*50),50+mouseX/10) //在座標(25.25)畫一個直徑50圓
      stroke("#6b705c")
      rect(25+(i*50),25+(j*50),50) //方框座標
      stroke("#284b63")
      ellipse(50+(i*50),50+(j*50),25+mouseX/5)
      stroke(255)
    }

  }
}