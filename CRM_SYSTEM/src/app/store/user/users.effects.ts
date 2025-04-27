import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as UsersActions from './users.actions';
import { UsersService } from '../../core/services/users.service';

export const loadUsers$ = createEffect(
  (actions$ = inject(Actions)) => {
    const usersService = inject(UsersService);

    return actions$.pipe(
      ofType(UsersActions.loadUsers),
      mergeMap(() =>
        usersService.getUsers().pipe(
          map(users => UsersActions.loadUsersSuccess({ users })),
          catchError(error => of(UsersActions.loadUsersFailure({ error })))
        )
      )
    );
  },
  { functional: true } // ده مهم جداً دلوقتي
);
export const loadUserById$ = createEffect(
  (actions$ = inject(Actions)) => {
    const usersService = inject(UsersService);

    return actions$.pipe(
      ofType(UsersActions.loadUserById),
      mergeMap(action =>
        usersService.getUserById(action.id).pipe(
          map(user => UsersActions.loadUserByIdSuccess({ user })),
          catchError((error) => of(UsersActions.loadUserByIdError({ error })))
        )
      )
    );
  },
  { functional: true }
);



export const addUser$ = createEffect(
  (actions$ = inject(Actions)) => {
    const usersService = inject(UsersService);

    return actions$.pipe(
      ofType(UsersActions.addUser),
      mergeMap(({ user }) =>
        usersService.addUser(user).pipe(
          map(user => UsersActions.addUserSuccess({ user })),
          catchError(error => of(UsersActions.addUserFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);

export const editUser$ = createEffect(
  (actions$ = inject(Actions)) => {
    const usersService = inject(UsersService);

    return actions$.pipe(
      ofType(UsersActions.editUser),
      mergeMap(({ user }) =>
        usersService.editUser(user).pipe(
          map(user => UsersActions.editUserSuccess({ user })),
          catchError(error => of(UsersActions.editUserFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);

export const deleteUser$ = createEffect(
  (actions$ = inject(Actions)) => {
    const usersService = inject(UsersService);

    return actions$.pipe(
      ofType(UsersActions.deleteUser),
      mergeMap(({ id }) =>
        usersService.deleteUser(id).pipe(
          map(() => UsersActions.deleteUserSuccess({ id })),
          catchError(error => of(UsersActions.deleteUserFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);
