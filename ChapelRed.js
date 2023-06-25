// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php

var SomeImag=new SimpleImage("chapel.png");
print(SomeImag);
for (var Pixel of SomeImag.values()){
    Pixel.setRed(255);
}
print(SomeImag);