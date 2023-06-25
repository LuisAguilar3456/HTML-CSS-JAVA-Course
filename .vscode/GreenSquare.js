// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php
var SomeImag=new SimpleImage("chapel.png");
print(SomeImag);
for (var x=0;x<=50;x++){
    for (var y=0;y<=50;y++){
        SomeImag.setRed(x,y,0);
        SomeImag.setGreen(x,y,255);
        SomeImag.setBlue(x,y,0);
    }
}
print(SomeImag);