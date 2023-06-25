// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php

function PrintPixel(file,x,y){
    someImage=new SimpleImage(file);
    print("red is "+someImage.getRed(x,y));
    print("green is "+someImage.getGreen(x,y));
    print("blue is "+someImage.getBlue(x,y));
}

PrintPixel("drewgreen.png",10, 10);
PrintPixel("drewgreen.png",250, 500);
