// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php
function perimeter(file){
    someImage= new SimpleImage(file);
    Height=someImage.getHeight();
    Width=someImage.getWidth();
    ans=2*Height+2*Width;
    return ans;
}

x=perimeter('chapel.png');
y=perimeter('rodger.png');
print(x);
print(y);