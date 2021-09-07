import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {

  baseUrl = environment.baseUrl;
  designationMasterName = 'Designation Master Name';
  formButtonMessage = 'Save';
  designationList: DesignationModel [] =[];

  constructor(private api: ApiService, private router: Router) {}

  designationForm = new FormGroup({
    designationId :new FormControl(''),
    designationName : new FormControl('',Validators.required)
    });
   
    
  ngOnInit(): void {
    this.getDesignationList();
    this.designationList;
    this.designationForm.controls["designationId"].setValue(0);    
  }

   Save() { 
      if (this.designationForm.valid) {
        let request = this.designationForm.value;
         request.designationId = parseInt(request.designationId),
          request.createdByID = this.api.loginUserId,      
          this.api.Post<DesignationModel>(this.baseUrl + "/api/Base/saveDesignation", request).subscribe(data => {
            this.getDesignationList();
            if(this.designationForm.value.designationId === 0) {
              this.designationForm.reset();
              this.designationForm.controls["designationId"].setValue(0);
              alert('Form Name Saved Successfully')
              // this._alert.showAlert('Department Name Saved Successfully',false);
              this.formButtonMessage = 'Save'
            }
            else {
              this.designationForm.reset();
              this.designationForm.controls["designationId"].setValue(0);
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
      this.designationForm.reset();
      this.designationMasterName = 'Designation Master Name';
      this.formButtonMessage = 'Save';
    }

    getDesignationList() {
      this.api.Get<DesignationModel[]>(this.baseUrl+'/api/Base/getAllDesignation?flag=1').subscribe(res => {
        this.designationList = res;
        console.log("list" + JSON.stringify(this.designationList));
      })
    }
  
    getsingledata(el:any)
    {
    let singledata = this.designationList.filter(item => item.designationId == el);
     return singledata[0];
    }
    editbyid(id:any){     
      this.designationForm.patchValue(this.getsingledata(id));
      this.formButtonMessage = "Update";
    }
    deletedbyid(id:any){  
     // alert(id);
      let request = this.getsingledata(id);
      request.isDeleted = true; 
      this.api.Post<object>(this.baseUrl+"/api/Base/saveDesignation",request)
      .subscribe(data =>
        {   this.getDesignationList();
            //this._alert.showAlert('Delete successfully',false);  
            alert("Delete successfully");
        }
      );
    }
  
  
  
  }

  
  export interface DesignationModel {
    designationId      : number,
    designationName    : string,        
    isDeleted    : boolean,
        
  }
  