// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php

var Yellow=new SimpleImage(200,200);

for (var pixelY of Yellow.values()){
    var newGY=pixelY.setGreen(255);
    var newRY=pixelY.setRed(255);
}

print(Yellow);

var Magenta=new SimpleImage(200,200);

for (var pixelM of Magenta.values()){
    var newBM=pixelM.setBlue(255);
    var newRM=pixelM.setRed(255);
}

print(Magenta);