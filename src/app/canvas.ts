// import {bootstrap} from 'angular2/platform/browser'
// import {Component} from "angular2/core";
// import {ViewChild} from "angular2/core";
// import {AfterViewInit} from "angular2/core";

// @Component({
//   selector: `my-app`,
//   template: `
//     <div>
//       <canvas #myCanvas width="400" height="400" style="background:lightgray;"></canvas>
//       <div>
//         幅 <input type="range" min="1" max="400" [(ngModel)]="rectW" /><br />
//         高さ <input type="range" min="1" max="400" [(ngModel)]="rectH" /><br />
//         塗りの色 <input type="color" [(ngModel)]="rectColor" placeholder="color" value="{{rectColor}}" />
//       </div>
//       <button name="button" value="cheking"> cnk </button>
//     </div>
//     `
// })

// export class ConvasComponent implements AfterViewInit {
//   rectW:number = 100;
//   rectH:number = 100;
//   rectColor:string = "#FF0000";
//   context:CanvasRenderingContext2D;

//   @ViewChild("myCanvas") myCanvas;

//   ngAfterViewInit() {
//     // 参照をとれる
//     let canvas = this.myCanvas.nativeElement;
//     this.context = canvas.getContext("2d");

//     this.tick();
//   }

//   tick() {
//     // 本当はデータ変更時のみ呼び出したい
//     requestAnimationFrame(()=> {
//       this.tick()
//     });

//     var ctx = this.context;
//     ctx.clearRect(0, 0, 400, 400);
//     ctx.fillStyle = this.rectColor;
//     ctx.fillRect(0, 0, this.rectW, this.rectH);
//   }
// }
