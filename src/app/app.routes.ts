import { Routes } from '@angular/router';
import { MainTableComponent } from './pages/main-table/main-table.component';
import { DashNavigationComponent } from './pages/dash-navigation/dash-navigation.component';

export const routes: Routes = [
    { path: 'main-table', component: MainTableComponent },
    { path: 'dash-navigation/:number', component: DashNavigationComponent },
    { path: '', redirectTo: '/main-table', pathMatch: 'full' }
  ];