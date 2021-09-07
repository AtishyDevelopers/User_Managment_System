import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  currentUser: User;

  constructor(private translateConfigService: TranslateConfigService, private router: Router) {     
    this.currentUser = JSON.parse(localStorage.getItem('currentuser') || '{}')[0];    
  }

  ngOnInit(): void {
  }

  changeLang(language: string){                
    this.translateConfigService.changeLanguage(language);
  }

  toggleRightBar(){    
    let el = document.getElementById("mainbody") as HTMLElement;
    el.classList.add("right-bar-enabled");
  }

  toggleLeftSidebar(){
    let el = document.getElementById("mainbody") as HTMLElement;
    el.classList.toggle("sidebar-enable");
    el.classList.toggle("enlarged");
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
