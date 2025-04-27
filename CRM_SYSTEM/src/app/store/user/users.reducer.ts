import { createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';
import { User } from '../../core/services/user';

export interface UsersState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: any;
}

export const initialState: UsersState = {
  users: [],
  loading: false,
  error: null ,
  selectedUser:  null
};

export const usersReducer = createReducer(
  initialState,

  // Load
  on(UsersActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(UsersActions.loadUsersSuccess, (state, { users }) => ({ ...state, loading: false, users })),
  on(UsersActions.loadUserByIdSuccess, (state, { user }) => ({
    ...state,
    selectedUser: user
  })),
  
  on(UsersActions.loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error })),

  // Add
  on(UsersActions.addUserSuccess, (state, { user }) => ({ ...state, users: [...state.users, user] })),
  on(UsersActions.addUserFailure, (state, { error }) => ({ ...state, error })),

  // Edit
  on(UsersActions.editUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u => u.id === user.id ? user : u)
  })),
  on(UsersActions.editUserFailure, (state, { error }) => ({ ...state, error })),

  // Delete
  on(UsersActions.deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter(user => user.id !== id)
  })),
  on(UsersActions.deleteUserFailure, (state, { error }) => ({ ...state, error })),
);
