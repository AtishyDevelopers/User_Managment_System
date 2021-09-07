import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DropDown } from 'src/app/models/DropDown';
import { ApiService } from 'src/app/services/api.service';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-group-roles-map',
  templateUrl: './user-group-roles-map.component.html',
  styleUrls: ['./user-group-roles-map.component.scss']
})
export class UserGroupRolesMapComponent implements OnInit {

  baseUrl = environment.baseUrl;
  rolelist: DropDown[] = [];
  selectedRole: FormControl = new FormControl(0);
  roles: UserGroupRolesMap[] = [];
  userGroupId: number = 0;
  constructor(private api: ApiService, private exchangeDataService: ExchangeDataService) {
    
    this.exchangeDataService.currentMessage.subscribe(res =>{
      this.userGroupId = res;
      console.log(this.userGroupId)      
    })

    if(this.userGroupId){
      this.getUserGroupRoles(this.userGroupId);
    }
    this.api.Get<DropDown[]>(this.baseUrl+'/api/Dropdown/roles').subscribe(res=>{
      this.rolelist = res      
      console.log(this.rolelist)
    })

   }

  ngOnInit(): void {
  }

  getUserGroupRoles(userGroupId: number){
    this.api.Get<UserGroupRolesMap[]>(this.baseUrl+'/api/UserGroupRolesMap/'+userGroupId).subscribe(res=>{
      this.roles = res; 
      console.log(this.roles,"showing mapping")
    })
  }

  show(){
    console.log(this.selectedRole.value)
    if(this.selectedRole.value && this.userGroupId > 0){
      let roleName = this.rolelist.filter(role => role.id == this.selectedRole.value)
    
      this.roles.push({
        roleID: parseInt(this.selectedRole.value),
        roleName: roleName[0].text,
        userGroupID: this.userGroupId,
        userGroupName: 'groupname'
      });

      console.log(this.roles)
    }    
  }

  removeRole(roleID: number){
    console.log(roleID)
    let indexToRemove = this.roles.findIndex(el => el.roleID == roleID);
    console.log(indexToRemove)
    this.roles.splice(indexToRemove,1);
  }

  onSubmit(){
    console.log(JSON.stringify(this.roles))

    if(this.roles.length > 0){
      this.api.Post(this.baseUrl+'/api/UserGroupRolesMap',JSON.stringify(this.roles)).subscribe(data=>{          
        alert('User Group added successfully!!!');      
      });
    }
  }

}

export interface UserGroupRolesMap{
  userGroupID: number;
  roleID: number;
  userGroupName: string;
  roleName: string;
}
