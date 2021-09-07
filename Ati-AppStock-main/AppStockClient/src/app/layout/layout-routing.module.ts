import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookRoomComponent } from '../book-room/book-room.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TestComponent } from '../test/test.component';
import { FileUploadAsyncComponent } from './file-upload-async/file-upload-async.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LayoutComponent } from './layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const LayoutRoutes: Routes = [    
    { path: '', component: DashboardComponent},
    { path: 'test', component: TestComponent },
    { path: 'roombooking', component: BookRoomComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'upload', component: FileUploadComponent },
    { path: 'asyncupload', component: FileUploadAsyncComponent },
];
