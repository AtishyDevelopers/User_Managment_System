import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router} from '@angular/router';
import { User } from "../models/user"
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.baseUrl;
  encryptSecretKey = "mySecretKeyHere"; //adding secret key
  loginUserId: number=1;

  constructor(private httpClient: HttpClient, private router: Router) { }

  public Authorize(username : string,password : string){    
    localStorage.setItem("culture","english");
    let culture = localStorage.getItem("culture") ?? 'english';

    let encPassword = this.encryptData(password);
    //console.log(encPassword)
  
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'culture': culture
    }); 
    debugger
    let options = {
      headers: httpHeaders
     }; 
    return this.httpClient.post<User>(this.baseUrl+'/UserMaster/loginUser',
    {
      "username":username,
      "password":password
    },options)
    .subscribe(
    data  => {
      debugger
      if(data){
        localStorage.setItem("currentuser",JSON.stringify(data));
      
        this.router.navigate(['/dashboard']);
      }  
      else
        alert('Incorrect username and password')          
    });
  }

  public Post<T>(url:string,data:any){
        
    let culture = localStorage.getItem("culture")?? 'english';
 
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'culture': culture
    }); 
    
    let options = {
      headers: httpHeaders
     }; 
    return this.httpClient.post<T>(url, data,options);
  }
  public Get<T>(url : string){ 
        
    let culture = localStorage.getItem("culture")?? 'english';
   
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'culture': culture
    });     
    let options = {
      headers: httpHeaders
     }; 
    return this.httpClient.get<T>(url,options);
  }

  public Delete<T>(url: string){
    let culture = localStorage.getItem("culture")?? 'english';
   
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'culture': culture
    });     
    let options = {
      headers: httpHeaders
     }; 

    return this.httpClient.delete<T>(url, options);
  }

  //Data Encryption Function
encryptData(msg:string) {
  var keySize = 256;
  var salt = CryptoJS.lib.WordArray.random(16);
  var key = CryptoJS.PBKDF2(this.encryptSecretKey, salt, {
      keySize: keySize / 32,
      iterations: 100
  });
  
  var iv = CryptoJS.lib.WordArray.random(128 / 8);
  
  var encrypted = CryptoJS.AES.encrypt(msg, key, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
  });
  
  var result = CryptoJS.enc.Base64.stringify(salt.concat(iv).concat(encrypted.ciphertext));
  
  return result;
}
}
