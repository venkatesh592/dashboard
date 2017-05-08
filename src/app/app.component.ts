import { Component ,Type,ViewChild} from '@angular/core';
import {CropperSettings} from './cropperSettings';
import { CropPosition } from './model/cropPosition'
import { ImageCropperComponent } from './imageCropperComponent'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Type {
  @ViewChild('cropper', undefined)
  public cropper:ImageCropperComponent;  
  
  public data:any;
  public cropperSettings:CropperSettings;
  public cropPosition:CropPosition;

  public onChange:Function;
  public updateCropPosition:Function;
  public resetCroppers:Function;

  

  constructor(){
        super();

        //Cropper settings 3
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 250;
        this.cropperSettings.keepAspect = true;

        this.cropperSettings.croppedWidth = 300;
        this.cropperSettings.croppedHeight = 350;

        this.cropperSettings.canvasWidth = 500;
        this.cropperSettings.canvasHeight = 300;

        this.cropperSettings.minWidth = 100;
        this.cropperSettings.minHeight = 100;

        this.cropperSettings.rounded = false;
        this.cropperSettings.preserveSize = true;
        this.cropperSettings.minWithRelativeToResolution = false;

        this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(56,255,255,1)';
        this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
        this.cropperSettings.noFileInput = false;

        this.cropperSettings.resampleFn = (buffer:HTMLCanvasElement) => {

            var canvasContext = buffer.getContext('2d');
            var imgW = buffer.width;
            var imgH = buffer.height;
            var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);


            for(let y = 0; y < imgPixels.height; y++){
                for(let x = 0; x < imgPixels.width; x++){
                    var i = (y * 4) * imgPixels.width + x * 4;
                    var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                    imgPixels.data[i] = avg;
                    imgPixels.data[i + 1] = avg;
                    imgPixels.data[i + 2] = avg;
                }
            }

            canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        };

        this.cropPosition = new CropPosition();
        this.cropPosition.x = 10;
        this.cropPosition.y = 10;
        this.cropPosition.w = 50;
        this.cropPosition.h = 100;

        this.data ={};


        // this.onChange = ($event:any) => {
        //     var image:any = new Image();
        //     var file:File = $event.target.files[0];
        //     var myReader:FileReader = new FileReader();
        //     myReader.addEventListener('loadend', (loadEvent:any) => {
        //         image.src = loadEvent.target.result;
        //         this.cropper.setImage(image);
        //     });

        //     myReader.readAsDataURL(file);
        // }

        this.updateCropPosition = () => {
            this.cropper.captureRectangle();
            this.cropPosition = new CropPosition(this.cropPosition.x, this.cropPosition.y, this.cropPosition.w, this.cropPosition.h);
            console.log(this.cropPosition)
        }

        this.resetCroppers = () => {
            this.cropper.reset();
        }        
  }
         capture()  {
            this.cropper.captureRectangle();
        } 
}
