import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ClientComponent } from './client/client.component';

import { ArticleService } from './services/article.service';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from './services/gallery.service';

const routes:Routes = [
	{path: '', redirectTo: 'article', pathMatch: 'full'},
	{path: 'article', component: ArticleComponent},
  {path: 'client', component: ClientComponent},
  {path: 'gallery', component: GalleryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ClientComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpModule
  ],
  providers: [ArticleService,GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
