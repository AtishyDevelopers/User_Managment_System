import { Component, OnInit } from '@angular/core';

import { TranslateConfigService } from '../../app/services/translate-config.service';
import { ThemeconfigService } from '../services/themeconfig.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private themeconfigService: ThemeconfigService) { }

  ngOnInit(): void {
  }

  toggleRightBar(){    
    let el = document.getElementById("mainbody") as HTMLElement;    
    if(el.classList.contains("right-bar-enabled")){
      el.classList.remove('right-bar-enabled');
    }    
  }

  changeTheme(e:any){
    console.log(e.target.checked)
    this.themeconfigService.changeMessage('/assets/css/bootstrap-dark.min.css');    
    // let themeSwitch = document.getElementById("dark-mode-switch");
    // console.log(themeSwitch)
    // themeSwitch?.addEventListener('change',(e)=>{
    //   console.log(e)
    // }); 
  }

}
