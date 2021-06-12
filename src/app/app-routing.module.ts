import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeComponent } from './code/code.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'code/:language', component: CodeComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
