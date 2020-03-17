window.onload =function(){

// var canvas1=document.getElementById('xxx');
// var context=canvas1.getContext('2d');//获取2d上下文，来作画
// context.style='black';//先改 变笔的颜色再画
// context.fillRect(0,0,100,100);

var canvas=document.getElementById("xxx")//首先拿到我要操作的元素
var context=canvas.getContext('2d');//获取2d上下文，来作画

//硬背,获取用户页面宽高
//只有用这个属性才能做成全屏画布
setWidthHeight();

//用户改变也能维持全屏，但画的东西不见了
window.onresize=function(){
    setWidthHeight();
}

function setWidthHeight(){
    var pageWidth=document.documentElement.clientWidth;
    var pageHeight=document.documentElement.clientHeight;
    canvas.width=pageWidth;
    canvas.height=pageHeight;
    }

var painting=false;
var lastPoint={x:undefined, y:undefined};

//在画布上操作，用画步调用api
canvas.onmousedown=function(aaa){
painting=true;
x=aaa.clientX;
y=aaa.clientY;
lastPoint={"x":x, "y":y};
drawCircle(x,y,3); //没有画这个圈其实也能用，可以删掉

}
canvas.onmousemove=function(aaa){
    x=aaa.clientX;
    y=aaa.clientY;
    var newPoint={"x":x,"y":y};
    if(painting){   //写if(painting＝true不行，why????)
    drawCircle(x,y,1);
    drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
    lastPoint=newPoint;
    }
    else{}
}

canvas.onmouseup=function(aaa){
    painting=false;
}

function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.lineWidth=4;
    context.strokeStyle='black';
    context.stroke();
    context.closePath();
}
function drawCircle(x,y,radius){
    context.beginPath();
    context.arc(x,y,radius,0,Math.PI*2);
    
    context.fill();
    }
}