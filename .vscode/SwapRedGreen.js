// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php
var SomeImag= new SimpleImage("drewRobert.png");
var Width=SomeImag.getWidth();
var Height=SomeImag.getHeight();
print(SomeImag);
for (var x=0;x<Width;x++){
    for (var y=0;y<Height;y++){
        var Red=SomeImag.getRed(x,y);
        var Green=SomeImag.getGreen(x,y);
        SomeImag.setRed(x,y,Green);
        SomeImag.setGreen(x,y,Red);
    }
}
print(SomeImag);