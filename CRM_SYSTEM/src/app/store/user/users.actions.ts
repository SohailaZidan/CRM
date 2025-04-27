import { createAction, props } from '@ngrx/store';
import { User } from '../../core/services/user';


// Load Users
export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction('[Users] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[Users] Load Users Failure', props<{ error: any }>());
export const loadUserById = createAction(
    '[User] Load User By Id',
    props<{ id: string }>()
  );
  
export const loadUserByIdSuccess = createAction('[User] Load User Success', props<{ user: User }>());

export const loadUserByIdError = createAction('[User] Load User Failure', props<{ error: any }>());

// Add User
export const addUser = createAction('[Users] Add User', props<{ user: User }>());
export const addUserSuccess = createAction('[Users] Add User Success', props<{ user: User }>());
export const addUserFailure = createAction('[Users] Add User Failure', props<{ error: any }>());

// Edit User
export const editUser = createAction('[Users] Edit User', props<{ user: User }>());
export const editUserSuccess = createAction('[Users] Edit User Success', props<{ user: User }>());
export const editUserFailure = createAction('[Users] Edit User Failure', props<{ error: any }>());

// Delete User
export const deleteUser = createAction('[Users] Delete User', props<{ id: number }>());
export const deleteUserSuccess = createAction('[Users] Delete User Success', props<{ id: number }>());
export const deleteUserFailure = createAction('[Users] Delete User Failure', props<{ error: any }>());
