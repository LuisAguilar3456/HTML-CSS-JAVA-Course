// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php
function SumPixel(file,x,y){
    someImage=new SimpleImage(file);    
    red=someImage.getRed(x,y);
    green=someImage.getGreen(x,y);
    blue=someImage.getBlue(x,y);
    total=red+green+blue;
    return total
}
a=SumPixel("drewgreen.png",10, 10);
b=SumPixel("drewgreen.png",250, 500);

print(a);
print(b)    