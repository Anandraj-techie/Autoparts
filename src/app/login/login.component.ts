import { Component, ElementRef, Renderer2 } from '@angular/core';
import { User } from '../user.service';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //creating an object for user class
  user:User=new User();

  //Creating a constructor to connect login service
  constructor(
    private loginservice: LoginserviceService,
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
    this.setStyles('.hand-l', 'height: 2.81em; top: 8.4em; left: 7.5em; transform: rotate(0deg);');
    this.setStyles('.hand-r', 'height: 2.81em; top: 8.4em; right: 7.5em; transform: rotate(0deg);');
  }

  private setStyles(selector: string, styles: string) {
    const element = this.elRef.nativeElement.querySelector(selector);
    if (element) {
      this.renderer.setAttribute(element, 'style', styles);
    }
  }

  private setupEventListeners() {
    const usernameRef = this.elRef.nativeElement.querySelector('#username');
    const passwordRef = this.elRef.nativeElement.querySelector('#password');

    usernameRef.addEventListener('focus', () => {
      this.setStyles('.eyeball-l', 'left: 0.75em; top: 1.12em;');
      this.setStyles('.eyeball-r', 'right: 0.75em; top: 1.12em;');
      this.normalHandStyle();
    });

    passwordRef.addEventListener('focus', () => {
      this.setStyles('.hand-l', 'height: 6.56em; top: 3.87em; left: 11.75em; transform: rotate(-155deg);');
      this.setStyles('.hand-r', 'height: 6.56em; top: 3.87em; right: 11.75em; transform: rotate(155deg);');
      this.normalEyeStyle();
    });

    document.addEventListener('click', (e) => {
      const clickedElem = e.target;
      if (clickedElem !== usernameRef && clickedElem !== passwordRef) {
        this.normalEyeStyle();
        this.normalHandStyle();
      }
    });
  }

  loginRegister() {

    console.log(this.user);
    this.loginservice.loginUser(this.user).subscribe(date => {
      window.alert("user login is successful")
    },
      error => window.alert("user login  successful"));

  }

}