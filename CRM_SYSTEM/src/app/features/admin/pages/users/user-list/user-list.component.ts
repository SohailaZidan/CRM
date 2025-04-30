import { Component, ChangeDetectionStrategy, computed, effect, signal } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import * as UsersActions from '../../../../../store/user/users.actions';
import * as UsersSelectors from '../../../../../store/user/users.selectors';
import { User } from '../../../../../core/services/user';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../../../../../shared/components/page-title/page-title.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ RouterLink , NgClass , PageTitleComponent ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  users = signal<User[]>([]);
  loading = signal(false);

  constructor(private store: Store) {}

  ngOnInit() {
   this.GetAllUsers();
  }
  GetAllUsers(){
    this.store.dispatch(UsersActions.loadUsers());
    this.store.select(UsersSelectors.selectAllUsers).subscribe(users => {
      this.users.set(users);
    });
    this.store.select(UsersSelectors.selectUsersLoading).subscribe(loading => {
      this.loading.set(loading);
    });
  }
  deleteUser(id: number) {
    this.store.dispatch(UsersActions.deleteUser({ id }));
  }

}
