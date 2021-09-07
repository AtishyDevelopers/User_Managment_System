import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  menuGroupName = 'Add Menu Name';
  menuButtonMessage = 'Save';

  constructor() { }

  userGroupForm = new FormGroup({});

  ngOnInit(): void {
  }

  resetForm(){
    //this.userGroupForm.reset();
    this.menuGroupName = 'Add Menu Name';
    this.menuButtonMessage = 'Save';
  }

}
