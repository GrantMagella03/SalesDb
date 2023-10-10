import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { E404Component } from './content/e404/e404.component';
import { CustomersComponent } from './content/customers/customers.component';

const routes: Routes = [
  {path: "", redirectTo:'/home', pathMatch:"full"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "customers", component: CustomersComponent},
  {path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
