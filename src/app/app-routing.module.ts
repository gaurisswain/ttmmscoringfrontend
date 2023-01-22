import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './final/admin-login/admin-login.component';
import { AdminComponent } from './final/admin/admin.component';
import { ResultsComponent } from './final/results/results.component';
import { ScoringComponent } from './final/scoring/scoring.component';
// import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', component: TimerComponent },
  { path: 'scoring', component: ScoringComponent },
  { path: 'results', component: ResultsComponent },
  // { path: 'timer', component: TimerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
