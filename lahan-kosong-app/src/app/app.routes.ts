import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UploadComponent } from './upload/upload.component';
import { BrowseComponent } from './browse/browse.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';

export const router: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'browse',
      component: BrowseComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'edit/:id',
      component: EditComponent
    },
    {
      path: 'detail/:id',
      component: DetailComponent
    },
    {
      path: '**',
      component: NoContentComponent
    }
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(router) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}