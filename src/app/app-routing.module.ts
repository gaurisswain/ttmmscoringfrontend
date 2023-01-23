import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './final/admin-login/admin-login.component';
import { AdminComponent } from './final/admin/admin.component';
import { DetailsComponent } from './final/details/details.component';
import { LandingComponent } from './final/landing/landing.component';
import { ResultsComponent } from './final/results/results.component';
import { ScoringComponent } from './final/scoring/scoring.component';
import { WaitComponent } from './final/wait/wait.component';
// import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ResultComponent } from './final/result/result.component';

const routes: Routes = [
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'scoring', component: ScoringComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'timer', component: TimerComponent },
  { path: '', component: LandingComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'wait', component: WaitComponent },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
