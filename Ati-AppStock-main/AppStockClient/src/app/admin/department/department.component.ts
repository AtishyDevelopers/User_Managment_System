import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  getDepartmenList:DepartmentModel[]=[];
  baseUrl = environment.baseUrl;
  DepartmentName = 'Add Department Name';
  saveUpdate = 'Save';
 // loginUserId :number= 1

  constructor(private router: Router, private api: ApiService,) { }

  departmentGroupForm = new FormGroup({
    departmentID : new FormControl(''),
    departmentName : new FormControl('',[Validators.required])
  }) 

  ngOnInit(): void {
 this.getDepartment();
  this.departmentGroupForm.controls["departmentID"].setValue(0);
  }

  save(){
    if(this.departmentGroupForm.valid){
    let request = this.departmentGroupForm.value;    
    request.departmentID = parseInt(request.departmentID),
    request.createdByID = this.api.loginUserId,
    console.log("form Group value"+JSON.stringify(request));
    this.api.Post<DepartmentModel>(this.baseUrl+"/api/base/savedepartment",request)
    .subscribe(data =>    
      {
        console.log("save data odf department"+JSON.stringify(data));
        this.getDepartment();
        if(this.departmentGroupForm.value.departmentID ===0){
          this.departmentGroupForm.reset();
          this.departmentGroupForm.controls["departmentID"].setValue(0);
          alert('Department Name Added Successfully')
       //   this._alert.showAlert('Department Name Saved Successfully',false);
          this.saveUpdate = 'Save'
        }
        else{
          this.departmentGroupForm.reset();
          this.departmentGroupForm.controls["departmentID"].setValue(0);
          alert('Department Name Updated Successfully')
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
     this.departmentGroupForm.value;
   }
  
  // getsingledata(el)
  // {
  // let singledata = this.getDepartmenList.filter(item => item.departmentID == el);
  //  return singledata[0];
  // }
  // editbyid(id){
  //   this.departmentGroupForm.patchValue(this.getsingledata(id));
  //   this.saveUpdate = "Update";
  // }

  getDepartment(){
  this.api.Get<DepartmentModel[]>(this.baseUrl+'/api/Base/getDepartment?flag=1').subscribe(res=>{
    this.getDepartmenList = res;  
    console.log("==Department name=="+JSON.stringify(this.getDepartmenList));   
  })
 }


 getsingledata(el:any)
 {
 let singledata = this.getDepartmenList.filter(item => item.departmentID == el);
  return singledata[0];
 }
 editbyid(id:any){
   alert(id)
   this.departmentGroupForm.patchValue(this.getsingledata(id));
   this.saveUpdate = "Update";
 }
 deletedbyid(id:any){  
   let request = this.getsingledata(id);
   request.isDeleted = true; 
   this.api.Post<object>(this.baseUrl+"/api/Base/savedepartment",request)
   .subscribe(data =>
     {   this.getDepartment();
         //this._alert.showAlert('Delete successfully',false);  
         alert("Delete successfully");
     }
   );
 }


}



export interface DepartmentModel{
  departmentID:number,
  departmentName:string,  
  isDeleted : boolean
}