import { StudentRoutingModule } from './student/student-routing.module';
import { FirstComponent } from './first/first.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'first-component', component: FirstComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StudentRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
