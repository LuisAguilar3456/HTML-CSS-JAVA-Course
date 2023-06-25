// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php
var SomeImag= new SimpleImage("duke_blue_devil.png");
var Width=SomeImag.getWidth();
var Height=SomeImag.getHeight();
print(SomeImag);
for (var x=0;x<Width;x++){
    for (var y=0;y<Height;y++){
        var Red=SomeImag.getRed(x,y);
        var Green=SomeImag.getGreen(x,y);
        var Blue=SomeImag.getBlue(x,y);
        if (Blue!=Red && Blue!=Green){
            SomeImag.setRed(x,y,255);
            SomeImag.setGreen(x,y,255);
            SomeImag.setBlue(x,y,0);
        }
    }
}
print(SomeImag);