// Реальний об'єкт
class RealImage {
    constructor(filename) {
      this.filename = filename;
      this.loadImageFromDisk();
    }
  
    loadImageFromDisk() {
      console.log(`Завантаження зображення ${this.filename}`);
    }
  
    displayImage() {
      console.log(`Відображення зображення ${this.filename}`);
    }
  }
  
  // Проксі для зображення
  class ImageProxy {
    constructor(filename) {
      this.filename = filename;
      this.realImage = null;
    }
  
    displayImage() {
      if (this.realImage === null) {
        this.realImage = new RealImage(this.filename);
      }
      this.realImage.displayImage();
    }
  }
  
  // Клієнтський код
  const image1 = new ImageProxy('image1.jpg');
  const image2 = new ImageProxy('image2.jpg');
  
  // Зображення завантажуються та відображаються лише при першому виклику displayImage()
  image1.displayImage();
  image1.displayImage();
  
  image2.displayImage();

console.log(image1);  
console.log(image1);  
console.log(image2);  