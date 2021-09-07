import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-roleform-map',
  templateUrl: './roleform-map.component.html',
  styleUrls: ['./roleform-map.component.scss']
})
export class RoleformMapComponent implements OnInit {

  baseUrl = environment.baseUrl;
  roleFormMapName = 'Role Form Map';
  roleButtonMessage = 'Save';
  rolemapList:RoleFormModel []=[]
  roles: Roles [] = [];
  formList: FormModel [] =[];

  constructor(private api: ApiService, private router: Router) {}

  rolemapForm = new FormGroup({   
    roleFormMapID:new FormControl(''),
    formID:new FormControl('',Validators.required),
    roleID: new FormControl('',Validators.required),
    formName: new FormControl('',Validators.required),
    roleName :new FormControl('',Validators.required)
  });

    
  ngOnInit(): void {
    this.getFormList();
    this.getRole();
    this.getrolemapList();
    this.rolemapList;
    this.rolemapForm.controls["roleFormMapID"].setValue(0);    
  }

  formDataSave() { 
    debugger
      if (this.rolemapForm.valid) {
        let request = this.rolemapForm.value;
         request.roleFormMapID = parseInt(request.roleFormMapID),
          request.createdByID = this.api.loginUserId,
          console.log("form  value" + JSON.stringify(request));
          this.api.Post<RoleFormModel>(this.baseUrl + "/RoleForm/saveRoleForm", request).subscribe(data => {
            console.log("role form data " + JSON.stringify(data));
            this.getrolemapList();
            if(this.rolemapForm.value.roleFormMapID === 0) {
              this.rolemapForm.reset();
              this.rolemapForm.controls["roleFormMapID"].setValue(0);
              alert('Role Form Map Saved Successfully')
              // this._alert.showAlert('Department Name Saved Successfully',false);
            //  this.roleButtonMessage = 'Save'
            }
            else {
              this.rolemapForm.reset();
              this.rolemapForm.controls["roleFormMapID"].setValue(0);
              alert('Role Form Map Updated Successfully')
              //this._alert.showAlert('Department Name Updated Successfully',false);
             // this.roleButtonMessage = 'Save'
            }
  
          }
          );
      }
      else {
        // this._alert.showAlert('Please Enter Department Name',true);
        return;
      }
    }
    
 

    getrolemapList() {
      this.api.Get<RoleFormModel[]>(this.baseUrl+'/RoleForm/getAllrolemapFormMap?flag=1').subscribe(res => {
        this.rolemapList = res;
       // console.log("form list" + JSON.stringify(this.rolemapList));
      })
    }
  
    getsingledata(el:any)
    {
    let singledata = this.rolemapList.filter(item => item.roleFormMapID == el);
     return singledata[0];
    }
    editbyid(id:any){     
      this.rolemapForm.patchValue(this.getsingledata(id));
      this.roleButtonMessage = "Update";
    }
    deletedbyid(id:any){  
      alert(id);
      let request = this.getsingledata(id);
      request.isDeleted = true; 
      this.api.Post<object>(this.baseUrl+"/rolemapFormMap/saverolemapFormMap?flag=4",request)
      .subscribe(data =>
        {   this.getrolemapList();
            //this._alert.showAlert('Delete successfully',false);  
            alert("Delete successfully");
        }
      );
    }
  

  resetForm(){
    this.rolemapForm.reset();
    this.roleFormMapName = 'Role Form Map';
    this.roleButtonMessage = 'Save';
  }

  getRole(){
    this.api.Get<Roles[]>(this.baseUrl+'/api/Roll/getRole?Param=&flag=1').subscribe(res=>{
      this.roles = res;  
     // console.log("==Role name=="+JSON.stringify(this.roles));   
    })
   }

   getFormList() {
    this.api.Get<FormModel[]>(this.baseUrl+'/Forms/getAllForms?flag=1').subscribe(res => {
      this.formList = res;
      //console.log("form list" + JSON.stringify(this.formList));
    })
  }
}

export interface RoleFormModel{
   roleFormMapID : number,
   formID : number,
   roleID : number,
   formName : string,
   roleName :string,
   isDeleted:boolean,
}

export interface Roles{
  roleID  : number,
  roleName: string
}

export interface FormModel {
  formID      : number,
  formName    : string
  formDescription : string,
  menuID       : number,
  moduleID     : number,
  formPath     : string,
  formIcon     : string,
  orderBy      : number,
  createdByID  : number,
  createdByIP  : string,
  modifiedByIP : string,
  modifiedByID : number,
  isDeleted    : boolean,
  createdDate  : string,
  modifiedDate : string      
}

