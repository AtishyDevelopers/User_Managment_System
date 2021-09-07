import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
currentUser: User;
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentuser') || '{}')[0];    
   }

  ngOnInit(): void {
  }

}
