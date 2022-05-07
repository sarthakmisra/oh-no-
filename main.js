leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
song1 = "";
song2 = "";

function preload() {
song1 = loadSound("song1.mp3");
song2 = loadSound("song2.mp3");
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(620, 360)
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
}
function draw() {
    image(video, 300,300,620,360);
}
function modelloaded() {
    console.log('PoseNet is Intialized');
}

function gotposes(results) {
    if(results.length > 0)
{
        console.log(results);

        scorerightwrist = results[0].pose.keypoints[10].score;
        scoreleftwrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist =" + scoreleftwrist);
        lftristX = results[0].pose.leftWrist.x;
lftristY = results[0].pose.leftWrist.y;
console.log("leftWristX =" + lftristX +"leftWristY ="+lftristY);

rhtristX = results[0].pose.rightWrist.x;
rhtristY = results[0].pose.rightWrist.y;
console.log("rightWristX =" + rhtristX + " rightWristY =" + rhtristY);

    }

}
