import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit {

  baseUrl = environment.baseUrl;
  userGroupList: UserGroups [] = [];
  userGroupHeaderName = 'Add User Group';
  saveUpdate = 'Save';

  userGroupForm = new FormGroup({
    groupId: new FormControl( ),
    groupName: new FormControl('',Validators.required),
    groupDescription : new FormControl('',Validators.required),
    orderBy : new FormControl( )

  });
  
  constructor(private api: ApiService, private router: Router,
           private exchangeDataService: ExchangeDataService) {
  //  this.getUserGroupList();
   }

  ngOnInit(): void {
    this.getGroup();
    this.userGroupList;
     this.userGroupForm.controls["groupId"].setValue(0);
     this.userGroupForm.controls["orderBy"].setValue(1);
  }

 

  resetForm(){
    this.userGroupForm.reset();
    this.userGroupHeaderName = 'Add User Group';
   // this.userGroupButtonMessage = 'Save';
  }


  save(){
    debugger;
    if(this.userGroupForm.valid){
    let request = this.userGroupForm.value;    
    request.groupId = parseInt(request.groupId),
    request.createdById = this.api.loginUserId,
    //console.log("form Group value"+JSON.stringify(request));
    this.api.Post<UserGroups>(this.baseUrl+"/Group/saveGroup",request)
    .subscribe(data =>    
      {
        console.log("save data  Group"+JSON.stringify(data));
        this.getGroup();
        if(this.userGroupForm.value.groupId ===0){
         // this.createForm.reset();
          this.userGroupForm.controls["groupId"].setValue(0);
          alert('usergroup Saved Successfully')
       //   this._alert.showAlert('Department Name Saved Successfully',false);
          this.saveUpdate = 'Save'
        }
        else{
          //this.createForm.reset();
          this.userGroupForm.controls["groupId"].setValue(0);
          alert('Save Name Updated Successfully')
          //this._alert.showAlert('Department Name Updated Successfully',false);        
         this.saveUpdate = 'update'
        }

      }
      );
    }
    else{
    //  this._alert.showAlert('Please Enter Department Name',true);
      return;
    }
  }


  getGroup(){
    this.api.Get<UserGroups[]>(this.baseUrl+'/Group/getAllGroup?flag=1').subscribe(res=>{
      this.userGroupList = res;  
      console.log("==user group name=="+JSON.stringify(this.userGroupList));   
    })
   }

   getsingledata(el:any)
   {
   let singledata = this.userGroupList.filter(item => item.groupId == el);
    return singledata[0];
   }
   editbyid(id:any){
     alert(id)
     console.log("user edit"+id);
     this.userGroupForm.patchValue(this.getsingledata(id));
     this.saveUpdate = "Update";
   }
   deletedbyid(id:any){  
     let request = this.getsingledata(id);
     request.isDeleted = true; 
     this.api.Post<object>(this.baseUrl+"/Group/getAllGroup?flag=4",request)
     .subscribe(data =>
       {   this.getGroup();
           //this._alert.showAlert('Delete successfully',false);  
           alert("Delete successfully");
       }
     );
   }
  



}

export interface UserGroups{
  groupId: number,
  groupName: string,
  groupDescription: string,
  orderBy: number,
  isDeleted: boolean
}
