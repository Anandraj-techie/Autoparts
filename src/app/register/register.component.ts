import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RegUser } from '../reguser';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  reguser: RegUser = new RegUser();

  constructor(
    private registerservice: RegisterserviceService, // Adjust the service injection as needed
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.setupEventListeners();
  }

  private normalEyeStyle() {
    this.setStyles('.eyeball-l', 'left: 0.6em; top: 0.6em;');
    this.setStyles('.eyeball-r', 'right: 0.6em; top: 0.6em;');
  }

  private normalHandStyle() {
    this.setStyles('.hand-l', 'height: 2.81em; top: 13.5em; left: 7.5em; transform: rotate(0deg);');
    this.setStyles('.hand-r', 'height: 2.81em; top: 13.5em; right: 7.5em; transform: rotate(0deg);');
  }

  private setStyles(selector: string, styles: string) {
    const element = this.elRef.nativeElement.querySelector(selector);
    if (element) {
      this.renderer.setAttribute(element, 'style', styles);
    }
  }

  private setupEventListeners() {
    const fullnameRef = this.elRef.nativeElement.querySelector('#fullname');
    const emailRef = this.elRef.nativeElement.querySelector('#email');
    const newPasswordRef = this.elRef.nativeElement.querySelector('#newPassword');
    const matchPasswordRef = this.elRef.nativeElement.querySelector('#matchPassword');
    const termsRef = this.elRef.nativeElement.querySelector('#terms');

    fullnameRef.addEventListener('focus', () => {
      this.normalEyeStyle();
      this.normalHandStyle();
    });

    emailRef.addEventListener('focus', () => {
      this.normalEyeStyle();
      this.normalHandStyle();
    });
 
    newPasswordRef.addEventListener('focus', () => {
      this.setStyles('.hand-l', 'height: 6.56em; top: 9em; left: 11.75em; transform: rotate(-155deg);');
      this.setStyles('.hand-r', 'height: 6.56em; top: 9em; right: 11.75em; transform: rotate(155deg);');
      this.normalEyeStyle();
    });

    termsRef.addEventListener('focus', () => {
      this.normalEyeStyle();
      this.normalHandStyle();
    });

    document.addEventListener('click', (e) => {
      const clickedElem = e.target;
      if (clickedElem !== fullnameRef && clickedElem !== emailRef &&
        clickedElem !== newPasswordRef && clickedElem !== termsRef) {
        this.normalEyeStyle();
        this.normalHandStyle();
      }
    });
  }

  registerUser() {
    console.log(this.reguser);
    this.registerservice.rUser(this.reguser).subscribe(
      date => {
        window.alert("Register successful! 👍🏻");
      },
      error => {
        window.alert("Register isn't successful! 👎🏼");
      }
    );
  }
}
