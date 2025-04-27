import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectSelectedUser } from '../../../../../store/user/users.selectors';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import * as UsersActions from '../../../../../store/user/users.actions';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-edit-and-add-user',
  standalone: true,
  imports: [ReactiveFormsModule , NgIf],
  templateUrl: './edit-and-add-user.component.html',
  styleUrl: './edit-and-add-user.component.css'
})
export class EditAndAddUserComponent {
  form: any;
  isEditMode = signal(false);
  userId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  intiliazeForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.intiliazeForm();
    this.LoadData();
  }

  LoadData() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.isEditMode.set(true);
        this.userId = id;
        this.store.dispatch(UsersActions.loadUserById({  id }));

        this.store.select(selectSelectedUser).subscribe(user => {
          if (user) {
            this.form.patchValue(user);
            console.log(this.form.value);
          }
        });
      } else {
        this.form.reset();
        this.isEditMode.set(false);
      }
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.value;

    if (this.isEditMode()) {
      this.store.dispatch(UsersActions.editUser({ 
        user: { id: this.userId!, ...formValue } 
      }));
    } else {
      this.store.dispatch(UsersActions.addUser({ 
        user: formValue 
      }));
    }

    // بعد ما يخلص ممكن ترجعي للليست أو تعملي أي حاجة
    this.router.navigate(['/users']);
  }
  
}
