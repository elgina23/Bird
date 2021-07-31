var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var dino = new Image();
var pipeBottom = new Image();
var fg = new Image();
var bg  = new Image();

dino.src='img/dino.png'
pipeBottom.src = "img/kaktus.png"
fg.src = "img/fg.png"
bg.src = "img/bg.png"

var dinoPos = 220
var xPos=10

document.addEventListener("keydown", moveUp);
function moveUp(){
    if(dinoPos == 220){
        dinoPos-=100
    }
    
}
var pipe = []
pipe[0] = {
    x:cvs.width
}

var score=0



function draw (){
    ctx.drawImage(bg, 0, 0, 500, 300);
    for(var i=0; i<pipe.length;i++){
        ctx.drawImage(pipeBottom, pipe[i].x, cvs.height - 60, 45, 45);
        pipe[i].x-=3;
    if(pipe[i].x==125){
        pipe.push({
            x:cvs.width,

        })
       
    }
    if(pipe[i].x==5){
        score++
    }
   
    // if(xPos+dino.width>=pipe[i].x
    // && xPos<=pipe[i].x+pipeBottom.width){
    //     location.reload()

    }
    
   
    ctx.drawImage(fg, 0, cvs.height - 20, 500, 25);
    ctx.drawImage(dino, 10, dinoPos, 65, 65)
   
    if(dinoPos < 220){
        dinoPos+=2
    }
    ctx.fillStyle="#000";
    ctx.font="24px Verdana";
    ctx.fillText("Счет: "+score,cvs.width-100,20)
    requestAnimationFrame(draw);
}
pipeBottom.onload = draw