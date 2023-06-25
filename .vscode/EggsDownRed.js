// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php
var SomeImag=new SimpleImage("eastereggs.jpg");
print(SomeImag);
var Width=SomeImag.getWidth();
var Height=SomeImag.getHeight();
print(Width);
print(Height);
for (var x=0;x<Width;x++){
    for (var y=0;y<Height;y++){
        var Red=SomeImag.getRed(x,y); 
        if (Red>70){
            SomeImag.setRed(x,y,70);
            
        }
    }
}
print(SomeImag);