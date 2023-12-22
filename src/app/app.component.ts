import { isPlatformBrowser } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit, Inject, PLATFORM_ID } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
 
 
})
export class AppComponent {
  title = 'autoparts';
  

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
 if( isPlatformBrowser(this.platformId)){
  
 }
  }

  myimage:string = "assets/image/home.jpg";
  logo:string = "assets/image/logo.png";
}
