import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutes } from './layout-routing.module';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { TestComponent } from '../test/test.component';
import { BookRoomComponent } from '../book-room/book-room.component';
import { RouterModule } from '@angular/router';

import {TranslateModule} from '@ngx-translate/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadAsyncComponent } from './file-upload-async/file-upload-async.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TestComponent,
    BookRoomComponent,
    UserProfileComponent,
    FileUploadComponent,
    FileUploadAsyncComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    TranslateModule.forChild()
  ]
})
export class LayoutModule { }
