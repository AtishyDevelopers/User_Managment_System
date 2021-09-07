import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';
import { User } from '../models/user';
import { USERS } from '../app.component';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  baseUrl = environment.baseUrl;
  userlist: User[];
  rstring = '';
  captchaMsg = '';

  randomString(length:number, chars:string) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  generateCaptcha(){
    this.rstring = this.randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    this.loginForm.controls['captcha'].setValue(this.rstring);
  }
  //rString = this.randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    captcha: new FormControl(''),
    recaptcha: new FormControl('')
  });

  get captchaValidator(){
    return this.loginForm.get('captcha')?.value;
  }
  
  get confirmCaptchaValidator(){
    return this.loginForm.get('recaptcha')?.value;
  }

  constructor(private router: Router, private api: ApiService) {
    this.userlist = USERS;
    this.generateCaptcha();
    // this.api.Get(this.baseUrl+'/api/Users/').subscribe(data=>{
    //   console.log(data)
    // })
   }

  ngOnInit(): void {
  }

  redirectToDashboard(){
    
    let loginUser = this.loginForm.value;

    let captcha = this.loginForm.get('captcha')?.value;

    let confirmCaptcha = this.loginForm.get('recaptcha')?.value;

    if(captcha !== confirmCaptcha ){
      //alert('Please enter valid captcha !!!');
      this.captchaMsg = "Incorrect Captcha !!! Please enter correct captcha"
      return;
    }
    
    let currentUser = this.userlist.filter(u => {
      return u.username == loginUser.username && u.password == loginUser.password
    });

    // if(currentUser.length > 0){
    //   localStorage.setItem('currentuser',JSON.stringify(currentUser))
    //   //this.showNotification('top','center',1,'Welcome to Maxidoo PMS')
    //   this.router.navigate(['/dashboard'])
    // }
    debugger
    this.api.Authorize(this.loginForm.get('username')?.value,this.loginForm.get('password')?.value);
  }

}
