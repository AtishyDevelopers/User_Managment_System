import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { RolesComponent } from './roles/roles.component';
import { UserGroupRolesMapComponent } from './user-group-roles-map/user-group-roles-map.component';
import { UserGroupComponent } from './user-group/user-group.component';
import {ModuleComponent} from './module/module.component';
import {MenusComponent} from './menus/menus.component';
import {FormsComponent} from './forms/forms.component'
import {DepartmentComponent} from './department/department.component'
import { RoleformMapComponent } from './roleform-map/roleform-map.component';
import { DesignationComponent } from './designation/designation.component';

export const AdminRoutes: Routes = [    
    { path: '', redirectTo: "addemployee" , pathMatch: "relative"},    
    { path: 'addemployee', component: RegisterEmployeeComponent},    
    { path: 'employeelist', component: EmployeeListComponent},    
    { path: 'roles', component: RolesComponent},    
    { path: 'usergroup', component: UserGroupComponent},    
    { path: 'usergroupdetails', component: UserGroupRolesMapComponent},    
    { path: 'createuser', component: CreateUserComponent},
    { path: 'module', component: ModuleComponent},
    { path: 'menus' , component: MenusComponent},
    { path: 'forms' , component: FormsComponent},
    { path: 'department' , component: DepartmentComponent},
    { path: 'roleformMap' , component: RoleformMapComponent},
    { path: 'designation' , component: DesignationComponent},
];
