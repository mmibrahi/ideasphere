import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './admin/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Route for LoginComponent
  { path: 'main-page', component: MainPageComponent }, // Route for MainPage
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
