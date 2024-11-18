import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';
import { PostService } from './main-page/post.service';  // Import PostService


@NgModule({
  declarations: [
     AppComponent,
     MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule 
  ],
  providers: [PostService],  // Register PostService hereproviders: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
