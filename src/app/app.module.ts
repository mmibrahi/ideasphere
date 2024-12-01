import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainPageComponent } from './main-page/main-page.component';
import { IdeaService } from './Service/idea.service';


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
  providers: [IdeaService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
