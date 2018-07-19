//获取对象
var canvas = document.getElementById("my");
var context = canvas.getContext('2d');
//draw()
function draw() {
    //获取当前时间
    var now = new Date();
    var sec = now / 1000 % 60;
    var min = now.getMinutes();
    var hour = now.getHours();
    hour >= 12 && (hour = hour - 12); //如果大于12  就减去12   && 前面的条件如果满足  就会执行后面的语句  相当于  if 
    //设置画布中点
    var radius = Math.min(canvas.width / 2, canvas.height / 2);
    //初始化画布
    context.save(); //保存
    context.clearRect(0, 0, canvas.width, canvas.height); //清除 从点（0,0,）（画布左上角）开始  到画布右下角 的矩形区域的所有图形 
    context.translate(canvas.width / 2, canvas.height / 2);//将画布的（0,0）位置置于画布中点处
    context.rotate(-Math.PI / 2);//画布逆时针旋转90°
    context.save();//保存
    //绘制小时框
    context.strokeStyle = "black";  //画布的笔触色 
    context.fillStyle = "black";  //画布的填充色
    context.lineWidth = 3;  //线条宽度
    context.lineCap = "round";  //线条样式  （圆角直线）
    context.beginPath(); //开始创建绘制
    for (var i = 0; i < 12; i++) {
        context.rotate(Math.PI / 6);//画布旋转30°
        context.moveTo(radius - 30, 0);//线条的起点
        context.lineTo(radius - 10, 0);//线条的终点
    }
    context.stroke(); //绘制
    context.restore(); //还原画布设置
    context.save();//保存
    //绘制分钟框
    context.lineWidth = 2;
    context.beginPath();
    for (var i = 0; i < 60; i++) {
        if (!i % 5 == 0) {
            context.moveTo(radius - 15, 0);
            context.lineTo(radius - 10, 0);
        }
        context.rotate(Math.PI / 30); //画布旋转6°

    }
    context.stroke();
    context.restore();
    context.save();
    //绘制小时指针
    context.rotate((Math.PI / 6) * hour + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    context.lineWidth = 6;
    context.beginPath();
    context.moveTo(-10, 0);
    context.lineTo(radius * 0.5, 0)
    context.stroke();
    context.restore();
    context.save();  
    //绘制分钟指针
    context.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    context.strokeStyle = "#29A8DE";
    context.lineWidth = 4;
    context.lineCap = "butt";
    context.beginPath();
    context.moveTo(-20, 0);
    context.lineTo(radius * 0.7, 0);
    context.stroke();
    context.restore();
    context.save();
    //绘制秒针
    context.rotate((Math.PI / 30) * sec);
    context.strokeStyle = "red";
    context.lineCap = "butt";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(-30, 0);
    context.lineTo(radius * 0.9, 0);
    context.stroke();
    context.restore();
    context.save();
    //绘制时钟边框
    context.lineWidth = 4;
    context.strokeStyle = "gray";
    context.beginPath()
    context.arc(0, 0, radius - 5, 0, Math.PI * 2);
    context.stroke();
    context.restore();
    context.save();
    //添加文字
    context.rotate(Math.PI / 2);
    context.font = "20px Georgia";
    context.fillText("6", -7, 160);
    context.fillText("3", 155, 5);
    context.fillText("9", -160, 5);
    context.fillText("12", -8, -155);
    context.restore();
    //还原画布
    context.restore();
}

var can = document.getElementById("mm");
var cans = can.getContext('2d');
var time;
function draw1() {
    //获取当前时间
    var now1 = new Date();
    var now2 = now1 - time;
    var sec2 = now2 /1000;
    var min2 = sec2 / 60;
    var hour2 = min2 / 60;
    hour2 >= 12 && (hour2 = hour2 - 12); //如果大于12  就减去12   && 前面的条件如果满足  就会执行后面的语句  相当于  if 
    //设置画布中点
    var rad = Math.min(canvas.width / 2, canvas.height / 2);
    //初始化画布
    cans.save(); //保存
    cans.clearRect(0, 0, canvas.width, canvas.height); //清除 从点（0,0,）（画布左上角）开始  到画布右下角 的矩形区域的所有图形 
    cans.translate(canvas.width / 2, canvas.height / 2);//将画布的（0,0）位置置于画布中点处
    cans.rotate(-Math.PI / 2);//画布逆时针旋转90°
    cans.save();//保存
    //绘制小时框
    cans.strokeStyle = "black";  //画布的笔触色 
    cans.fillStyle = "black";  //画布的填充色
    cans.lineWidth = 3;  //线条宽度
    cans.lineCap = "round";  //线条样式  （圆角直线）
    cans.beginPath(); //开始创建绘制
    for (var i = 0; i < 12; i++) {
        cans.rotate(Math.PI / 6);//画布旋转30°
        cans.moveTo(rad - 30, 0);//线条的起点
        cans.lineTo(rad - 10, 0);//线条的终点
    }
    cans.stroke(); //绘制
    cans.restore(); //还原画布设置
    cans.save();//保存
    //绘制分钟框
    cans.lineWidth = 2;
    cans.beginPath();
    for (var i = 0; i < 60; i++) {
        if (!i % 5 == 0) {
            cans.moveTo(rad - 15, 0);
            cans.lineTo(rad - 10, 0);
        }
        cans.rotate(Math.PI / 30); //画布旋转6°

    }
    cans.stroke();
    cans.restore();
    cans.save();
    //绘制小时指针
    cans.rotate(Math.PI / 21600 * sec2);
    cans.lineWidth = 6;
    cans.beginPath();
    cans.moveTo(-10, 0);
    cans.lineTo(rad * 0.5, 0)
    cans.stroke();
    cans.restore();
    cans.save();
    //绘制分钟指针
    cans.rotate(Math.PI / 1800 * sec2 );
    cans.strokeStyle = "#29A8DE";
    cans.lineWidth = 4;
    cans.lineCap = "butt";
    cans.beginPath();
    cans.moveTo(-20, 0);
    cans.lineTo(rad * 0.7, 0);
    cans.stroke();
    cans.restore();
    cans.save();
    //绘制秒针
    cans.rotate((Math.PI / 30) * sec2);
    cans.strokeStyle = "red";
    cans.lineCap = "butt";
    cans.lineWidth = 2;
    cans.beginPath();
    cans.moveTo(-30, 0);
    cans.lineTo(rad * 0.9, 0);
    cans.stroke();
    cans.restore();
    cans.save();
    //绘制时钟边框
    cans.lineWidth = 4;
    cans.strokeStyle = "gray";
    cans.beginPath()
    cans.arc(0, 0, rad - 5, 0, Math.PI * 2);
    cans.stroke();
    cans.restore();
    cans.save();
    //添加文字
    cans.rotate(Math.PI / 2);
    cans.font = "20px Georgia";
    cans.fillText("6", -7, 160);
    cans.fillText("3", 155, 5);
    cans.fillText("9", -160, 5);
    cans.fillText("0", -7, -155);
    cans.restore();
    //还原画布
    cans.restore();
}
var i;
window.onload = function () {
    setInterval(draw, 1);
    time = new Date();
    i = setInterval(draw1, 1);
}
function xx() {
    window.clearInterval(i);
    time = new Date();
    i = setInterval(draw1, 1);
}
