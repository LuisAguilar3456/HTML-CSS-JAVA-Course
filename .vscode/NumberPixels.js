// RUN ON https://www.dukelearntoprogram.com//course1/example/index.php
function NumberPixels(file) {
    var someImage = new SimpleImage(file);
    var height = someImage.getHeight();
    var width = someImage.getWidth();
    size = height * width;
    return size;
}
y = NumberPixels('chapel.png');
print(y);
z=NumberPixels('dinos.png');
print(z);