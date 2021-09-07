import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  baseUrl = environment.baseUrl;
  moduleGroupName = 'Add Module Name';
  moduleButtonMessage = 'Save';

  moduleList: Modules[] = [];

  constructor(private router: Router, private api: ApiService,) { }

  moduleForm = new FormGroup({
    moduleID: new FormControl(''),
    moduleName: new FormControl('')
  });

  ngOnInit(): void {
    this.getModulesList();
    this.moduleList;
   this.moduleForm.controls["moduleID"].setValue(0);

  }

  resetForm() {
    this.moduleForm.reset();
    this.moduleGroupName = 'Add Module Name';
    this.moduleButtonMessage = 'Save';
  }

  save() {
    if (this.moduleForm.valid) {
      let request = this.moduleForm.value;
       request.moduleID = parseInt(request.moduleID),
        request.createdByID = this.api.loginUserId,
        console.log("form Group value" + JSON.stringify(request));
       this.api.Post<Modules>(this.baseUrl + "/Module/savemodule", request)
        .subscribe(data => {
          console.log("save data Modules" + JSON.stringify(data));
          this.getModulesList();
          if (this.moduleForm.value.moduleID === 0) {
            this.moduleForm.reset();
            this.moduleForm.controls["moduleID"].setValue(0);
            alert('Modules Name Saved Successfully')
            // this._alert.showAlert('Department Name Saved Successfully',false);
            this.moduleButtonMessage = 'Save'
          }
          else {
            this.moduleForm.reset();
            this.moduleForm.controls["moduleID"].setValue(0);
           // alert('Save Name Updated Successfully')
            //this._alert.showAlert('Department Name Updated Successfully',false);
            this.moduleButtonMessage = 'Save'
          }

        }
        );
    }
    else {
      // this._alert.showAlert('Please Enter Department Name',true);
      return;
    }
  }

  
  getModulesList() {
    this.api.Get<Modules[]>(this.baseUrl + '/Module/getAllModule?flag=1').subscribe(res => {
      this.moduleList = res
      console.log("module list" + JSON.stringify(this.moduleList));
    })
  }

  getsingledata(el:any)
  {
  let singledata = this.moduleList.filter(item => item.moduleID == el);
   return singledata[0];
  }
  editbyid(id:any){
    alert(id)
    this.moduleForm.patchValue(this.getsingledata(id));
    this.moduleButtonMessage = "Update";
  }
  deletedbyid(id:any){  
    let request = this.getsingledata(id);
    request.isDeleted = true; 
    this.api.Post<object>(this.baseUrl+"/Module/savemodule",request)
    .subscribe(data =>
      {   this.getModulesList();
          //this._alert.showAlert('Delete successfully',false);  
          alert("Delete successfully");
      }
    );
  }



}

export interface Modules {
  moduleID: number,
  moduleName: string,
  isDeleted:boolean,
}
