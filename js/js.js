/**
 * Created by Sonny on 5/1/2017.
 */
var start = new Date().getTime();
var clicked = 1;


document.getElementById("shape").onclick = function(){

    removeShape();

    var end = new Date().getTime();
    var time = (end - start) / 1000;

    document.getElementById("timeTaken").innerHTML = time + "s";
    document.getElementById('clicked').innerHTML = clicked++;

    appearAfterDelay()


};


function makeShapeAppear(){

    var top = Math.random() * 500;
    var left = Math.random() * 1500;
    var width = (Math.random() * 100) + 50;

    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";

    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    console.log("size is " + width + " by " + width);

    start = new Date().getTime();
}

function appearAfterDelay() {
        setTimeout(makeShapeAppear, Math.random() * 2000);

}

function removeShape(){
    document.getElementById("shape").style.display = "none";
}

function getRandomColor() {
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for(var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color;
}


