// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php
function topRightCorner(cornerWidth,cornerHeight,someImage,red,green,blue){
    var Width=someImage.getWidth();
    for (var x=Width-cornerWidth;x<Width;x++){
        for (var y=0;y<cornerHeight;y++){
            someImage.setRed(x,y,red);
            someImage.setGreen(x,y,green);
            someImage.setBlue(x,y,blue);
        }
    }
    return someImage;
}


var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);