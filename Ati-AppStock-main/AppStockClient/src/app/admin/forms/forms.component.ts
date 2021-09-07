import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  baseUrl = environment.baseUrl;
  formMasterName = 'Add Forms Name';
  formButtonMessage = 'Save';
  formList: FormModel [] =[];

  constructor(private api: ApiService, private router: Router) {}

  userForm = new FormGroup({
    formID:new FormControl(''),
    formName: new FormControl('',Validators.required),
    formDescription: new FormControl('',Validators.required),
    menuID:new FormControl('',Validators.required),  
    moduleID: new FormControl('',Validators.required),
    formPath: new FormControl('',Validators.required),   
    formIcon: new FormControl('',Validators.required),
    OrderBy: new FormControl('',Validators.required),
    });
   
    
  ngOnInit(): void {
    this.getFormList();
    this.formList;
    this.userForm.controls["formID"].setValue(0);    
  }

    formDataSave() { 
      if (this.userForm.valid) {
        let request = this.userForm.value;
         request.formID = parseInt(request.formID),
          request.createdByID = this.api.loginUserId,
          console.log("form Group value" + JSON.stringify(request));
          this.api.Post<FormModel>(this.baseUrl + "/Forms/saveForm?flag=2", request).subscribe(data => {
            console.log("save data Form" + JSON.stringify(data));
            this.getFormList();
            if(this.userForm.value.formID === 0) {
              this.userForm.reset();
              this.userForm.controls["formID"].setValue(0);
              alert('Form Name Saved Successfully')
              // this._alert.showAlert('Department Name Saved Successfully',false);
              this.formButtonMessage = 'Save'
            }
            else {
              this.userForm.reset();
              this.userForm.controls["formID"].setValue(0);
              alert('Save Name Updated Successfully')
              //this._alert.showAlert('Department Name Updated Successfully',false);
              this.formButtonMessage = 'Save'
            }
  
          }
          );
      }
      else {
        // this._alert.showAlert('Please Enter Department Name',true);
        return;
      }
    }
    
    resetForm() {
      this.userForm.reset();
      this.formMasterName = 'Add Forms Name';
      this.formButtonMessage = 'Save';
    }

    getFormList() {
      this.api.Get<FormModel[]>(this.baseUrl+'/Form/getAllForm?flag=1').subscribe(res => {
        this.formList = res;
        console.log("form list" + JSON.stringify(this.formList));
      })
    }
  
    getsingledata(el:any)
    {
    let singledata = this.formList.filter(item => item.formID == el);
     return singledata[0];
    }
    editbyid(id:any){     
      this.userForm.patchValue(this.getsingledata(id));
      this.formButtonMessage = "Update";
    }
    deletedbyid(id:any){  
      alert(id);
      let request = this.getsingledata(id);
      request.isDeleted = true; 
      this.api.Post<object>(this.baseUrl+"/Forms/saveForms?flag=4",request)
      .subscribe(data =>
        {   this.getFormList();
            //this._alert.showAlert('Delete successfully',false);  
            alert("Delete successfully");
        }
      );
    }
  
  
  
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
  
