import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Reviews } from './pages/reviews/reviews';
import { ReviewFormComponent } from './pages/review-form/review-form';

import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: 'reviews', component: Reviews, canActivate: [authGuard] },
  { path: 'new-review', component: ReviewFormComponent, canActivate: [authGuard] },
  { path: 'edit-review/:id', component: ReviewFormComponent, canActivate: [authGuard] },
];
