import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';import { LayoutComponent } from './layout/layout.component';
;
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {
    path: 'dashboard', component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
      }
    ]
  },
  {
    path: 'admin', component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [    
    RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
