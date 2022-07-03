let count = 1;
let timer = 5000;
document.getElementById("radio1").checked = true;

setInterval( function(){

    nextImage();

}, timer)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}