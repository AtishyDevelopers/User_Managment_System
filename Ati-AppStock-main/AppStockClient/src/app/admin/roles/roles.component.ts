import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  getRoleList:Roles[]=[];
  baseUrl = environment.baseUrl;
  //roles: Roles [] = [];
  roleHeaderName = 'Add Role';
  //roleButtonMessage = 'Save';
  saveUpdate = 'Save';
  

  rolesForm = new FormGroup({
    roleID: new FormControl(''),
    roleName: new FormControl('',[Validators.required])
  });
  
  constructor(private api: ApiService) {}

  
  ngOnInit(): void {
    this.getRole();
     this.rolesForm.controls["roleID"].setValue(0);
     }

     getRole(){
      this.api.Get<Roles[]>(this.baseUrl+'/api/Roll/getRole?Param=&flag=1').subscribe(res=>{
        this.getRoleList = res;  
        console.log("==Role name=="+JSON.stringify(this.getRoleList));   
      })
     }
  

     save(){
      if(this.rolesForm.valid){
      let request = this.rolesForm.value;    
      request.roleID = parseInt(request.roleID),
      request.createdByID = this.api.loginUserId,
      console.log("form Group value"+JSON.stringify(request));
      this.api.Post<Roles>(this.baseUrl+"/api/Roll/saveRoll",request)
      .subscribe(data =>    
        {
          console.log("save data  Role"+JSON.stringify(data));
          this.getRole();
          if(this.rolesForm.value.roleID ===0){
            this.rolesForm.reset();
            this.rolesForm.controls["roleID"].setValue(0);
            alert('Role Name Saved Successfully')
         //   this._alert.showAlert('Department Name Saved Successfully',false);
            this.saveUpdate = 'Save'
          }
          else{
            this.rolesForm.reset();
            this.rolesForm.controls["roleID"].setValue(0);
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


  resetForm(){
   // this.rolesForm.reset();
    this.roleHeaderName = 'Add Role';
   // this.roleButtonMessage = 'Save';
   this.rolesForm.value;
  }

  getsingledata(el:any)
  {
  let singledata = this.getRoleList.filter(item => item.roleID == el);
   return singledata[0];
  }
  editbyid(id:any){
    alert(id)
    this.rolesForm.patchValue(this.getsingledata(id));
    this.saveUpdate = "Update";
  }
  deletedbyid(id:any){  
    let request = this.getsingledata(id);
    request.isDeleted = true; 
    this.api.Post<object>(this.baseUrl+"/api/Roll/saveRoll",request)
    .subscribe(data =>
      {   this.getRole();
          //this._alert.showAlert('Delete successfully',false);  
          alert("Delete successfully");
      }
    );
  }
  

}

export interface Roles{
  roleID: number,
  roleName: string,
  isDeleted:boolean
}
 