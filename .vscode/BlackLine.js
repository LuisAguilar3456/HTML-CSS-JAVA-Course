// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php
var SomeImag=new SimpleImage("astrachan.jpg");
print(SomeImag);
var Width=SomeImag.getWidth();
var Height=SomeImag.getHeight();
print(Width);
print(Height);
for (var x=0;x<Width;x++){
    for (var y=Height-10;y<Height;y++){
        SomeImag.setRed(x,y,0);
        SomeImag.setGreen(x,y,0);
        SomeImag.setBlue(x,y,0);
    }
}
print(SomeImag);