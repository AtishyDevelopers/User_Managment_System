import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { utils } from 'protractor';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import {ROUTES, RouteInfo} from '../../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  baseUrl = environment.baseUrl;
  menuList : RouteInfo[] = [];
  currentUser: User;
  menus: Menu[] = [];

  constructor(private apiservice: ApiService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentuser') || '{}');

    this.apiservice.Get<Menu[]>(this.baseUrl+'/api/UserMenuRoleMap/'+this.currentUser.id).subscribe(data=>{    
      console.log(data);      
      this.menus = data;      
      //console.log(this.menus[1].menuID)
    })
   }

  ngOnInit(): void {
    this.menuList = ROUTES;
  }

  toggleMenuItem(e:MouseEvent){    
    let el = e.target as HTMLElement;
    let li = el.closest("li");
    li?.classList.toggle("mm-active");        
    let ul = li?.getElementsByClassName('nav-second-level')[0];
    ul?.classList.toggle('mm-show');
    ul
  }

}

interface Menu{
  menuID?: number;
  menuName: string;
  menuPath: string;
  menuIcon: string;
  //roleId: number;
  forms?: Menu[];
}
