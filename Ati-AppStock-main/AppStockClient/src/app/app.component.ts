import { AfterViewInit, Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { User } from './models/user';
import { DomSanitizer } from '@angular/platform-browser';

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,OnInit {
  title = 'MaxidooNew';
  cssUrl: string = '';
  cssUrl1: string = '/assets/css/icons.min.css';
  cssUrl2: string = '/assets/css/app.min.css';

  constructor(private translate: TranslateService,public sanitizer: DomSanitizer){
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
    this.cssUrl = '/assets/css/bootstrap.min.css';
  }

  ngAfterViewInit(){
    $(document).ready(function(){
      console.log('jquery worked')
      }); 

    console.log("User List", USERS)  
  }
}

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  role: number;
  child?: RouteInfo[];
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard',     title: 'Dashboard',         icon:'ti-home',       class: '' ,role:1},  
 // { path: '/dashboard/profile',         title: 'User Profile',             icon:'fas fa-user-cog',    class: '' ,role:1},
  //{ path: '/icons',         title: 'UI Elements',             icon:'ti-paint-bucket',    class: '' ,role:1},
  
  
 
  { path: '/admin',          title: 'Admin',      icon:'ti-hand-point-right',  class: '' ,role:1,
    child: [
     // { path: '/admin/addemployee', title: 'Add Employee',     icon:'fas fa-person-booth',    class: '' ,role:2},
     // { path: '/admin/employeelist', title: 'Employees List',     icon:'fas fa-person-booth',    class: '' ,role:2},
      { path: '/admin/usergroup', title: 'User Group',     icon:'fas fa-person-booth',    class: '' ,role:2},
      { path: '/admin/roles', title: 'Roles Master',     icon:'fas fa-person-booth',    class: '' ,role:2},
      { path: '/admin/createuser', title: 'User Profile',     icon:'fas fa-person-booth',    class: '' ,role:2},
      { path: '/admin/module', title: 'Module Master',     icon:'fas fa-person-booth',    class: '' ,role:2},
      { path: '/admin/menus', title: 'Menus Master',     icon:'fas fa-person-booth',    class: '' ,role:2},
      { path: '/admin/forms', title: 'Forms Master',     icon:'fas fa-person-booth',    class: '' ,role:2},
      { path: '/admin/department', title: 'Department Master',     icon:'fas fa-person-booth',    class: '' ,role:2},
      { path: '/admin/designation', title: 'Designation Master',     icon:'fas fa-person-booth',    class: '' ,role:2},
      { path: '/admin/roleFormMap', title: 'Role Form Map',     icon:'fas fa-person-booth',    class: '' ,role:2},
    ]
  },
   //{ path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' ,role:1},
   //{ path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' ,role:3},
   //{ path: '/roombooking',       title: 'Book Room',    icon:'nc-spaceship',  class: ''  ,role:2},
   //{ path: '/roomlist',       title: 'Room List',    icon:'nc-spaceship',  class: ''  ,role:2},
   //{ path: '/employees',       title: 'Add Employee',    icon:'nc-diamond',   class: ''  ,role:3},
   //{ path: '/employeeslist',       title: 'Employee List',  icon:'nc-tile-56',class: ''  ,role:3},
  //{ path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' ,role:1},
];

export const USERS: User[] = [  
  { id: 1, username: "rohit", password: "rohit", role: "user", fullname: "Rohit Kumar"},
  { id: 2, username: "sumit", password: "sumit", role: "user", fullname: "Sumit Tiwari"},
  { id: 3, username: "rupesh", password: "rupesh", role: "user", fullname: "Rupesh Pandey"},
];

