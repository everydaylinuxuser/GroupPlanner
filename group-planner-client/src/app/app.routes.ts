import { AppShellComponent } from './layout/app-shell/app-shell.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CommunityGroupsComponent } from './pages/communitygroups/communitygroups.component';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    canActivate: [authGuard],
    component: AppShellComponent,
    children: [
      { path: 'communitygroups', component: CommunityGroupsComponent },
      { path: '', redirectTo: 'communitygroups', pathMatch: 'full' }
    ]
  }
];
