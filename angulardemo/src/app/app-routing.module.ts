import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { OSScanComponent } from './OSScan/osscan.component';


const routes: Routes = [
  { path: '', component: OSScanComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'osscan', component: OSScanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
