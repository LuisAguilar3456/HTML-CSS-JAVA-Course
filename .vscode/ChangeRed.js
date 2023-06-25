// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php
function changeRed(width, height){
    var picture = new SimpleImage(width, height);
    for (var y=0;y<height;y++){
        for (var x=0;x<=255;x++){
            picture.setRed(x,y,x);
            picture.setBlue(x,y,0); 
            picture.setGreen(x,y,0); 
        }
    }
    return picture;
}

var result = changeRed(256,200);
print(result);