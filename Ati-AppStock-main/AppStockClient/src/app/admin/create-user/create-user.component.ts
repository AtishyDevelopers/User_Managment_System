import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  baseUrl = environment.baseUrl;
  getUserList:Users[]=[];
  UserName = 'Create User';
  saveUpdate = 'Save';


  createForm = new FormGroup({
    userID: new FormControl(''),
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    address : new FormControl(''),
    doB : new FormControl(''),
    doJ : new FormControl(''),
    gender : new FormControl(''),
  });

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getUser();

    this.getUserList;

     this.createForm.controls["userID"].setValue(0);
  }

  getUser(){
    this.api.Get<Users[]>(this.baseUrl+'/UserMaster/getAllUser').subscribe(res=>{
      this.getUserList = res;  
      console.log("==User name=="+JSON.stringify(this.getUserList));   
    })
   }

   save(){
    if(this.createForm.valid){
    let request = this.createForm.value;    
    request.userID = parseInt(request.userID),
    request.createdByID = this.api.loginUserId,
    console.log("form Group value"+JSON.stringify(request));
    this.api.Post<Users>(this.baseUrl+"/UserMaster/saveUser?flag=2",request)
    .subscribe(data =>    
      {
        console.log("save data  User"+JSON.stringify(data));
        this.getUser();
        if(this.createForm.value.userID ===0){
         // this.createForm.reset();
          this.createForm.controls["userID"].setValue(0);
          alert('create user Saved Successfully')
       //   this._alert.showAlert('Department Name Saved Successfully',false);
          this.saveUpdate = 'Save'
        }
        else{
          //this.createForm.reset();
          this.createForm.controls["userID"].setValue(0);
          alert('Save Name Updated Successfully')
          //this._alert.showAlert('Department Name Updated Successfully',false);        
         this.saveUpdate = 'Save'
        }

      }
      );
    }
    else{
    //  this._alert.showAlert('Please Enter Department Name',true);
      return;
    }
  }

  getsingledata(el:any)
  {
  let singledata = this.getUserList.filter(item => item.userId == el);
   return singledata[0];
  }
  editbyid(id:any){
    alert(id)
    console.log("user edit"+id);
    this.createForm.patchValue(this.getsingledata(id));
    this.saveUpdate = "Update";
  }
  deletedbyid(id:any){  
    let request = this.getsingledata(id);
    request.isDeleted = true; 
    this.api.Post<object>(this.baseUrl+"/UserMaster/saveUser?flag=4",request)
    .subscribe(data =>
      {   this.getUser();
          //this._alert.showAlert('Delete successfully',false);  
          alert("Delete successfully");
      }
    );
  }


}

export interface Users{
  userId: number;  
  firstName: string;
  lastName : string;
  userName: string;
  password: string;
  address: string;
  doB: Date;
  doJ: Date;
  gender: string;
  isDeleted: boolean;
}