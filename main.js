function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
   {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    difference=floor(leftWristX-rightWristX);
   }

}
function draw(){
    background('#52B2BF');
    textSize(difference);
    fill('#FEE12B');
    text('Adithya', 50, 400);
}