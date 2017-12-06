import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoverComponent } from './cover/cover.component';
import { BrowseComponent } from './browse/browse.component';
import { NoContentComponent } from './no-content/no-content.component';
import { DetailComponent } from './detail/detail.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoverComponent,
    BrowseComponent,
    NoContentComponent,
    DetailComponent,
    AuthComponent,
    ProfileComponent,
    DashboardComponent,
    UploadComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'browse', component: BrowseComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '**', component: NoContentComponent },
    ]),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
