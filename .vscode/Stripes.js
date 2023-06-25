// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php
var SomeImag= new SimpleImage("hilton.jpg");
var Width=SomeImag.getWidth();
var Height=SomeImag.getHeight();
var Lon=Math.round(Width/3);
print(SomeImag);
for (var x=0;x<Lon;x++){
    for (var y=0;y<Height;y++){
        SomeImag.setRed(x,y,255);
    }
}
for (var x=Lon;x<2*Lon;x++){
    for (var y=0;y<Height;y++){
        SomeImag.setGreen(x,y,255);
    }
}
for (var x=2*Lon;x<Width;x++){
    for (var y=0;y<Height;y++){
        SomeImag.setBlue(x,y,255);
    }
}
print(SomeImag);