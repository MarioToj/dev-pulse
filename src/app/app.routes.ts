import { Routes } from '@angular/router';
import { CreatePost } from './features/post/pages/create-post/create-post';
import { DashboardPage } from './features/dashboard/pages/dashboard-page/dashboard-page';

export const routes: Routes = [
  {
    path: 'create-post',
    component: CreatePost,
  },
  {
    path: 'dashboard',
    component: DashboardPage,
  },
];
