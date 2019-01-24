import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeatureDetailComponent } from './components/feature-detail/feature-detail.component';
import { BuyEntriesComponent } from './components/buy-entries/buy-entries.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { BuyEntriesMgmtComponent } from './components/buy-entries-mgmt/buy-entries-mgmt.component';
import { AddBuyEntryComponent } from './components/add-buy-entry/add-buy-entry.component';

const routes: Routes = [
  {path: 'features', component: FeaturesComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: FeatureDetailComponent},
  {path: 'buy-entries', component: BuyEntriesComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'buy-entries-mgmt', component: BuyEntriesMgmtComponent, canActivate: [AuthGuard] },
  {path: 'add-buy-entry', component: AddBuyEntryComponent, canActivate: [AuthGuard] }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }

