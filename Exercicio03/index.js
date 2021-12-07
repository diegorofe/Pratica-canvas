function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    //position
    ctx.moveTo(0, 0)

    //create draw
    ctx.lineTo(0,30)
    ctx.moveTo(0, 30)
    ctx.lineTo(30,30)
    ctx.moveTo(30,30)
    ctx.lineTo(30,60)  
    ctx.moveTo(30,60)
    ctx.lineTo(60,60)      
     
    ctx.closePath();
    ctx.stroke();
  }
}