import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RolesComponent } from './roles/roles.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { UserGroupRolesMapComponent } from './user-group-roles-map/user-group-roles-map.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { TranslateModule } from '@ngx-translate/core';
import { ModuleComponent } from './module/module.component';
import { MenusComponent } from './menus/menus.component';
import { FormsComponent } from './forms/forms.component';
import { DepartmentComponent } from './department/department.component';
import { RoleformMapComponent } from './roleform-map/roleform-map.component';
import { DesignationComponent } from './designation/designation.component';




@NgModule({
  declarations: [RegisterEmployeeComponent, EmployeeListComponent, RolesComponent, UserGroupComponent, UserGroupRolesMapComponent, CreateUserComponent, ModuleComponent, MenusComponent, FormsComponent, DepartmentComponent, RoleformMapComponent, DesignationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    TranslateModule.forChild(),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
