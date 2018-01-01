import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { CKEditorModule } from 'ng2-ckeditor';

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
import { AdminlahanComponent } from './adminlahan/adminlahan.component';
import { AdminverifComponent } from './adminverif/adminverif.component';
import { AdminpublisherComponent } from './adminpublisher/adminpublisher.component';
import { EditComponent } from './edit/edit.component';
import { PostComponent } from './post/post.component';

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
    ContentComponent,
    AdminlahanComponent,
    AdminverifComponent,
    AdminpublisherComponent,
    EditComponent,
    PostComponent
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
      { path: 'edit/:id', component: EditComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'post', component: PostComponent },
      { path: '**', component: NoContentComponent },
    ], {useHash: true}),
    CKEditorModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeTMHQ3sm7_RXFEBlAbVRrHwCH6sOTSUU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
