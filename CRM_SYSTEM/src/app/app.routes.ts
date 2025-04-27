import { Routes } from '@angular/router';
import { UserListComponent } from './features/admin/pages/users/user-list/user-list.component';
import { EditAndAddUserComponent } from './features/admin/pages/users/edit-and-add-user/edit-and-add-user.component';
import { DashbordComponent } from './features/admin/dashbord/dashbord.component';

export const routes: Routes = [
 
      {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        component: DashbordComponent
      },
      {
        path: 'user/add',
        component: EditAndAddUserComponent
      },
      {
        path: 'user/edit/:id',
        component: EditAndAddUserComponent
      },
      {
        path: '**',
        redirectTo: '/users'
      }
];
