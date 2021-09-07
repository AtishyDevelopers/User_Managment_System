import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  baseUrl = environment.baseUrl;
  employees: Employees [] = [];

  constructor(private api: ApiService) {
     this.api.Get<Employees[]>(this.baseUrl+'/api/Employees').subscribe(res=>{
      this.employees = res
      console.log(this.employees)
    })
   }

  ngOnInit(): void {
  }

  editEmployee(employeeID: number){
    console.log(employeeID)
  }

  deleteEmployee(employeeID: number){
    let choice = window.confirm("Are you sure to delete ??");
    if(choice){
      this.api.Delete(this.baseUrl+'/api/Employees/'+employeeID).subscribe(data=>{
        console.log(data)
        alert('Data deleted successfully');
      });
    }
  }

}

export interface Employees{
    employeeID: number,
    employeeName: string,
    age: number,
    department: string,
    status: string,
    auditTs: string
}
