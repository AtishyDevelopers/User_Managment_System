import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  baseUrl = environment.baseUrl;

  constructor(private api: ApiService) { 
    this.api.Get(this.baseUrl+'/api/Users/').subscribe(data=>{
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}
