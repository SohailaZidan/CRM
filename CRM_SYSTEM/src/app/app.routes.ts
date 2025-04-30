import { Routes } from '@angular/router';
import { UserListComponent } from './features/admin/pages/users/user-list/user-list.component';
import { EditAndAddUserComponent } from './features/admin/pages/users/edit-and-add-user/edit-and-add-user.component';
import { DashbordComponent } from './features/admin/dashbord/dashbord.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeComponent } from './features/user/home/home.component';
import { AnalyticsComponent } from './features/admin/pages/analytics/analytics/analytics.component';

export const routes: Routes = [
  // user
  {
    path: '',
    component : UserLayoutComponent ,
    children : [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },

      {
        path: 'home',
        component: HomeComponent
      },
      
    ]
  },
  // Admin
  {
    path: 'admin',
    component : AdminLayoutComponent ,
    children : [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: AnalyticsComponent
      },
      {
        path: 'users',
        component: UserListComponent
      },
      {
        path: 'user/add',
        component: EditAndAddUserComponent
      },
      {
        path: 'user/edit/:id',
        component: EditAndAddUserComponent
      },
    ]
  },
     
     
      {
        path: '**',
        redirectTo: '/users'
      }
];
